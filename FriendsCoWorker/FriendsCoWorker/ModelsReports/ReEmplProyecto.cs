using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FriendsCoWorker.ModelsReports
{
    public class ReEmplProyecto
    {
        public ReEmplProyecto(int legajo, string nombre, string foto, string email, string localidad, string provincia, string tipoEmpleado)
        {
            this.legajo = legajo;
            this.nombre = nombre;
            this.foto = foto;
            this.email = email;
            this.localidad = localidad;
            this.provincia = provincia;
            this.tipoEmpleado = tipoEmpleado;
        }

        public int legajo { get; set; }
        public string nombre { get; set; }
        public string foto { get; set; }
        public string email { get; set; }
        public string localidad { get; set; }
        public string provincia { get; set; }
        public string tipoEmpleado { get; set; }
    }
}