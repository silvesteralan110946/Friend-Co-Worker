using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FriendsCoWorker.ModelsReports
{
    public class ReComentarioProyecto
    {
        public ReComentarioProyecto(int id_comentario, int legajo, int id_proyecto, string comentario, string nombre, string foto_perfil)
        {
            this.id_comentario = id_comentario;
            this.legajo = legajo;
            this.id_proyecto = id_proyecto;
            this.comentario = comentario;
            this.nombre = nombre;
            this.foto_perfil = foto_perfil;
        }

        public int id_comentario { get; set; }
        public int legajo { get; set; }
        public int id_proyecto { get; set; }
        public string comentario { get; set; }
        public string nombre { get; set; }
        public string foto_perfil { get; set; }
    }
}