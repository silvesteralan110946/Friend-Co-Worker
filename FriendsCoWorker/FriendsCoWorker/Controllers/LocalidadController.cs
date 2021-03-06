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
    public class LocalidadController : ApiController
    {
        // GET: api/Localidad
        public IEnumerable<Localidad> Get()
        {
            GestorPPL localidad = new GestorPPL();
            return localidad.obtenerLocalidades();
        }

        // GET: api/Localidad/5
        public IEnumerable<Localidad> Get(int id)
        {
            GestorPPL localidad = new GestorPPL();
            return localidad.obtenerLocalidadId(id);
        }

        // POST: api/Localidad
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Localidad/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Localidad/5
        public void Delete(int id)
        {
        }
    }
}
