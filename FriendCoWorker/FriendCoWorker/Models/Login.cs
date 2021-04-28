using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FriendCoWorker.Models
{
    public class Login
    {
        private string nombreUsuario;
        private string password;

        public string Nombreusuario{ get => nombreUsuario ; set => nombreUsuario = value; }
        public string Password { get => password; set => password = value; }
    }
}