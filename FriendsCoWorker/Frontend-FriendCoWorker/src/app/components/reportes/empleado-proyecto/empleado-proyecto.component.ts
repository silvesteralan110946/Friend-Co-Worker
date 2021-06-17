import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/Models/proyecto.model';
import { ReEmpleadoProyecto } from 'src/app/Models/ReEmpProyecto.model';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { ReportesService } from 'src/app/services/reportes.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empleado-proyecto',
  templateUrl: './empleado-proyecto.component.html',
  styleUrls: ['./empleado-proyecto.component.css']
})
export class EmpleadoProyectoComponent implements OnInit {

  id_proyecto: number = 0;
  public listProyectos: Proyecto[];
  idempleado: number;
  verSeleccion: number;
  listEmpleados: ReEmpleadoProyecto[];
  validar: number = 0;

  constructor(private tokenStorage: TokenStorageService, private router: Router, private proyectoServices: ProyectoService, private reporteServices: ReportesService) { }

  ngOnInit(): void {
    this.proyectoServices.getProyectos().subscribe(
      data => {
        this.listProyectos = data;
        //console.log(this.listProyectos);
      })

    this.idempleado = this.tokenStorage.getIdEmpleado();
    //console.log(this.idempleado);
  }

  guardarId() {
    this.verSeleccion = this.id_proyecto;
    //console.log(this.id_proyecto);
  }

  traerListaEmpleados() {
    if (this.id_proyecto != 0) {
      this.reporteServices.getEmpleadosXProyectos(this.id_proyecto).subscribe(
        data => {
          this.listEmpleados = data;
          console.log(this.listEmpleados);
        }
      )
      this.validar = 1;
    } else {
      Swal.fire('Error', 'Debe seleccionar un proyecto', 'info')
    }
  }

}
