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
    [Route("api/PromedioEmpleado")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class PromedioEmpleadoController : ApiController
    {
        // GET: api/PromedioEmpleado
        [HttpGet]
        public IEnumerable<PromedioEmpleado> Get()
        {
            GestorReportesPromedios gProProyecto = new GestorReportesPromedios();
            return gProProyecto.ObtenerProEmpleados();
        }

        // GET: api/PromedioEmpleado/5
        [HttpGet]
        [Route("api/PromedioEmpleado/{legajo}")]
        public PromedioEmpleado Get(int legajo)
        {
            GestorReportesPromedios gProProyecto = new GestorReportesPromedios();
            return gProProyecto.ObtenerPorEmpleado(legajo);
        }

        // POST: api/PromedioEmpleado
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/PromedioEmpleado/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/PromedioEmpleado/5
        public void Delete(int id)
        {
        }
    }
}
