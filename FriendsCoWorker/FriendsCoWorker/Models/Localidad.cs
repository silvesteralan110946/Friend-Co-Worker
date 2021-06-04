using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FriendsCoWorker.Models
{
    public class Localidad
    {
        public int id { get; set; }
        public string nombre { get; set; }
        public int id_provincia { get; set; }

        public Localidad(int id, string nombre, int idProvincia)
        {
            this.id = id;
            this.nombre = nombre;
            this.id_provincia = idProvincia;
        }

        public Localidad(int id, string nombre)
        {
            this.id = id;
            this.nombre = nombre;
        }
    }
}