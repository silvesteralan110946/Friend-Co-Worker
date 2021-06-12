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
    [Route("api/ReporteEmpleados")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ReporteEmpleadosController : ApiController
    {
        // GET: api/ReporteEmpleados
        [HttpGet]
        public IEnumerable<ReEmpleados> Get()
        {
            GestorEmpleado gEmpleados = new GestorEmpleado();
            return gEmpleados.ObtenerEmpleadosReporte();
        }

        // GET: api/ReporteEmpleados/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/ReporteEmpleados
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/ReporteEmpleados/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/ReporteEmpleados/5
        public void Delete(int id)
        {
        }
    }
}
