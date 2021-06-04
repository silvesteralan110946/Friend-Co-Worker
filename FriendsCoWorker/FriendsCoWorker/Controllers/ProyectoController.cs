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
    [Route("api/proyecto")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ProyectoController : ApiController
    {
        // GET: api/Proyecto
        [HttpGet]
        public IEnumerable<Proyecto> Get()
        {
            GestorProyecto gestorProyecto = new GestorProyecto();
            return gestorProyecto.ObtenerProyectos();
        }

        //[Authorize]
        // GET: api/Proyecto/"número de id"
        [HttpGet]
        [Route("api/proyecto/{id}")]
        public Proyecto Get(int id)
        {
            GestorProyecto gestorProyecto = new GestorProyecto();
            return gestorProyecto.ObtenerPorId(id);
        }

        // POST: api/Proyecto
        [HttpPost]
        public void Post([FromBody] Proyecto nuevo)
        {
            GestorProyecto gProyecto = new GestorProyecto();
            gProyecto.nuevoProyecto(nuevo);
        }

        // PUT: api/Proyecto/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Proyecto/5
        public void Delete(int id)
        {
        }
    }
}
