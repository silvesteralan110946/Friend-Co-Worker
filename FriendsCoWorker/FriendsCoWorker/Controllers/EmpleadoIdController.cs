using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using FriendsCoWorker.Models;
using FriendsCoWorker.AccesoDatos;

namespace FriendsCoWorker.Controllers
{
    //[Authorize]
    [AllowAnonymous]
    [Route("api/Empleados")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ClienteController : ApiController
    {
        //[Authorize]
        // GET: api/Cliente
        [HttpGet]
        public IEnumerable<Empleado> Get()
        {
            GestorEmpleado gEmpleados = new GestorEmpleado();
            return gEmpleados.ObtenerEmpleados();
        }

        ////[Authorize]
        //// GET: api/Cliente/"número de id"
        [HttpGet]
        [Route("api/Empleados/{legajo}")]
        public Empleado Get(int legajo)
        {
            GestorEmpleado gEmpleado = new GestorEmpleado();
            return gEmpleado.ObtenerPorLegajo(legajo);
        }

        // POST: api/Empleado
        [HttpPost]
        [Route("api/nuevoEmpleado/")]
        public int Post([FromBody] EmpleadoNuevo nuevo)
        {            
            GestorEmpleado gEmpleado = new GestorEmpleado();
            return gEmpleado.nuevoEmpleado2(nuevo);
        }
    }
}
