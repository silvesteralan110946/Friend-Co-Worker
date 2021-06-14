using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FriendsCoWorker.ModelsReports
{
    public class PromedioEmpleado
    {
        public PromedioEmpleado(string nombre_empleado, int legajo, double comunicacion, double desempenio_individual, double trabajo_en_equipo, double puntualidad, double resolucion_de_problemas)
        {
            this.nombre_empleado = nombre_empleado;
            this.legajo = legajo;
            this.comunicacion = comunicacion;
            this.desempenio_individual = desempenio_individual;
            this.trabajo_en_equipo = trabajo_en_equipo;
            this.puntualidad = puntualidad;
            this.resolucion_de_problemas = resolucion_de_problemas;
        }

        public string nombre_empleado { get; set; }
        public int legajo { get; set; }
        public double comunicacion { get; set; }
        public double desempenio_individual { get; set; }
        public double trabajo_en_equipo { get; set; }
        public double puntualidad { get; set; }
        public double resolucion_de_problemas { get; set; }
    }
}