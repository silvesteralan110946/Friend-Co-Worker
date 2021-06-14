using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FriendsCoWorker.Models
{
    public class ComentariosEmpleados
    {
        private int legajo;
        private int legajo_a_comentar;
        private string comentario;

        public int Legajo { get => legajo; set => legajo = value; }
        public int Legajo_a_comentar { get => legajo_a_comentar; set => legajo_a_comentar = value; }
        public string Comentario { get => comentario; set => comentario = value; }
    }
}