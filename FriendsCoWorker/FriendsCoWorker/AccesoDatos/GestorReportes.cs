using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace FriendsCoWorker.AccesoDatos
{
    public class GestorReportes
    {
        public class CantidadProyectos{
            public int cantidad { get; set; }
        }

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
    }
}