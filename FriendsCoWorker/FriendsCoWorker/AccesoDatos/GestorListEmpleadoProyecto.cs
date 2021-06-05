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
                    int id_proyecto = dr.GetInt32(5);


                    ListProyectoEmpleado pro = new ListProyectoEmpleado(legajo, nombre, empresa, descripcion, img_mockup, id_proyecto);
                    lista.Add(pro);
                }
                dr.Close();
            }
            return lista;
        }

        // Obtener proyecto por legajo
        public List<ListProyectoEmpleado> ObtenerPorId(int legajo)
        {
            List<ListProyectoEmpleado> lista = new List<ListProyectoEmpleado>();
            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();
                SqlCommand comm = new SqlCommand("obtenerProyectosXEmpleado", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;

                comm.Parameters.Add(new SqlParameter("@legajo", legajo));

                SqlDataReader dr = comm.ExecuteReader();
                while (dr.Read())
                {
                    int legajos = dr.GetInt32(0);
                    string nombre_proyecto = dr.GetString(1);
                    string empresa = dr.GetString(2);
                    string descripcion = dr.GetString(3);
                    string img_mockup = dr.GetString(4);
                    int id_proyecto = dr.GetInt32(5);

                    ListProyectoEmpleado pro = new ListProyectoEmpleado(legajos, nombre_proyecto, empresa, descripcion, img_mockup, id_proyecto);
                    lista.Add(pro);
                }
                dr.Close();
            }
            return lista;
        }

        // Eliminar proyecto adherido
        public void salirDeProyecto(int legajo, int id_proyecto)
        {
            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = new SqlCommand("salirDeProyecto", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@legajo", legajo));
                comm.Parameters.Add(new SqlParameter("@id_proyecto", id_proyecto));

                comm.ExecuteNonQuery();
            }
        }
    }
}