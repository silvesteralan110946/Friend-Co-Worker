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
    [AllowAnonymous]
    [Route("api/ValoresEmpleado")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ValoresEmpleadosController : ApiController
    {
        // GET: api/ValoresEmpleados
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/ValoresEmpleados/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/ValoresEmpleados
        [HttpPost]
        public int Post([FromBody] ValoresEmpleado valor)
        {
            GestorValorarEmpleado gValor = new GestorValorarEmpleado();
            return gValor.nuevoValorEmpleado(valor);
        }

        // PUT: api/ValoresEmpleados/5
        [HttpPut]
        public int Put([FromBody] ValoresEmpleado valor)
        {
            GestorValorarEmpleado gValor = new GestorValorarEmpleado();
            return gValor.modificarValorEmpleado(valor);
        }

        // DELETE: api/ValoresEmpleados/5
        public void Delete(int id)
        {
        }
    }
}
