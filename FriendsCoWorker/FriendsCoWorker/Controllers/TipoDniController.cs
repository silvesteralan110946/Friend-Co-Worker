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
    public class TipoDniController : ApiController
    {
        // GET: api/TipoDni
        public IEnumerable<TipoDni> Get()
        {
            GestorEmpleado tdni = new GestorEmpleado();
            return tdni.obtenerTipoDNI();
        }

        // GET: api/TipoDni/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/TipoDni
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/TipoDni/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/TipoDni/5
        public void Delete(int id)
        {
        }
    }
}
