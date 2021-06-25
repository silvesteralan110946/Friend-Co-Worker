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
    [RoutePrefix("api/recoverymail")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class RecoveryMailController : ApiController
    {
        [HttpPost]
        [Route("validation")]
        public IHttpActionResult validation(EmailValidator email)
        {
            if (email == null)
                throw new HttpResponseException(HttpStatusCode.BadRequest);

            GestorValidarPassword gVPassword = new GestorValidarPassword();

            bool isCredentialValid = gVPassword.validarEmail(email);

            if (isCredentialValid)
            {
                string tokenCambioPassword = Guid.NewGuid().ToString();

                //insertar el token en el cliente
                gVPassword.insertarTokenEmail(tokenCambioPassword, email.email);

                // enviar el mail

                gVPassword.SendMail(email.email, tokenCambioPassword);

                var mail = email.email;
                return Ok(mail);
            }
            else
            {
                return Unauthorized();
            }
        }
    }
}
