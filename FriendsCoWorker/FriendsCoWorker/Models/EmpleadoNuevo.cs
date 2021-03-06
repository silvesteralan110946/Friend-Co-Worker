using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FriendsCoWorker.Models
{
    public class EmpleadoNuevo
    {
        private int legajo;
        private string nombre;
        private string apellido;
        private string sexo;
        private int idTipoDocumento;
        private string numeroDocumento;
        private string fotoPerfil;
        private string fechaNacimiento;
        private int idLocalidad;
        private string domicilio;
        private long telefono;
        private string email;
        private int idTipoEmpleado;
        private string nombreUsuario;
        private string password;
        private string tokenRecovery;

        public int Legajo { get => legajo; set => legajo = value; }
        public string Nombre { get => nombre; set => nombre = value; }
        public string Apellido { get => apellido; set => apellido = value; }
        public string Sexo { get => sexo; set => sexo = value; }
        public int IdTipoDocumento { get => idTipoDocumento; set => idTipoDocumento = value; }
        public string NumeroDocumento { get => numeroDocumento; set => numeroDocumento = value; }
        public string FotoPerfil { get => fotoPerfil; set => fotoPerfil = value; }
        public string FechaNacimiento { get => fechaNacimiento; set => fechaNacimiento = value; }
        public int IdLocalidad { get => idLocalidad; set => idLocalidad = value; }
        public string Domicilio { get => domicilio; set => domicilio = value; }
        public long Telefono { get => telefono; set => telefono = value; }
        public string Email { get => email; set => email = value; }
        public int IdTipoEmpleado { get => idTipoEmpleado; set => idTipoEmpleado = value; }
        public string NombreUsuario { get => nombreUsuario; set => nombreUsuario = value; }
        public string Password { get => password; set => password = value; }
        public string TokenRecovery { get => tokenRecovery; set => tokenRecovery = value; }
    }
}