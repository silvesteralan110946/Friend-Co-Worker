using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FriendsCoWorker.Models
{
    public class TipoDni
    {
        private int id;
        private string nombre_dni;

        public TipoDni(int id, string nombre_dni)
        {
            this.id = id;
            this.nombre_dni = nombre_dni;
        }

        public int Id { get => id; set => id = value; }
        public string Nombre_dni { get => nombre_dni; set => nombre_dni = value; }
    }
}