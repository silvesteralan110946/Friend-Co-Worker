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
    public class ProvinciaController : ApiController
    {
        // GET: api/Provincia
        public IEnumerable<Provincia> Get()
        {
            GestorPPL provincia = new GestorPPL();
            return provincia.obtenerProvincias();
        }

        // GET: api/Provincia/5
        public IEnumerable<Provincia> Get(int id)
        {
            GestorPPL provincia = new GestorPPL();
            return provincia.obtenerProvinciaId(id);
        }

        // POST: api/Provincia
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Provincia/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Provincia/5
        public void Delete(int id)
        {
        }
    }
}
