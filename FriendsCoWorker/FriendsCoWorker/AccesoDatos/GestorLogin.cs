using FriendsCoWorker.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace FriendsCoWorker.AccesoDatos
{
    public class GestorLogin
    {
        public int validarLogin(LoginRequest loginRequest)
        {
            //Empleado empl = null;
            GestorValidarPassword gvPassword = new GestorValidarPassword();

            string strConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();
            int result = -1;

            using (SqlConnection conn = new SqlConnection(strConn))
            {
                string encriptedPassword = gvPassword.GetSha256(loginRequest.Password);

                conn.Open();

                SqlCommand comm = new SqlCommand("obtenerLogin", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@usuario", loginRequest.Nombreusuario));
                comm.Parameters.Add(new SqlParameter("@password", encriptedPassword));

                SqlDataReader reader = comm.ExecuteReader();


                if (reader.HasRows)
                {
                    reader.Read();
                    result = reader.GetInt32(0);
                }

            }
            return result;
        }
    }
}