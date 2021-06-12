using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FriendsCoWorker.ModelsReports
{
    public class ReEmpleados
    {
        public ReEmpleados(int legajo, string nombre, string num_dni, string foto_perfil, string fecha_nacimiento, string nombre_localidad, string domicilio, string email, string tipo_empleado)
        {
            this.legajo = legajo;
            this.nombre = nombre;
            this.num_dni = num_dni;
            this.foto_perfil = foto_perfil;
            this.fecha_nacimiento = fecha_nacimiento;
            this.nombre_localidad = nombre_localidad;
            this.domicilio = domicilio;
            this.email = email;
            this.tipo_empleado = tipo_empleado;
        }

        public int legajo { get; set; }
        public string nombre { get; set; }
        public string num_dni { get; set; }
        public string foto_perfil { get; set; }
        public string fecha_nacimiento { get; set; }
        public string nombre_localidad { get; set; }
        public string domicilio { get; set; }
        public string email { get; set; }
        public string tipo_empleado { get; set; }
    }
}