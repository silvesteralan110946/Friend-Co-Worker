using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FriendsCoWorker.Models
{
    public class ValoresEmpleado
    {
        private int id_desempenio;
        private int legajo;
        private int comunicacion;
        private int desempenio_individual;
        private int trabajo_en_equipo;
        private int puntualidad;
        private int resolucion_de_problemas;
        private int legajo_valora;

        public int Id_desempenio { get => id_desempenio; set => id_desempenio = value; }
        public int Legajo { get => legajo; set => legajo = value; }
        public int Comunicacion { get => comunicacion; set => comunicacion = value; }
        public int Desempenio_individual { get => desempenio_individual; set => desempenio_individual = value; }
        public int Trabajo_en_equipo { get => trabajo_en_equipo; set => trabajo_en_equipo = value; }
        public int Puntualidad { get => puntualidad; set => puntualidad = value; }
        public int Resolucion_de_problemas { get => resolucion_de_problemas; set => resolucion_de_problemas = value; }
        public int Legajo_valora { get => legajo_valora; set => legajo_valora = value; }
    }
}