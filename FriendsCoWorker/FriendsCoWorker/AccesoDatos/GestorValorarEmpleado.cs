using FriendsCoWorker.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace FriendsCoWorker.AccesoDatos
{
    public class GestorValorarEmpleado
    {
        // NUEVA VALORACION
        public int nuevoValorEmpleado(ValoresEmpleado valor)
        {

            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();
            int mensaje = 0;

            // Verificar que el empleado no haya votado
            try
            {
                if (existeVotacionEmpleado(valor.Legajo, valor.Legajo_valora) == true)
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


                        comm.CommandText = "nuevoValorEmpleado";
                        comm.CommandType = System.Data.CommandType.StoredProcedure;

                        comm.Parameters.Add(new SqlParameter("@legajo", valor.Legajo));
                        comm.Parameters.Add(new SqlParameter("@comunicacion", valor.Comunicacion));
                        comm.Parameters.Add(new SqlParameter("@desempenio_individual", valor.Desempenio_individual));
                        comm.Parameters.Add(new SqlParameter("@trabajo_en_equipo", valor.Trabajo_en_equipo));
                        comm.Parameters.Add(new SqlParameter("@puntualidad", valor.Puntualidad));
                        comm.Parameters.Add(new SqlParameter("@resolucion_de_problemas", valor.Resolucion_de_problemas));
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


        // VALIDAR
        public bool existeVotacionEmpleado(int legajo, int legajo_valora)
        {
            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = new SqlCommand("validarVotacionEmpleado", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@legajo", legajo));
                comm.Parameters.Add(new SqlParameter("@legajo_valora", legajo_valora));

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

        // MODIFICAR VALORACION
        public int modificarValorEmpleado(ValoresEmpleado valor)
        {

            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();
            int mensaje = 0;

            // Verificar que el empleado no haya votado
            try
            {
                using (SqlConnection conn = new SqlConnection(StrConn))
                {
                    conn.Open();
               
                    SqlCommand comm = conn.CreateCommand();
               
               
                    comm.CommandText = "modificarValorEmpleado";
                    comm.CommandType = System.Data.CommandType.StoredProcedure;
               
                    comm.Parameters.Add(new SqlParameter("@legajo", valor.Legajo));
                    comm.Parameters.Add(new SqlParameter("@comunicacion", valor.Comunicacion));
                    comm.Parameters.Add(new SqlParameter("@desenpenio", valor.Desempenio_individual));
                    comm.Parameters.Add(new SqlParameter("@trabajo_equipo", valor.Trabajo_en_equipo));
                    comm.Parameters.Add(new SqlParameter("@puntualidad", valor.Puntualidad));
                    comm.Parameters.Add(new SqlParameter("@resolucion", valor.Resolucion_de_problemas));
                    comm.Parameters.Add(new SqlParameter("@legajo_valora", valor.Legajo_valora));
               
                    comm.ExecuteNonQuery();
               
                    return mensaje;
                }
               
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}