using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FriendsCoWorker.ModelsReports
{
    public class TopProyectos
    {
        public TopProyectos(double promedio, int id_proyecto, string nombre_proyecto)
        {
            this.promedio = promedio;
            this.id_proyecto = id_proyecto;
            this.nombre_proyecto = nombre_proyecto;
        }

        public double promedio { get; set; }
        public int id_proyecto { get; set; }
        public string nombre_proyecto { get; set; }
    }
}