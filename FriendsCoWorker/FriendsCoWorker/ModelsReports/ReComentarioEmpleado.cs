using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FriendsCoWorker.ModelsReports
{
    public class ReComentarioEmpleado
    {
        public ReComentarioEmpleado(int id_comentario, int legajo_comenta, int legajo_a_comentar, string comentario, string nombre, string foto_perfil)
        {
            this.id_comentario = id_comentario;
            this.legajo_comenta = legajo_comenta;
            this.legajo_a_comentar = legajo_a_comentar;
            this.comentario = comentario;
            this.nombre = nombre;
            this.foto_perfil = foto_perfil;
        }

        public int id_comentario { get; set; }
        public int legajo_comenta { get; set; }
        public int legajo_a_comentar { get; set; }
        public string comentario { get; set; }
        public string nombre { get; set; }
        public string foto_perfil { get; set; }
    }
}