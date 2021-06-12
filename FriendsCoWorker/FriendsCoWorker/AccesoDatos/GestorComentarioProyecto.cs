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
    public class GestorComentarioProyecto
    {
        // NUEVO COMENTARIO
        public void nuevoComentarioProyecto(ComentariosProyectos comentario)
        {
            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = conn.CreateCommand();
                comm.CommandText = "agregarComentarioProyecto";
                comm.CommandType = System.Data.CommandType.StoredProcedure;

                comm.Parameters.Add(new SqlParameter("@legajo", comentario.Legajo));
                comm.Parameters.Add(new SqlParameter("@id_proyecto", comentario.Id_proyecto));
                comm.Parameters.Add(new SqlParameter("@comentario", comentario.Comentario));
                
                comm.ExecuteNonQuery();
            }
        }

        // OBTENER COMENTARIOS
        public List<ReComentarioProyecto> ObtenerComentarios()
        {
            List<ReComentarioProyecto> lista = new List<ReComentarioProyecto>();
            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();
                SqlCommand comm = new SqlCommand("obtenerComentariosProyectos", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;

                SqlDataReader dr = comm.ExecuteReader();
                while (dr.Read())
                {
                    int id_comentario = dr.GetInt32(0);
                    int legajo = dr.GetInt32(1);
                    int id_proyecto = dr.GetInt32(2);
                    string comentario = dr.GetString(3);
                    string nombre = dr.GetString(4);
                    string foto_perfil = dr.GetString(5);

                    ReComentarioProyecto emp = new ReComentarioProyecto(id_comentario, legajo, id_proyecto, comentario, nombre, foto_perfil);
                    lista.Add(emp);
                }
                dr.Close();
            }
            return lista;
        }

        // OBTENER COMENTARIOS POR ID
        public List<ReComentarioProyecto> ObtenerPorId(int id_proyecto)
        {
            List<ReComentarioProyecto> lista = new List<ReComentarioProyecto>();
            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();
                SqlCommand comm = new SqlCommand("obtenerComentariosProyecto", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;

                comm.Parameters.Add(new SqlParameter("@id_proyecto", id_proyecto));

                SqlDataReader dr = comm.ExecuteReader();
                while (dr.Read())
                {
                    int id_comentario = dr.GetInt32(0);
                    int legajo = dr.GetInt32(1);
                    int id_proyecto2 = dr.GetInt32(2);
                    string comentario = dr.GetString(3);
                    string nombre = dr.GetString(4);
                    string foto_perfil = dr.GetString(5);

                    ReComentarioProyecto pro = new ReComentarioProyecto(id_comentario, legajo, id_proyecto2, comentario, nombre, foto_perfil);
                    lista.Add(pro);
                }
                dr.Close();
            }
            return lista;
        }
    }
}