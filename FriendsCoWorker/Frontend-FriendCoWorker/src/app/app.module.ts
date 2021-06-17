import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexComponent } from './components/index/index.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';

// Angular Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ObtenerEmpleadoComponent } from './components/empleado/obtener-empleado/obtener-empleado.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { NuevoProyectoComponent } from './components/proyecto/nuevo-proyecto/nuevo-proyecto.component';
import { ListaProyectosComponent } from './components/empleado/lista-proyectos/lista-proyectos.component';
import { CalificacionesComponent } from './components/proyecto/calificaciones/calificaciones.component';
import { ChartsModule } from 'ng2-charts';
import { CalificacionesEmpleadoComponent } from './components/empleado/calificaciones-empleado/calificaciones-empleado.component';
import { TerminosComponent } from './components/inicio/terminos/terminos.component';
import { PreguntasFrecuentesComponent } from './components/inicio/preguntas-frecuentes/preguntas-frecuentes.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { EmpleadoProyectoComponent } from './components/reportes/empleado-proyecto/empleado-proyecto.component';
import { TopProyectosComponent } from './components/reportes/top-proyectos/top-proyectos.component';
import { TopEmpleadosComponent } from './components/reportes/top-empleados/top-empleados.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    EmpleadoComponent,
    LoginComponent,
    NavbarComponent,
    ObtenerEmpleadoComponent,
    InicioComponent,
    ProyectoComponent,
    NuevoProyectoComponent,
    ListaProyectosComponent,
    CalificacionesComponent,
    CalificacionesEmpleadoComponent,
    TerminosComponent,
    PreguntasFrecuentesComponent,
    ReportesComponent,
    EmpleadoProyectoComponent,
    TopProyectosComponent,
    TopEmpleadosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSidenavModule,
    ChartsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
