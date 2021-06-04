using FriendsCoWorker.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Http.Cors;

namespace FriendsCoWorker.AccesoDatos
{
    //Gestor integral que contiene los metodos de PAIS,PROVINCIA Y LOCALIDAD
    public class GestorPPL
    {
        //Metodo para objeter todas las localidades de todas las provincias
        public List<Localidad> obtenerLocalidades()
        {
            List<Localidad> lista = new List<Localidad>();
            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using(SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = conn.CreateCommand();
                comm.CommandText = "pListarLocalidades";
                comm.CommandType = System.Data.CommandType.StoredProcedure;

                SqlDataReader dr = comm.ExecuteReader();

                while (dr.Read())
                {
                    int id = dr.GetInt32(0);
                    string nombre = dr.GetString(1);
                    int idprovincia = dr.GetInt32(2);

                    Localidad localidad = new Localidad(id, nombre, idprovincia);
                    lista.Add(localidad);
                }
            }
            return lista;
        }

        //Metodo para listar todas las localidades de una provincia
        public List<Localidad> obtenerLocalidadId(int id_provincia)
        {
            List<Localidad> lista = new List<Localidad>();
            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = new SqlCommand("pListarLocalidadesId", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@idprovincia", id_provincia));

                SqlDataReader dr = comm.ExecuteReader();
                while (dr.Read())
                {
                    int id = dr.GetInt32(0);
                    string nombre = dr.GetString(1).Trim();

                    Localidad l = new Localidad(id, nombre);
                    lista.Add(l);
                }
                dr.Close();
            }
            return lista;
        }

        //Metodo para obtener la lista completa de provincias de todos los paises
        public List<Provincia> obtenerProvincias()
        {
            List<Provincia> lista = new List<Provincia>();
            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();
                SqlCommand comm = conn.CreateCommand();
                comm.CommandText = "pListarProvincias";
                comm.CommandType = System.Data.CommandType.StoredProcedure;

                SqlDataReader dr = comm.ExecuteReader();

                while (dr.Read())
                {
                    int id = dr.GetInt32(0);
                    string nombre = dr.GetString(1).Trim();
                    int idPais = dr.GetInt32(2);

                    Provincia p = new Provincia(id, nombre, idPais);
                    lista.Add(p);
                }
                dr.Close();
            }

            return lista;
        }

        //Metodo para obtener la lista completa de provincias por pais
        public List<Provincia> obtenerProvinciaId(int idpais)
        {
            List<Provincia> lista = new List<Provincia>();
            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();
                SqlCommand comm = new SqlCommand("pListarProvincias", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@idpais", idpais));

                SqlDataReader dr = comm.ExecuteReader();
                while (dr.Read())
                {
                    int id = dr.GetInt32(0);
                    string nombre = dr.GetString(1).Trim();

                    Provincia prov = new Provincia(id, nombre);
                    lista.Add(prov);
                }
                dr.Close();
            }
            return lista;
        }

        //Metodo para obtener la lista completa  de todos los paises
        public List<Pais> obtenerPaises()
        {
            List<Pais> lista = new List<Pais>();
            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = conn.CreateCommand();
                comm.CommandText = "pListarPaises";
                comm.CommandType = System.Data.CommandType.StoredProcedure;

                SqlDataReader dr = comm.ExecuteReader();
                while (dr.Read())
                {
                    int id = dr.GetInt32(0);
                    string nombre = dr.GetString(1).Trim();

                    Pais p = new Pais(id, nombre);
                    lista.Add(p);
                }
                dr.Close();
            }
            return lista;
        }

        //Metodo obtener pais por id
        public List<Pais> obtenerPaisPorId(int id_pais)
        {
            List<Pais> lista = new List<Pais>();
            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();
                SqlCommand comm = new SqlCommand("pListarPaisesId", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@id", id_pais));

                SqlDataReader dr = comm.ExecuteReader();
                if (dr.Read())
                {
                    int idpais = dr.GetInt32(0);
                    string nombre = dr.GetString(1);

                    Pais pais = new Pais(idpais, nombre);
                    lista.Add(pais);
                }
                dr.Close();
            }
            return lista;
        }

    }
}