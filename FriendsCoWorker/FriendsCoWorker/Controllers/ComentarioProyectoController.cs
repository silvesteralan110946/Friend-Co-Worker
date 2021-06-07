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
    [Route("api/ComentarioProyecto")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ComentarioProyectoController : ApiController
    {
        // GET: api/ComentarioProyecto
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/ComentarioProyecto/5
        [HttpGet]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/ComentarioProyecto
        [HttpPost]
        public void Post([FromBody] ComentariosProyectos comentario)
        {
            GestorComentarioProyecto gProyecto = new GestorComentarioProyecto();
            gProyecto.nuevoComentarioProyecto(comentario);
        }

        // PUT: api/ComentarioProyecto/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/ComentarioProyecto/5
        public void Delete(int id)
        {
        }
    }
}
