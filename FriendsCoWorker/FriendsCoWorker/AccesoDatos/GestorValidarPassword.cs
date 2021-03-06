using FriendsCoWorker.ModelsReports;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Net.Mail;
using System.Security.Cryptography;
using System.Text;
using System.Web;

namespace FriendsCoWorker.AccesoDatos
{
    public class GestorValidarPassword
    {
        /*FUNCION PARA HASHEAR UN STRING*/
        public string GetSha256(string str)
        {
            SHA256 sha256 = SHA256Managed.Create();
            ASCIIEncoding encoding = new ASCIIEncoding();
            byte[] stream = null;
            StringBuilder sb = new StringBuilder();
            stream = sha256.ComputeHash(encoding.GetBytes(str));
            for (int i = 0; i < stream.Length; i++) sb.AppendFormat("{0:x2}", stream[i]);
            return sb.ToString();
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        //Metodo para validar que el mail ingresado en el cambio de contraseña exista en la BD
        public bool validarEmail(EmailValidator email)
        {
            string strConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();
            bool result = false;

            using (SqlConnection conn = new SqlConnection(strConn))
            {
                conn.Open();

                SqlCommand comm = new SqlCommand("existeEmail", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@email", email.email));

                SqlDataReader reader = comm.ExecuteReader();

                if (reader.HasRows)
                {
                    result = true;
                }
            }
            return result;
        }

        //Metodo para insertar el token en la tabla clientes, en la columna token_recovery, y que enviaremos al mail de cambio de contraseña
        public void insertarTokenEmail(string token, string email)
        {
            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = new SqlCommand("insertarTokenEmail", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;

                comm.Parameters.Add(new SqlParameter("@email", email));
                comm.Parameters.Add(new SqlParameter("@token", token));

                SqlDataReader dr = comm.ExecuteReader();
            }
        }

        //Metodo para validar el token ingresado en el formulario de cambio de contraseña con el token que esta en la BD
        public bool validarTokenEmail(ValidarPassword np)
        {
            string strConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();
            bool result = false;

            using (SqlConnection conn = new SqlConnection(strConn))
            {
                conn.Open();

                SqlCommand comm = new SqlCommand("validarTokenEmail", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@email", np.email));
                comm.Parameters.Add(new SqlParameter("@token", np.token));

                SqlDataReader reader = comm.ExecuteReader();

                if (reader.HasRows)
                {
                    result = true;
                }
            }
            return result;
        }

        //Metodo que se llama una vez se valide todo, y se realiza el cambio de contraseña
        public void modificarPassword(ValidarPassword np)
        {

            string encriptedPassword = GetSha256(np.newpassword);
            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = new SqlCommand("modificarPassword", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@password", encriptedPassword));
                comm.Parameters.Add(new SqlParameter("@email", np.email));

                SqlDataReader dr = comm.ExecuteReader();
            }
        }
        /*FUNCION ENVIAR EMAIL*/
        public void SendMail(string emailDestino, string token)
        {
            string usuario;
            GestorEmpleado gcliente = new GestorEmpleado();
            usuario = gcliente.obtenerUsuario(emailDestino);

            string emailOrigen = "familycoworker@gmail.com";
            string contraseña = "familycoworker123";

            MailMessage oMailMessage = new MailMessage(emailOrigen, emailDestino, "Cambio Contraseña",
                "<p><strong>Para realizar el cambio de contraseña utilize el siguiente token</strong><p>" +
                "<p><strong>Usuario: <p>" + usuario + "</strong>" +
                "<p> TOKEN: <p>" + token); ;

            oMailMessage.IsBodyHtml = true;

            SmtpClient osmtpClient = new SmtpClient("smtp.gmail.com");
            osmtpClient.EnableSsl = true;
            osmtpClient.UseDefaultCredentials = false;
            osmtpClient.Port = 587;
            osmtpClient.Credentials = new System.Net.NetworkCredential(emailOrigen, contraseña);

            osmtpClient.Send(oMailMessage);
        }
    }
}