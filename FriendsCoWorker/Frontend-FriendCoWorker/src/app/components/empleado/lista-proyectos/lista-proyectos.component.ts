import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObtenerProyectoEmpleadoService } from 'src/app/services/obtener-proyecto-empleado.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { ProyectosEmpleado } from 'src/app/Models/obtener-empleado-proyecto.model';

@Component({
  selector: 'app-lista-proyectos',
  templateUrl: './lista-proyectos.component.html',
  styleUrls: ['./lista-proyectos.component.css']
})
export class ListaProyectosComponent implements OnInit {

  idEmpleado: number;
  public proyectoEmpleado: ProyectosEmpleado[];

  constructor(private tokenStorage: TokenStorageService, private router: Router, private obtenerProyectos: ObtenerProyectoEmpleadoService) { }

  ngOnInit(): void {
    this.idEmpleado = this.tokenStorage.getIdEmpleado();
    console.log(this.idEmpleado);

    this.obtenerProyectos.getProyectosEmpleados().subscribe(
      data => {
        this.proyectoEmpleado = data;
        console.log(this.proyectoEmpleado);
      }
    )
  }

}
