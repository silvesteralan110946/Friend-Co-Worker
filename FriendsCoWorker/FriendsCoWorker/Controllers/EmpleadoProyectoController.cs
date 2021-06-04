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
    [Route("api/empleadoProyecto")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class EmpleadoProyectoController : ApiController
    {
        // GET: api/EmpleadoProyecto
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/EmpleadoProyecto/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/EmpleadoProyecto
        [HttpPost]
        public int Post([FromBody] EmpleadoXProyecto nuevo)
        {
            GestorEmpleadoProyecto gEmpleadoProyecto = new GestorEmpleadoProyecto();
            return gEmpleadoProyecto.nuevoEmpleadoProyecto(nuevo);
        }

        // PUT: api/EmpleadoProyecto/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/EmpleadoProyecto/5
        public void Delete(int id)
        {
        }
    }
}
