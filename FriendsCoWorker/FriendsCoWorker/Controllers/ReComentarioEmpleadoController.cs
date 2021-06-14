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
    [Route("api/ReComentarioEmpleado")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ReComentarioEmpleadoController : ApiController
    {
        // GET: api/ReComentarioEmpleado
        public IEnumerable<ReComentarioEmpleado> Get()
        {
            GestorComentarioEmpleado gProProyecto = new GestorComentarioEmpleado();
            return gProProyecto.ObtenerComentarios();
        }

        // GET: api/ReComentarioEmpleado/5
        [HttpGet]
        [Route("api/ReComentarioEmpleado/{legajo}")]
        public IEnumerable<ReComentarioEmpleado> Get(int legajo)
        {
            GestorComentarioEmpleado gLista = new GestorComentarioEmpleado();
            return gLista.ObtenerPorId(legajo);
        }

        // POST: api/ReComentarioEmpleado
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/ReComentarioEmpleado/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/ReComentarioEmpleado/5
        public void Delete(int id)
        {
        }
    }
}
