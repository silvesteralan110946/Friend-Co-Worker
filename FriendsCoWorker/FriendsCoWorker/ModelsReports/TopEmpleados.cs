using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FriendsCoWorker.ModelsReports
{
    public class TopEmpleados
    {
        public TopEmpleados(double promedio, int legajo, string nombre_empleado)
        {
            this.promedio = promedio;
            this.legajo = legajo;
            this.nombre_empleado = nombre_empleado;
        }

        public double promedio { get; set; }
        public int legajo { get; set; }
        public string nombre_empleado { get; set; }
    }
}