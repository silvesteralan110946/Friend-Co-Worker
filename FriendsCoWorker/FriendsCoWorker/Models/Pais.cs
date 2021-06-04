using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FriendsCoWorker.Models
{
    public class Pais
    {
        public int id { get; set; }
        public string nombre { get; set; }

        public Pais(int id, string nombre)
        {
            this.id = id;
            this.nombre = nombre;
        }
    }
}