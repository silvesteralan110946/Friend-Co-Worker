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
    public class PaisController : ApiController
    {
        // GET: api/Pais
        public IEnumerable<Pais> Get()
        {
            GestorPPL lista = new GestorPPL();
            return lista.obtenerPaises();
        }

        // GET: api/Pais/5
        public IEnumerable<Pais> Get(int id)
        {
            GestorPPL pais = new GestorPPL();
            return pais.obtenerPaisPorId(id);
        }

        // POST: api/Pais
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Pais/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Pais/5
        public void Delete(int id)
        {
        }
    }
}
