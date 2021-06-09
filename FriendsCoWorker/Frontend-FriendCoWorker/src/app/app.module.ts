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

// Angular Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ObtenerEmpleadoComponent } from './components/empleado/obtener-empleado/obtener-empleado.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { NuevoProyectoComponent } from './components/proyecto/nuevo-proyecto/nuevo-proyecto.component';
import { ListaProyectosComponent } from './components/empleado/lista-proyectos/lista-proyectos.component';
import { ValorarProyectoComponent } from './components/proyecto/valorar-proyecto/valorar-proyecto.component';


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
    ValorarProyectoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
