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
    [Route("api/proyecto-x-empleado")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ListProyectoEmpleadoController : ApiController
    {
        // GET: api/ListProyectoEmpleado
        [HttpGet]
        public IEnumerable<ListProyectoEmpleado> Get()
        {
            GestorListEmpleadoProyecto gLista = new GestorListEmpleadoProyecto();
            return gLista.ObtenerProyectos();
        }

        // GET: api/ListProyectoEmpleado/5
        [HttpGet]
        [Route("api/proyecto-x-empleado/{legajo}")]
        public ListProyectoEmpleado Get(int legajo)
        {
            GestorListEmpleadoProyecto gLista = new GestorListEmpleadoProyecto();
            return gLista.ObtenerPorId(legajo);
        }

        // POST: api/ListProyectoEmpleado
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/ListProyectoEmpleado/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/ListProyectoEmpleado/5
        public void Delete(int id)
        {
        }
    }
}
