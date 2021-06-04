using FriendsCoWorker.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace FriendsCoWorker.AccesoDatos
{
    public class GestorProyecto
    {
        // Nuevo proyecto
        public void nuevoProyecto(Proyecto proyecto)
        {
          string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

             using (SqlConnection conn = new SqlConnection(StrConn))
             {
                  conn.Open();

                  SqlCommand comm = conn.CreateCommand();
                  comm.CommandText = "nuevoProyecto";
                  comm.CommandType = System.Data.CommandType.StoredProcedure;

                  comm.Parameters.Add(new SqlParameter("@nombre_proyecto", proyecto.Nombre));
                  comm.Parameters.Add(new SqlParameter("@fecha_creacion", proyecto.FechaCreacion));
                  comm.Parameters.Add(new SqlParameter("@fecha_fin", proyecto.FechaFin));
                  comm.Parameters.Add(new SqlParameter("@horas", proyecto.Horas_trabajadas));
                  comm.Parameters.Add(new SqlParameter("@foto_mockup", proyecto.Imagen_mockup));
                  comm.Parameters.Add(new SqlParameter("@fecha_real_creacion", proyecto.Fecha_real_creacion));
                  comm.Parameters.Add(new SqlParameter("@fecha_real_fin", proyecto.Fecha_real_fin));
                  comm.Parameters.Add(new SqlParameter("@empresa", proyecto.Empresa));
                  comm.Parameters.Add(new SqlParameter("@descripcion", proyecto.Descripcion));

                comm.ExecuteNonQuery();
             }                           
        }

        // Obtener proyectos 
        public List<Proyecto> ObtenerProyectos()
        {
            List<Proyecto> lista = new List<Proyecto>();
            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();
                SqlCommand comm = new SqlCommand("obtenerProyectos", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;

                SqlDataReader dr = comm.ExecuteReader();
                while (dr.Read())
                {
                    int id_proyecto = dr.GetInt32(0);
                    string nombre = dr.GetString(1);
                    string fecha_creacion = dr.GetDateTime(2).Date.ToString("dd-MM-yyyy");
                    string fecha_fin = dr.GetDateTime(3).Date.ToString("dd-MM-yyyy");
                    int horas_trabajadas = dr.GetInt32(4);
                    string img_mockup = dr.GetString(5);
                    string fecha_real_creacion = dr.GetDateTime(6).Date.ToString("dd-MM-yyyy");
                    string fecha_real_fin = dr.GetDateTime(7).Date.ToString("dd-MM-yyyy");
                    string empresa = dr.GetString(8);
                    string descripcion = dr.GetString(9);

                    Proyecto pro = new Proyecto(id_proyecto, nombre, fecha_creacion, fecha_fin, horas_trabajadas, img_mockup, fecha_real_creacion, fecha_real_fin, empresa, descripcion);
                    lista.Add(pro);
                }
                dr.Close();
            }
            return lista;
        }

        // Obtener proyecto por id
        public Proyecto ObtenerPorId(int legajo)
        {
            Proyecto lista = null;
            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();
                SqlCommand comm = new SqlCommand("obtenerProyecto", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;

                comm.Parameters.Add(new SqlParameter("@id", legajo));

                SqlDataReader dr = comm.ExecuteReader();
                if (dr.Read())
                {
                    int id_proyecto = dr.GetInt32(0);
                    string nombre = dr.GetString(1);
                    string fecha_creacion = dr.GetDateTime(2).Date.ToString("dd-MM-yyyy");
                    string fecha_fin = dr.GetDateTime(3).Date.ToString("dd-MM-yyyy");
                    int horas_trabajadas = dr.GetInt32(4);
                    string img_mockup = dr.GetString(5);
                    string fecha_real_creacion = dr.GetDateTime(6).Date.ToString("dd-MM-yyyy");
                    string fecha_real_fin = dr.GetDateTime(7).Date.ToString("dd-MM-yyyy");
                    string empresa = dr.GetString(8);
                    string descripcion = dr.GetString(9);

                    lista = new Proyecto(id_proyecto, nombre, fecha_creacion, fecha_fin, horas_trabajadas, img_mockup, fecha_real_creacion, fecha_real_fin, empresa, descripcion);
                }
                dr.Close();
            }
            return lista;
        }
    }
}