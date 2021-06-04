using FriendsCoWorker.ModelsReports;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace FriendsCoWorker.AccesoDatos
{
    public class GestorListEmpleadoProyecto
    {
        // Obtener proyectos 
        public List<ListProyectoEmpleado> ObtenerProyectos()
        {
            List<ListProyectoEmpleado> lista = new List<ListProyectoEmpleado>();
            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();
                SqlCommand comm = new SqlCommand("obtenerProyectosXEmpleados", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;

                SqlDataReader dr = comm.ExecuteReader();
                while (dr.Read())
                {
                    int legajo = dr.GetInt32(0);
                    string nombre = dr.GetString(1);
                    string empresa = dr.GetString(2);
                    string descripcion = dr.GetString(3);
                    string img_mockup = dr.GetString(4);

                    ListProyectoEmpleado pro = new ListProyectoEmpleado(legajo, nombre, empresa, descripcion, img_mockup);
                    lista.Add(pro);
                }
                dr.Close();
            }
            return lista;
        }

        // Obtener proyecto por legajo
        public ListProyectoEmpleado ObtenerPorId(int legajo)
        {
            ListProyectoEmpleado lista = null;
            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();
                SqlCommand comm = new SqlCommand("obtenerProyectosXEmpleado", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;

                comm.Parameters.Add(new SqlParameter("@legajo", legajo));

                SqlDataReader dr = comm.ExecuteReader();
                if (dr.Read())
                {
                    int legajos = dr.GetInt32(0);
                    string nombre_proyecto = dr.GetString(1);
                    string empresa = dr.GetString(2);
                    string descripcion = dr.GetString(3);
                    string img_mockup = dr.GetString(4);

                    lista = new ListProyectoEmpleado(legajos, nombre_proyecto, empresa, descripcion, img_mockup);
                }
                dr.Close();
            }
            return lista;
        }
    }
}