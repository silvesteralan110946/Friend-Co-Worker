using FriendsCoWorker.Models;
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
    }
}