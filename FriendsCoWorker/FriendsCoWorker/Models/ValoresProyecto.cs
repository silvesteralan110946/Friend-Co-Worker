using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FriendsCoWorker.Models
{
    public class ValoresProyecto
    {
        private int id_valores;
        private int id_proyecto;
        private int funcionalidad;
        private int documentacion;
        private int diseño;
        private int retroalimentacion;
        private int tiempo_de_entrega;
        private int legajo_valora;

        public int Id_valores { get => id_valores; set => id_valores = value; }
        public int Id_proyecto { get => id_proyecto; set => id_proyecto = value; }
        public int Funcionalidad { get => funcionalidad; set => funcionalidad = value; }
        public int Documentacion { get => documentacion; set => documentacion = value; }
        public int Diseño { get => diseño; set => diseño = value; }
        public int Retroalimentacion { get => retroalimentacion; set => retroalimentacion = value; }
        public int Tiempo_de_entrega { get => tiempo_de_entrega; set => tiempo_de_entrega = value; }
        public int Legajo_valora { get => legajo_valora; set => legajo_valora = value; }
    }
}