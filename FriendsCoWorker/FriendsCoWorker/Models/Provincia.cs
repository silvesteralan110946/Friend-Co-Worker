using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FriendsCoWorker.Models
{
    public class Provincia
    {
        public int id { get; set; }
        public string nombre { get; set; }
        public int id_pais { get; set; }

        public Provincia(int id, string nombre, int idPais)
        {
            this.id = id;
            this.nombre = nombre;
            this.id_pais = idPais;
        }
        public Provincia(int id, string nombre)
        {
            this.id = id;
            this.nombre = nombre;
        }

    }
}