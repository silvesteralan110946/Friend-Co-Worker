import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalificacionesEmpleadoComponent } from './components/empleado/calificaciones-empleado/calificaciones-empleado.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { ListaProyectosComponent } from './components/empleado/lista-proyectos/lista-proyectos.component';
import { ObtenerEmpleadoComponent } from './components/empleado/obtener-empleado/obtener-empleado.component';
import { IndexComponent } from './components/index/index.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PreguntasFrecuentesComponent } from './components/inicio/preguntas-frecuentes/preguntas-frecuentes.component';
import { TerminosComponent } from './components/inicio/terminos/terminos.component';
import { LoginComponent } from './components/login/login.component';
import { CalificacionesComponent } from './components/proyecto/calificaciones/calificaciones.component';
import { NuevoProyectoComponent } from './components/proyecto/nuevo-proyecto/nuevo-proyecto.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { GuardService } from './services/guard.service';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'index', component: IndexComponent },
  { path: 'empleado', component: EmpleadoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'recuperar-mail', component: LoginComponent },
  { path: 'recuperar-contrasenia', component: LoginComponent },
  { path: 'terminos', component: TerminosComponent },
  { path: 'inicio', component: InicioComponent, canActivate: [GuardService] },
  { path: 'preguntas-frecuentes', component: PreguntasFrecuentesComponent, canActivate: [GuardService] },
  { path: 'proyecto', component: ProyectoComponent, canActivate: [GuardService] },
  { path: 'nuevo-proyecto', component: NuevoProyectoComponent, canActivate: [GuardService] },
  { path: 'empleados', component: ObtenerEmpleadoComponent, canActivate: [GuardService] },
  { path: 'list-proyecto', component: ListaProyectosComponent, canActivate: [GuardService] },
  { path: 'calificaciones', component: CalificacionesComponent, canActivate: [GuardService] },
  { path: 'calificaciones-empleado', component: CalificacionesEmpleadoComponent, canActivate: [GuardService] },
  { path: 'reportes', component: ReportesComponent, canActivate: [GuardService] },
  { path: '**', component: InicioComponent, canActivate: [GuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
