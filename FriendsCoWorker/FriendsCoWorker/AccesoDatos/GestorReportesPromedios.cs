using FriendsCoWorker.ModelsReports;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace FriendsCoWorker.AccesoDatos
{
    public class GestorReportesPromedios
    {
        // OBTENER PROMEDIOS PROYECTOS
        public List<PromedioProyecto> ObtenerProProyecto()
        {
            List<PromedioProyecto> lista = new List<PromedioProyecto>();
            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();
                SqlCommand comm = new SqlCommand("obtenerPromedioProyectos", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;

                SqlDataReader dr = comm.ExecuteReader();
                while (dr.Read())
                {
                    string nombre_proyecto = dr.GetString(0);
                    int id_proyecto = dr.GetInt32(1);
                    double funcionalidad = dr.GetDouble(2);
                    double documentacion = dr.GetDouble(3);
                    double disenio = dr.GetDouble(4);
                    double retroalimentacion = dr.GetDouble(5);
                    double tiempo_de_entrega = dr.GetDouble(6);

                    PromedioProyecto pro = new PromedioProyecto(nombre_proyecto, id_proyecto,funcionalidad, documentacion, disenio, retroalimentacion, tiempo_de_entrega);
                    lista.Add(pro);
                }
                dr.Close();
            }
            return lista;
        }

        // OBTENER PROMEDIO POR PROYECTO
        public PromedioProyecto ObtenerPorProyecto(int id_proyecto)
        {
            PromedioProyecto lista = null;
            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();
                SqlCommand comm = new SqlCommand("obtenerPromedioProyecto", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;

                comm.Parameters.Add(new SqlParameter("@id_proyecto", id_proyecto));

                SqlDataReader dr = comm.ExecuteReader();
                if (dr.Read())
                {
                    string nombre_proyecto = dr.GetString(0);
                    int id_proyecto2 = dr.GetInt32(1);
                    double funcionalidad = dr.GetDouble(2);
                    double documentacion = dr.GetDouble(3);
                    double disenio = dr.GetDouble(4);
                    double retroalimentacion = dr.GetDouble(5);
                    double tiempo_de_entrega = dr.GetDouble(6);

                    lista = new PromedioProyecto(nombre_proyecto, id_proyecto2, funcionalidad, documentacion, disenio, retroalimentacion, tiempo_de_entrega);
                }
                dr.Close();
            }
            return lista;
        }

        // OBTENER PROMEDIOS EMPLEADOS
        public List<PromedioEmpleado> ObtenerProEmpleados()
        {
            List<PromedioEmpleado> lista = new List<PromedioEmpleado>();
            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();
                SqlCommand comm = new SqlCommand("obtenerPromedioEmpleados", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;

                SqlDataReader dr = comm.ExecuteReader();
                while (dr.Read())
                {
                    string nombre_empleado = dr.GetString(0);
                    int legajo = dr.GetInt32(1);
                    double comunicacion = dr.GetDouble(2);
                    double desempenio_individual = dr.GetDouble(3);
                    double trabajo_en_equipo = dr.GetDouble(4);
                    double puntualidad = dr.GetDouble(5);
                    double resolucion_de_problemas = dr.GetDouble(6);

                    PromedioEmpleado pro = new PromedioEmpleado(nombre_empleado, legajo, comunicacion, desempenio_individual, trabajo_en_equipo, puntualidad, resolucion_de_problemas);
                    lista.Add(pro);
                }
                dr.Close();
            }
            return lista;
        }

        // OBTENER PROMEDIO POR LEGAJO
        public PromedioEmpleado ObtenerPorEmpleado(int legajo)
        {
            PromedioEmpleado lista = null;
            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();
                SqlCommand comm = new SqlCommand("obtenerPromedioEmpleado", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;

                comm.Parameters.Add(new SqlParameter("@legajo", legajo));

                SqlDataReader dr = comm.ExecuteReader();
                if (dr.Read())
                {
                    string nombre_empleado = dr.GetString(0);
                    int legajo2 = dr.GetInt32(1);
                    double comunicacion = dr.GetDouble(2);
                    double desempenio_individual = dr.GetDouble(3);
                    double trabajo_en_equipo = dr.GetDouble(4);
                    double puntualidad = dr.GetDouble(5);
                    double resolucion_de_problemas = dr.GetDouble(6);

                    lista = new PromedioEmpleado(nombre_empleado, legajo2, comunicacion, desempenio_individual, trabajo_en_equipo, puntualidad, resolucion_de_problemas);
                }
                dr.Close();
            }
            return lista;
        }
    }
}