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
    public class PromedioProyectoController : ApiController
    {
        [AllowAnonymous]
        [Route("api/PromedioProyecto")]
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        // GET: api/PromedioProyecto
        [HttpGet]
        public IEnumerable<PromedioProyecto> Get()
        {
            GestorReportesPromedios gProProyecto = new GestorReportesPromedios();
            return gProProyecto.ObtenerProProyecto();
        }

        // GET: api/PromedioProyecto/5
        [HttpGet]
        [Route("api/PromedioProyecto/{id_proyecto}")]
        public PromedioProyecto Get(int id_proyecto)
        {
            GestorReportesPromedios gProProyecto = new GestorReportesPromedios();
            return gProProyecto.ObtenerPorProyecto(id_proyecto);
        }

        // POST: api/PromedioProyecto
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/PromedioProyecto/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/PromedioProyecto/5
        public void Delete(int id)
        {
        }
    }
}
