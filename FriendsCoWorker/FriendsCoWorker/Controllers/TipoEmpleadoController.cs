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
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class TipoEmpleadoController : ApiController
    {
        // GET: api/TipoEmpleado
        public IEnumerable<TipoEmpleado> Get()
        {
            GestorEmpleado templeado = new GestorEmpleado();
            return templeado.obtenerTipoEmpleados();
        }

        // GET: api/TipoEmpleado/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/TipoEmpleado
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/TipoEmpleado/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/TipoEmpleado/5
        public void Delete(int id)
        {
        }
    }
}
