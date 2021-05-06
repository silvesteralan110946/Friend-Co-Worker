using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FriendsCoWorker.Models
{
    public class TipoEmpleado
    {
        private int id;
        private string description;

        public TipoEmpleado(int id, string description)
        {
            this.id = id;
            this.description = description;
        }

        public int Id { get => id; set => id = value; }
        public string Description { get => description; set => description = value; }
    }
}