using FriendsCoWorker.Models;
using FriendsCoWorker.ModelsReports;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace FriendsCoWorker.AccesoDatos
{
    public class GestorComentarioEmpleado
    {
        // NUEVO COMENTARIO
        public void nuevoComentarioEmpleado(ComentariosEmpleados comentario)
        {
            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = conn.CreateCommand();
                comm.CommandText = "agregarComentarioEmpleado";
                comm.CommandType = System.Data.CommandType.StoredProcedure;

                comm.Parameters.Add(new SqlParameter("@legajo", comentario.Legajo));
                comm.Parameters.Add(new SqlParameter("@legajo_a_comentar", comentario.Legajo_a_comentar));
                comm.Parameters.Add(new SqlParameter("@comentario", comentario.Comentario));

                comm.ExecuteNonQuery();
            }
        }

        // OBTENER COMENTARIOS
        public List<ReComentarioEmpleado> ObtenerComentarios()
        {
            List<ReComentarioEmpleado> lista = new List<ReComentarioEmpleado>();
            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();
                SqlCommand comm = new SqlCommand("obtenerComentariosEmpleados", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;

                SqlDataReader dr = comm.ExecuteReader();
                while (dr.Read())
                {
                    int id_comentario = dr.GetInt32(0);
                    int legajo_comenta = dr.GetInt32(1);
                    int legajo_a_comentar = dr.GetInt32(2);
                    string comentario = dr.GetString(3);
                    string nombre = dr.GetString(4);
                    string foto_perfil = dr.GetString(5);

                    ReComentarioEmpleado emp = new ReComentarioEmpleado(id_comentario, legajo_comenta, legajo_a_comentar, comentario, nombre, foto_perfil);
                    lista.Add(emp);
                }
                dr.Close();
            }
            return lista;
        }

        // OBTENER COMENTARIOS POR ID
        public List<ReComentarioEmpleado> ObtenerPorId(int legajo)
        {
            List<ReComentarioEmpleado> lista = new List<ReComentarioEmpleado>();
            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();
                SqlCommand comm = new SqlCommand("obtenerComentariosEmpleado", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;

                comm.Parameters.Add(new SqlParameter("@legajo", legajo));

                SqlDataReader dr = comm.ExecuteReader();
                while (dr.Read())
                {
                    int id_comentario = dr.GetInt32(0);
                    int legajo_comenta = dr.GetInt32(1);
                    int legajo_a_comentar = dr.GetInt32(2);
                    string comentario = dr.GetString(3);
                    string nombre = dr.GetString(4);
                    string foto_perfil = dr.GetString(5);

                    ReComentarioEmpleado pro = new ReComentarioEmpleado(id_comentario, legajo_comenta, legajo_a_comentar, comentario, nombre, foto_perfil);
                    lista.Add(pro);
                }
                dr.Close();
            }
            return lista;
        }
    }
}