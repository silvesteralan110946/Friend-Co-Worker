using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FriendsCoWorker.Models
{
    public class Proyecto
    {
        private int id_proyecto;
        private string nombre;
        private string fecha_creacion;
        private string fecha_fin;
        private int horas_trabajadas;
        private string imagen_mockup;
        private string fecha_real_creacion;
        private string fecha_real_fin;
        private string empresa;
        private string descripcion;

        public Proyecto(int id_proyecto, string nombre, string fecha_creacion, string fecha_fin, int horas_trabajadas, string imagen_mockup, string fecha_real_creacion, string fecha_real_fin, string empresa, string descripcion)
        {
            this.id_proyecto = id_proyecto;
            this.nombre = nombre;
            this.fecha_creacion = fecha_creacion;
            this.fecha_fin = fecha_fin;
            this.horas_trabajadas = horas_trabajadas;
            this.imagen_mockup = imagen_mockup;
            this.fecha_real_creacion = fecha_real_creacion;
            this.fecha_real_fin = fecha_real_fin;
            this.empresa = empresa;
            this.descripcion = descripcion;
        }

        public int Id_proyecto { get => id_proyecto; set => id_proyecto = value; }
        public string Nombre { get => nombre; set => nombre = value; }
        public string FechaCreacion { get => fecha_creacion; set => fecha_creacion = value; }
        public string FechaFin { get => fecha_fin; set => fecha_fin = value; }
        public int Horas_trabajadas { get => horas_trabajadas; set => horas_trabajadas = value; }
        public string Imagen_mockup { get => imagen_mockup; set => imagen_mockup = value; }
        public string Fecha_real_creacion { get => fecha_real_creacion; set => fecha_real_creacion = value; }
        public string Fecha_real_fin { get => fecha_real_fin; set => fecha_real_fin = value; }
        public string Empresa { get => empresa; set => empresa = value; }
        public string Descripcion { get => descripcion; set => descripcion = value; }
    }
}