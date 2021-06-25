using FriendsCoWorker.AccesoDatos;
using FriendsCoWorker.ModelsReports;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace FriendsCoWorker.Controllers
{
    [AllowAnonymous]
    [RoutePrefix("api/recoverypassword")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class RecoveryPasswordController : ApiController
    {
        [HttpPost]
        [Route("newpassword")]
        public IHttpActionResult newPassword(ValidarPassword np)
        {
            if (np == null)
                throw new HttpResponseException(HttpStatusCode.BadRequest);

            GestorValidarPassword gVPassword = new GestorValidarPassword();

            bool isCredentialValid = gVPassword.validarTokenEmail(np);

            if (isCredentialValid)
            {

                //Modificar contraseña y resetear el token 
                gVPassword.modificarPassword(np);
                string exito = "Password modificado con exito.";

                return Ok(exito);
            }
            else
            {
                return Unauthorized();
            }
        }
    }
}
