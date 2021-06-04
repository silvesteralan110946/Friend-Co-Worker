using FriendsCoWorker.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace FriendsCoWorker
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Configuración y servicios de API web
            config.EnableCors();

            // Rutas de API web
            config.MapHttpAttributeRoutes();

            config.MessageHandlers.Add(new TokenValidationHandler());

            // Empleado route
            //config.Routes.MapHttpRoute(
            //    name: "Empleados",
            //    routeTemplate: "api/Empleado/{id}",
            //    defaults: new { controller = "EmpleadoId", id = RouteParameter.Optional },

            //    constraints: new { id = "/d+" }
            //);


            // Default
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
