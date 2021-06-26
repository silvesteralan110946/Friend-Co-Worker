using FriendsCoWorker.Models;
using FriendsCoWorker.ModelsReports;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Net.Mail;
using System.Web;

namespace FriendsCoWorker.AccesoDatos
{
    public class GestorEmpleado
    {
        // CREAR NUEVO EMPLEADO - CUENTA
        public int nuevoEmpleado2(EmpleadoNuevo nuevo)
        {
            GestorValidarPassword gvPassword = new GestorValidarPassword();

            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();
            int mensaje = 0;

            // Verificar que mail, dni o usuario no existan en la Base de datos

            try
            {
                if (existeDni(nuevo.NumeroDocumento) == true)
                {
                    mensaje = 1;
                    return mensaje;
                }
                else if (existeEmail(nuevo.Email) == true)
                {
                    mensaje = 2;
                    return mensaje;
                }
                else if (existeUsuario(nuevo.NombreUsuario) == true)
                {
                    mensaje = 3;
                    return mensaje;
                }
                // Si no existe, agrega empleado
                else
                {
                    using (SqlConnection conn = new SqlConnection(StrConn))
                    {
                        conn.Open();

                        SqlCommand comm = conn.CreateCommand();

                        //Encriptar contraseña
                        string encriptarContraseña = gvPassword.GetSha256(nuevo.Password);

                        comm.CommandText = "nuevoEmpleado";
                        comm.CommandType = System.Data.CommandType.StoredProcedure;

                        comm.Parameters.Add(new SqlParameter("@nombre", nuevo.Nombre));
                        comm.Parameters.Add(new SqlParameter("@apellido", nuevo.Apellido));
                        comm.Parameters.Add(new SqlParameter("@sexo", nuevo.Sexo));
                        comm.Parameters.Add(new SqlParameter("@idTipoDocumento", nuevo.IdTipoDocumento));
                        comm.Parameters.Add(new SqlParameter("@num_dni", nuevo.NumeroDocumento));
                        comm.Parameters.Add(new SqlParameter("@fotoPerfil", nuevo.FotoPerfil));
                        comm.Parameters.Add(new SqlParameter("@fecha_nacimiento", nuevo.FechaNacimiento));
                        comm.Parameters.Add(new SqlParameter("@id_localidad", nuevo.IdLocalidad));
                        comm.Parameters.Add(new SqlParameter("@domicilio", nuevo.Domicilio));
                        comm.Parameters.Add(new SqlParameter("@telefono", nuevo.Telefono));
                        comm.Parameters.Add(new SqlParameter("@email", nuevo.Email));
                        comm.Parameters.Add(new SqlParameter("@idTipoEmpleado", nuevo.IdTipoEmpleado));
                        comm.Parameters.Add(new SqlParameter("@nombre_usuario", nuevo.NombreUsuario));
                        comm.Parameters.Add(new SqlParameter("@password", encriptarContraseña));

                        comm.ExecuteNonQuery();

                        enviarEmailCuenta(nuevo.Email, nuevo.NombreUsuario);
                        return mensaje;
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        // OBTENER EMPLEADOS
        public List<Empleado> ObtenerEmpleados()
        {
            List<Empleado> lista = new List<Empleado>();
            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();
                SqlCommand comm = new SqlCommand("obtenerEmpleados", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;

                SqlDataReader dr = comm.ExecuteReader();
                while (dr.Read())
                {
                    int legajo2 = dr.GetInt32(0);
                    string nombre = dr.GetString(1);
                    string apellido = dr.GetString(2);
                    string sexo = dr.GetString(3);
                    int idTipoDni = dr.GetInt32(4);
                    string numDni = dr.GetString(5);
                    string fotoPerfil = dr.GetString(6);
                    string fechaNacimiento = dr.GetDateTime(7).Date.ToString("dd-MM-yyyy");
                    int idLocalidad = dr.GetInt32(8);
                    string domicilio = dr.GetString(9);
                    long telefono = dr.GetInt64(10);
                    string email = dr.GetString(11);
                    int IdTipoEmpleado = dr.GetInt32(12);
                    string nombreUsuario = dr.GetString(13);
                    string password = dr.GetString(14);

                    Empleado emp = new Empleado(legajo2, nombre, apellido, sexo, idTipoDni, numDni, fotoPerfil, fechaNacimiento, idLocalidad, domicilio, telefono, email, IdTipoEmpleado, nombreUsuario, password);
                    lista.Add(emp);
                }
                dr.Close();
            }
            return lista;
        }

        // OBTENER EMPLEADO POR LEGAJO
        public Empleado ObtenerPorLegajo(int legajo)
        {
            Empleado lista = null;
            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();
                SqlCommand comm = new SqlCommand("obtenerEmpleado", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;

                comm.Parameters.Add(new SqlParameter("@legajo", legajo));

                SqlDataReader dr = comm.ExecuteReader();
                if (dr.Read())
                {
                    int legajo2 = dr.GetInt32(0);
                    string nombre = dr.GetString(1);
                    string apellido = dr.GetString(2);
                    string sexo = dr.GetString(3);
                    int idTipoDni = dr.GetInt32(4);
                    string numDni = dr.GetString(5);
                    string fotoPerfil = dr.GetString(6);
                    string fechaNacimiento = dr.GetDateTime(7).Date.ToString("dd-MM-yyyy");
                    int idLocalidad = dr.GetInt32(8);
                    string domicilio = dr.GetString(9);
                    long telefono = dr.GetInt64(10);
                    string email = dr.GetString(11);
                    int IdTipoEmpleado = dr.GetInt32(12);
                    string nombreUsuario = dr.GetString(13);
                    string password = dr.GetString(14);

                    //Empleado emp = new Empleado(legajo2, nombre, apellido, sexo, idTipoDni, numDni, fotoPerfil, fechaNacimiento, idLocalidad, domicilio, telefono, email, IdTipoEmpleado, nombreUsuario, password);
                    lista = new Empleado(legajo2, nombre, apellido, sexo, idTipoDni, numDni, fotoPerfil, fechaNacimiento, idLocalidad, domicilio, telefono, email, IdTipoEmpleado, nombreUsuario, password);
                    //lista.Add(emp);
                }
                dr.Close();
            }
            return lista;
        }

        //VALIDACIONES PARA COMPROBAR SI EXISTEN USUARIOS CON EL MISMO: Nombre de usuario, Email o Número de DNI
        public bool existeDni(string numDni)
        {
            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = new SqlCommand("existeDni", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@numDni", numDni));

                SqlDataReader dr = comm.ExecuteReader();
                if (dr.Read())
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }
        public bool existeEmail(string email)
        {
            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = new SqlCommand("existeEmail", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@email", email));

                SqlDataReader dr = comm.ExecuteReader();
                if (dr.Read())
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }
        public bool existeUsuario(string nombreUsuario)
        {
            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = new SqlCommand("existeUsuario", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@nombreUsuario", nombreUsuario));

                SqlDataReader dr = comm.ExecuteReader();
                if (dr.Read())
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }

        // METODO para obtener tipos de Documento
        public List<TipoDni> obtenerTipoDNI()
        {
            List<TipoDni> lista = new List<TipoDni>();
            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = conn.CreateCommand();
                comm.CommandText = "pListarTipoDni";
                comm.CommandType = System.Data.CommandType.StoredProcedure;

                SqlDataReader dr = comm.ExecuteReader();
                while (dr.Read())
                {
                    int id = dr.GetInt32(0);
                    string nombre = dr.GetString(1).Trim();

                    TipoDni td = new TipoDni(id, nombre);
                    lista.Add(td);
                }

                dr.Close();
            }
            return lista;
        }

        // METODO para obtener tipos de Empleados
        public List<TipoEmpleado> obtenerTipoEmpleados()
        {
            List<TipoEmpleado> listaEmpleados = new List<TipoEmpleado>();
            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = conn.CreateCommand();
                comm.CommandText = "pListarTipoEmpleado";
                comm.CommandType = System.Data.CommandType.StoredProcedure;

                SqlDataReader dr = comm.ExecuteReader();
                while (dr.Read())
                {
                    int id = dr.GetInt32(0);
                    string description = dr.GetString(1).Trim();

                    TipoEmpleado td = new TipoEmpleado(id, description);
                    listaEmpleados.Add(td);
                }

                dr.Close();
            }
            return listaEmpleados;
        }

        //METODO PARA ENVIAR EMAIL DE ACTIVACION DE LA CUENTA
        public void enviarEmailCuenta(string emailDestino, string nombreUsuario)
        {
            string emailOrigen = "familycoworker@gmail.com";
            string contraseña = "familycoworker123";

            MailMessage oMailMessage = new MailMessage(emailOrigen, emailDestino, "Activacion Cuenta",
                "<p>Genial, has activado tu cuenta satisfactoriamente.<p><br>" +
                "<p><strong>Ya posees todos los beneficios de Famili&CoWorker. A disfrutar!</strong><p><br>" +
                "<p>Te recordamos tus datos para ingresar. <p>" +
                "<p>Nombre de usuario: <p><strong>" + nombreUsuario + "</strong>");

            oMailMessage.IsBodyHtml = true;

            SmtpClient osmtpClient = new SmtpClient("smtp.gmail.com");
            osmtpClient.EnableSsl = true;
            osmtpClient.UseDefaultCredentials = false;
            osmtpClient.Port = 587;
            osmtpClient.Credentials = new System.Net.NetworkCredential(emailOrigen, contraseña);

            osmtpClient.Send(oMailMessage);
        }

        // OBTENER EMPLEADOS REPORTE
        public List<ReEmpleados> ObtenerEmpleadosReporte()
        {
            List<ReEmpleados> lista = new List<ReEmpleados>();
            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();
                SqlCommand comm = new SqlCommand("obtenerReEmpleados", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;

                SqlDataReader dr = comm.ExecuteReader();
                while (dr.Read())
                {
                    int legajo = dr.GetInt32(0);
                    string nombre = dr.GetString(1);
                    string num_dni = dr.GetString(2);
                    string foto_perfil = dr.GetString(3);
                    string fechaNacimiento = dr.GetDateTime(4).Date.ToString("dd-MM-yyyy");
                    string nombre_localidad = dr.GetString(5);
                    string domicilio = dr.GetString(6);                    
                    string email = dr.GetString(7);
                    string tipo_empleado = dr.GetString(8);

                    ReEmpleados emp = new ReEmpleados(legajo, nombre, num_dni, foto_perfil, fechaNacimiento, nombre_localidad, domicilio, email, tipo_empleado);
                    lista.Add(emp);
                }
                dr.Close();
            }
            return lista;
        }

        //Método para obtener el usuario a través del email
        public string obtenerUsuario(string email)
        {
            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = new SqlCommand("obtenerUsuario", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@email", email));

                SqlDataReader dr = comm.ExecuteReader();
                if (dr.Read())
                {
                    string nom_usuario;
                    nom_usuario = dr.GetString(0).Trim();

                    return nom_usuario;
                }
                else
                {
                    return "DefaultUser";
                }
            }
        }
    }
}