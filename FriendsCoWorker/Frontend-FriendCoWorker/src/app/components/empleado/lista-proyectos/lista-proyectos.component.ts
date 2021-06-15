import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObtenerProyectoEmpleadoService } from 'src/app/services/obtener-proyecto-empleado.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { ProyectosEmpleado } from 'src/app/Models/obtener-empleado-proyecto.model';
import swal from 'sweetalert2';
import { ReportesService } from 'src/app/services/reportes.service';

@Component({
  selector: 'app-lista-proyectos',
  templateUrl: './lista-proyectos.component.html',
  styleUrls: ['./lista-proyectos.component.css']
})
export class ListaProyectosComponent implements OnInit {

  idEmpleado: number;
  validar: number;
  cantidadProyectos: number;
  public proyectoEmpleado: ProyectosEmpleado[];

  constructor(private tokenStorage: TokenStorageService, private router: Router, private obtenerProyectos: ObtenerProyectoEmpleadoService,
    private reporteServices: ReportesService) { }

  ngOnInit(): void {
    this.idEmpleado = this.tokenStorage.getIdEmpleado();
    console.log(this.idEmpleado);

    this.obtenerProyectos.getProyectosEmpleado().subscribe(
      data => {
        this.proyectoEmpleado = data;
        this.validar = this.proyectoEmpleado.length;
        console.log("validar " + this.validar);
      }
    )

    this.reporteServices.getCantidadProyectos().subscribe(
      data => {
        this.cantidadProyectos = data;
        console.log();
      }
    )
  }

  salirDeProyecto(id_proyecto: number) {
    this.obtenerProyectos.deleteProyecto(this.idEmpleado, id_proyecto).subscribe(
      data => {
        swal.fire('Enhorabuena', 'Eliminando....', 'success');
        this.refresh();
      }
    )
  }
  refresh(): void {
    window.setTimeout(function(){location.reload()},2000)
  }
  redireccion(){
    this.router.navigate(['/proyecto']);
  }
}
