using FriendsCoWorker.AccesoDatos;
using FriendsCoWorker.ModelsReports;
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
    [Route("api/ReComentarioProyecto")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ReComentarioProyectoController : ApiController
    {
        // GET: api/ReComentarioProyecto
        public IEnumerable<ReComentarioProyecto> Get()
        {
            GestorComentarioProyecto gProProyecto = new GestorComentarioProyecto();
            return gProProyecto.ObtenerComentarios();
        }

        // GET: api/ReComentarioProyecto/5
        [HttpGet]
        [Route("api/ReComentarioProyecto/{id_proyecto}")]
        public IEnumerable<ReComentarioProyecto> Get(int id_proyecto)
        {
            GestorComentarioProyecto gLista = new GestorComentarioProyecto();
            return gLista.ObtenerPorId(id_proyecto);
        }

        // POST: api/ReComentarioProyecto
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/ReComentarioProyecto/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/ReComentarioProyecto/5
        public void Delete(int id)
        {
        }
    }
}
