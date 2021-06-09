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
    [Route("api/ValoresProyecto")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ValoresProyectosController : ApiController
    {
        // GET: api/ValoresProyectos
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/ValoresProyectos/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/ValoresProyectos
        [HttpPost]
        public int Post([FromBody] ValoresProyecto valor)
        {
            GestorValoresProyecto gValor = new GestorValoresProyecto();
            return gValor.nuevoValorProyecto(valor);
        }

        // PUT: api/ValoresProyectos/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/ValoresProyectos/5
        public void Delete(int id)
        {
        }
    }
}
