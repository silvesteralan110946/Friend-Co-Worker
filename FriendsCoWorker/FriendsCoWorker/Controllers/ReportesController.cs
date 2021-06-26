using FriendsCoWorker.AccesoDatos;
using FriendsCoWorker.Models;
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
    [Route("api/Reportes")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ReportesController : ApiController
    {
        // CANTIDAD DE PROYECTOS POR EMPLEADO
        [Route("api/Reportes/cantidadProyectos/{legajo}")]
        public int GetCantidadProyectos(int legajo)
        {
            GestorReportes gCantidad = new GestorReportes();
            return gCantidad.cantidadPRoyectos(legajo);
        }

        // EMPLEADOS POR PROYECTO
        [HttpGet]
        [Route("api/Reportes/EmpleadosProyecto/{id_proyecto}")]
        public IEnumerable<ReEmplProyecto> Get(int id_proyecto)
        {
            GestorReportes gEmplProyecto = new GestorReportes();
            return gEmplProyecto.ObtenerEmpleadosProyecto(id_proyecto);
        }

        // TOP PROYECTOS
        [HttpGet]
        [Route("api/Reportes/TopProyectos/")]
        public IEnumerable<TopProyectos> Get()
        {
            GestorReportes gProProyecto = new GestorReportes();
            return gProProyecto.ObtenerTopProyectos();
        }

        // TOP Empleados
        [HttpGet]
        [Route("api/Reportes/TopEmpleados/")]
        public IEnumerable<TopEmpleados> GetEmpleados()
        {
            GestorReportes gProProyecto = new GestorReportes();
            return gProProyecto.ObtenerTopEmpleados();
        }

        // ENVIO A MAIL CONTACTO
        [HttpPost]
        [Route("api/Reportes/EnvioMail/")]
        public void Post([FromBody] EnvioMail envioMail)
        {
            GestorReportes gEmail = new GestorReportes();
            gEmail.enviarEmailCuenta(envioMail);
        }
    }
}
