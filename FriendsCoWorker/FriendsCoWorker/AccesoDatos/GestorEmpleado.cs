using FriendsCoWorker.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace FriendsCoWorker.AccesoDatos
{
    public class GestorEmpleado
    {
        public int nuevoEmpleado(Empleado nuevo)
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
                        comm.Parameters.Add(new SqlParameter("@nombre_usuario", nuevo.NombreUsuario));
                        comm.Parameters.Add(new SqlParameter("@password", encriptarContraseña));

                        comm.ExecuteNonQuery();

                        return mensaje;
                    }
                }
            }
            catch (Exception)
            {

                throw;
            }
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
    }
}