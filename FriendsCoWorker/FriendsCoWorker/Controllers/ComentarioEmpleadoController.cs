using FriendsCoWorker.AccesoDatos;
using FriendsCoWorker.Models;
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
    [Route("api/ComentarioEmpleado")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ComentarioEmpleadoController : ApiController
    {
        // GET: api/ComentarioEmpleado
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/ComentarioEmpleado/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/ComentarioEmpleado
        [HttpPost]
        public void Post([FromBody] ComentariosEmpleados comentario)
        {
            GestorComentarioEmpleado gProyecto = new GestorComentarioEmpleado();
            gProyecto.nuevoComentarioEmpleado(comentario);
        }

        // PUT: api/ComentarioEmpleado/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/ComentarioEmpleado/5
        public void Delete(int id)
        {
        }
    }
}
