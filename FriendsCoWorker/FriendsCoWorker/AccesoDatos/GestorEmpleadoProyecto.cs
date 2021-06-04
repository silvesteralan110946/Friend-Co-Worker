using FriendsCoWorker.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace FriendsCoWorker.AccesoDatos
{
    public class GestorEmpleadoProyecto
    {
        // CREAR NUEVO EMPLEADO X PROYECTO
        public int nuevoEmpleadoProyecto(EmpleadoXProyecto empleado)
        {

            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();
            int mensaje = 0;

            // Verificar que el empleado no este en ningun proyecto
            try
            {
                if (existeEmpleado(empleado.Legajo, empleado.Id_proyecto) == true)
                {
                    mensaje = 1;
                    return mensaje;
                }
                // Si no existe, agrega empleado
                else
                {
                    using (SqlConnection conn = new SqlConnection(StrConn))
                    {
                        conn.Open();

                        SqlCommand comm = conn.CreateCommand();


                        comm.CommandText = "nuevoEmpleadoProyecto";
                        comm.CommandType = System.Data.CommandType.StoredProcedure;

                        comm.Parameters.Add(new SqlParameter("@legajo", empleado.Legajo));
                        comm.Parameters.Add(new SqlParameter("@id_proyecto", empleado.Id_proyecto));

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

        public bool existeEmpleado(int legajo, int id_proyecto)
        {
            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = new SqlCommand("existeEmpleadoXProyecto", conn);
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