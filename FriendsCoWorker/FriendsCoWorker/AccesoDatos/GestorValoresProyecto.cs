using FriendsCoWorker.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace FriendsCoWorker.AccesoDatos
{
    public class GestorValoresProyecto
    {
        // NUEVA VALORACION
        public int nuevoValorProyecto(ValoresProyecto valor)
        {

            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();
            int mensaje = 0;

            // Verificar que el empleado no haya votado el proyecto
            try
            {
                if (existeVotacion(valor.Legajo_valora, valor.Id_proyecto) == true)
                {
                    mensaje = 1;
                    return mensaje;
                    // EXISTE VALORACION
                }
                // Si no existe, agrega valor
                else
                {
                    using (SqlConnection conn = new SqlConnection(StrConn))
                    {
                        conn.Open();

                        SqlCommand comm = conn.CreateCommand();


                        comm.CommandText = "nuevoValorProyecto";
                        comm.CommandType = System.Data.CommandType.StoredProcedure;

                        comm.Parameters.Add(new SqlParameter("@id_proyecto", valor.Id_proyecto));
                        comm.Parameters.Add(new SqlParameter("@funcionalidad", valor.Funcionalidad));
                        comm.Parameters.Add(new SqlParameter("@documentacion", valor.Documentacion));
                        comm.Parameters.Add(new SqlParameter("@diseño", valor.Diseño));
                        comm.Parameters.Add(new SqlParameter("@retroalimentacion", valor.Retroalimentacion));
                        comm.Parameters.Add(new SqlParameter("@tiempo_de_entrega", valor.Tiempo_de_entrega));
                        comm.Parameters.Add(new SqlParameter("@legajo_valora", valor.Legajo_valora));

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

        public bool existeVotacion(int legajo, int id_proyecto)
        {
            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = new SqlCommand("validarVotacion", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@legajo", legajo));
                comm.Parameters.Add(new SqlParameter("@id_proyecto", id_proyecto));

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
    }
}