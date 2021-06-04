using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FriendsCoWorker.ModelsReports
{
    public class ListProyectoEmpleado
    {

        public ListProyectoEmpleado(int legajo, string nombre_proyecto, string empresa, string descripcion, string img_mockup)
        {
            this.legajo = legajo;
            this.nombre_proyecto = nombre_proyecto;
            this.empresa = empresa;
            this.descripcion = descripcion;
            this.img_mockup = img_mockup;
        }
        public int legajo { get; set; }
        public string nombre_proyecto { get; set; }
        public string empresa { get; set; }
        public string descripcion { get; set; }
        public string img_mockup { get; set; }
    }
}