using FriendsCoWorker.ModelsReports;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Net.Mail;

namespace FriendsCoWorker.AccesoDatos
{
    public class GestorReportes
    {
        // CANTIDAD DE PROYECTOS POR EMPLEADO
        public int  cantidadPRoyectos(int legajo)
        {
            int cantidad = 0;
            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();
                SqlCommand comm = new SqlCommand("cantProyectosEmpelado", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;

                comm.Parameters.Add(new SqlParameter("@legajo", legajo));

                SqlDataReader dr = comm.ExecuteReader();
                if (dr.Read())
                {
                    int cantidadProyectos = dr.GetInt32(0);

                    cantidad = cantidadProyectos;
                }
                dr.Close();
            }
            return cantidad;
        }

        // OBTENER EMPLEADOS POR PROYECTO
        public List<ReEmplProyecto> ObtenerEmpleadosProyecto(int id_proyecto)
        {
            List<ReEmplProyecto> lista = new List<ReEmplProyecto>();
            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();
                SqlCommand comm = new SqlCommand("reporteEmplProyecto", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@id_proyecto", id_proyecto));

                SqlDataReader dr = comm.ExecuteReader();
                while (dr.Read())
                {
                    int legajo = dr.GetInt32(0);
                    string nombre = dr.GetString(1);
                    string foto = dr.GetString(2);
                    string email = dr.GetString(3);
                    string localidad = dr.GetString(4);
                    string provincia = dr.GetString(5);
                    string tipoEmpleado = dr.GetString(6);

                    ReEmplProyecto emp = new ReEmplProyecto(legajo, nombre, foto, email, localidad, provincia, tipoEmpleado);
                    lista.Add(emp);
                }
                dr.Close();
            }
            return lista;
        }

        // OBTENER TOP PROYECTOS
        public List<TopProyectos> ObtenerTopProyectos()
        {
            List<TopProyectos> lista = new List<TopProyectos>();
            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();
                SqlCommand comm = new SqlCommand("obtenerTopProyectos", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;

                SqlDataReader dr = comm.ExecuteReader();
                while (dr.Read())
                {
                    double promedio = dr.GetDouble(0);
                    int id_proyecto = dr.GetInt32(1);
                    string nombre_proyecto = dr.GetString(2);

                    TopProyectos pro = new TopProyectos(promedio, id_proyecto, nombre_proyecto);
                    lista.Add(pro);
                }
                dr.Close();
            }
            return lista;
        }

        // OBTENER TOP Empleados
        public List<TopEmpleados> ObtenerTopEmpleados()
        {
            List<TopEmpleados> lista = new List<TopEmpleados>();
            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();
                SqlCommand comm = new SqlCommand("obtenerTopEmpleados", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;

                SqlDataReader dr = comm.ExecuteReader();
                while (dr.Read())
                {
                    double promedio = dr.GetDouble(0);
                    int legajo = dr.GetInt32(1);
                    string nombre_empleado = dr.GetString(2);

                    TopEmpleados pro = new TopEmpleados(promedio, legajo, nombre_empleado);
                    lista.Add(pro);
                }
                dr.Close();
            }
            return lista;
        }

        //METODO PARA ENVIAR EMAIL DE DE CONTACTO
        public void enviarEmailCuenta(EnvioMail envioMail)
        {
            string emailOrigen = "familycoworker@gmail.com";
            string contraseña = "familycoworker123";

            MailMessage oMailMessage = new MailMessage(emailOrigen, emailOrigen, "Consultas Generales",
                "<p><strong>Cliente: " + envioMail.nombre + "</strong><p>" +
                "<p>Telefono: " + envioMail.telefono + "<p><br>" +
                "<p>"+ envioMail.detalleMensaje + " <p><br>");

            oMailMessage.IsBodyHtml = true;

            SmtpClient osmtpClient = new SmtpClient("smtp.gmail.com");
            osmtpClient.EnableSsl = true;
            osmtpClient.UseDefaultCredentials = false;
            osmtpClient.Port = 587;
            osmtpClient.Credentials = new System.Net.NetworkCredential(emailOrigen, contraseña);

            osmtpClient.Send(oMailMessage);
        }

        //Metodo para validar que el mail ingresado en el cambio de contraseña exista en la BD
        public bool validarEmail(EnvioMail email)
        {
            string strConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();
            bool result = false;

            using (SqlConnection conn = new SqlConnection(strConn))
            {
                conn.Open();

                SqlCommand comm = new SqlCommand();
                string consultaSql = @"select email
                                        from Empleados
                                        where email = @email";
                comm.Parameters.Clear();
                comm.Parameters.AddWithValue("@email", email);

                comm.CommandType = System.Data.CommandType.Text;
                comm.CommandText = consultaSql;

                SqlDataReader reader = comm.ExecuteReader();

                if (reader.HasRows)
                {
                    result = true;
                }
            }
            return result;
        }

        //Metodo para insertar el token en la tabla empleados, en la columna token_recovery, y que enviaremos al mail de cambio de contraseña
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
    }
}