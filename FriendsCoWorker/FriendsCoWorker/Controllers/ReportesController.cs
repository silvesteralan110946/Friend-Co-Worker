using FriendsCoWorker.AccesoDatos;
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
    [Route("api/Reportes")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ReportesController : ApiController
    {
        [Route("api/Reportes/cantidadProyectos/{legajo}")]
        public int GetCantidadProyectos(int legajo)
        {
            GestorReportes gCantidad = new GestorReportes();
            return gCantidad.cantidadPRoyectos(legajo);
        }
    }
}
