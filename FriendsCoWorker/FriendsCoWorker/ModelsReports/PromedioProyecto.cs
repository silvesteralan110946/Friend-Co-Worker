using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FriendsCoWorker.ModelsReports
{
    public class PromedioProyecto
    {
        public PromedioProyecto(string nombre_proyecto, int id_proyecto, double funcionalidad, double documentacion, double disenio, double retroalimentacion, double tiempo_de_entrega)
        {
            this.nombre_proyecto = nombre_proyecto;
            this.id_proyecto = id_proyecto;
            this.funcionalidad = funcionalidad;
            this.documentacion = documentacion;
            this.disenio = disenio;
            this.retroalimentacion = retroalimentacion;
            this.tiempo_de_entrega = tiempo_de_entrega;
        }
                
        public string nombre_proyecto { get; set; }
        public int id_proyecto { get; set; }
        public double funcionalidad { get; set; }
        public double documentacion { get; set; }
        public double disenio { get; set; }
        public double retroalimentacion { get; set; }
        public double tiempo_de_entrega { get; set; }
    }
}