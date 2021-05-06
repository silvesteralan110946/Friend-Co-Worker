using FriendsCoWorker.AccesoDatos;
using FriendsCoWorker.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace FriendsCoWorker.Controllers
{
    [RoutePrefix("api/cliente")]
    public class EmpleadoController : ApiController
    {
        // GET: api/Empleado
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Empleado/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Empleado
        [HttpPost]
        public int Post([FromBody] Empleado nuevo)
        {
            GestorEmpleado gEmpleado = new GestorEmpleado();
            return gEmpleado.nuevoEmpleado(nuevo);
        }

        // PUT: api/Empleado/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Empleado/5
        public void Delete(int id)
        {
        }
    }
}
