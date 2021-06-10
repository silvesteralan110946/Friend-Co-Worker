import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { ListaProyectosComponent } from './components/empleado/lista-proyectos/lista-proyectos.component';
import { IndexComponent } from './components/index/index.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { CalificacionesComponent } from './components/proyecto/calificaciones/calificaciones.component';
import { NuevoProyectoComponent } from './components/proyecto/nuevo-proyecto/nuevo-proyecto.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { GuardService } from './services/guard.service';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'index', component: IndexComponent },
  { path: 'empleado', component: EmpleadoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'proyecto', component: ProyectoComponent },
  { path: 'nuevo-proyecto', component: NuevoProyectoComponent },
  { path: 'list-proyecto', component: ListaProyectosComponent },
  { path: 'calificaciones', component: CalificacionesComponent },
  { path: '**', component: IndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
