using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FriendsCoWorker.Models
{
    public class ComentariosProyectos
    {
        private int legajo;
        private int id_proyecto;
        private string comentario;

        public int Legajo { get => legajo; set => legajo = value; }
        public int Id_proyecto { get => id_proyecto; set => id_proyecto = value; }
        public string Comentario { get => comentario; set => comentario = value; }
    }
}