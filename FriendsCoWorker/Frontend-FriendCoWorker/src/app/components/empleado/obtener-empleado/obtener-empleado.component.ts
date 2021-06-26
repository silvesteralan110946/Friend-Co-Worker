import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReporteEmpleados } from 'src/app/Models/reporte-empleados.model';
import { ValoresEmpleadoInterface } from 'src/app/Models/valores-empleado.model';
import { ReporteEmpleadosService } from 'src/app/services/reporte-empleados.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { ValoresEmpleadoService } from 'src/app/services/valores-empleado.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-obtener-empleado',
  templateUrl: './obtener-empleado.component.html',
  styleUrls: ['./obtener-empleado.component.scss']
})
export class ObtenerEmpleadoComponent implements OnInit {

  public listEmpleados: ReporteEmpleados[];
  idEmpleado: number;
  legajo: number;
  nombre_empleado: string;

  Comunicacion: number;
  desempenio_individual: number;
  trabajoEquipo: number;
  puntualidad: number;
  resolucion_de_problemas: number;

  constructor(private tokenStorage: TokenStorageService, private router: Router, private reEmpleadosServices: ReporteEmpleadosService,
    private valoresEmpleadoServices: ValoresEmpleadoService) { }

  ngOnInit(): void {
    this.reEmpleadosServices.getReEmpleados().subscribe(
      data => {
        this.listEmpleados = data;
        console.log(this.listEmpleados);
      }
    )

    this.idEmpleado = this.tokenStorage.getIdEmpleado();
    console.log(this.idEmpleado);
  }

  idValorar(legajo: number, nombre_empleado: string) {
    this.legajo = legajo;
    this.nombre_empleado = nombre_empleado;
    console.log(this.legajo, this.nombre_empleado);
  }

  setComunicacion(valor: number) {
    this.Comunicacion = valor;
  }

  setDesempenio(valor: number) {
    this.desempenio_individual = valor;
  }

  setTrabajoEquipo(valor: number) {
    this.trabajoEquipo = valor;
  }

  setPuntualidad(valor: number) {
    this.puntualidad = valor;
  }

  setResolucionProblemas(valor: number) {
    this.resolucion_de_problemas = valor;
  }


  agregarValorEmpleado() {
    if (this.idEmpleado != this.legajo) {
      let selectedVotacion: ValoresEmpleadoInterface = new ValoresEmpleadoInterface(this.legajo, this.Comunicacion, this.desempenio_individual,
        this.trabajoEquipo, this.puntualidad, this.resolucion_de_problemas, this.idEmpleado);
      if (this.Comunicacion != undefined || this.desempenio_individual != undefined || this.trabajoEquipo != undefined || this.puntualidad != undefined || this.resolucion_de_problemas != undefined) {
        this.valoresEmpleadoServices.onCreateValorarEmpleado(selectedVotacion).subscribe(
          data => {
            if (data == 1) {

              Swal.fire({
                title: '¿Ya votaste a este empleado, quieres modificar tu valoración?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Si, votar',
                cancelButtonText: 'No'
              }).then((result) => {
                if (result.isConfirmed) {
                  //Nos suscribimos al servicio y traemos el metodo del backend
                  let selectedVotacion: ValoresEmpleadoInterface = new ValoresEmpleadoInterface(this.legajo, this.Comunicacion, this.desempenio_individual,
                    this.trabajoEquipo, this.puntualidad, this.resolucion_de_problemas, this.idEmpleado);
                  this.valoresEmpleadoServices.ModificarValorarEmpleado(selectedVotacion).subscribe();
                  Swal.fire(
                    'LISTO!',
                    'La votación se modifico.',
                    'success'
                  )
                  this.refresh();
                  // For more information about handling dismissals please visit
                  // https://sweetalert2.github.io/#handling-dismissals
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                  Swal.fire(
                    'Cancelado',
                    'La operación se cancelo con exito :)',
                    'error'
                  )
                  this.refresh();
                }
              })
              //Swal.fire('Error', 'Ya valoraste este empleado', 'error');
              //this.refresh();
            } else {
              Swal.fire('Enviado', 'Valor sumado con exito', 'success');
              this.refresh();
            }
            console.log(data);
          }
        )
      } else {
        Swal.fire('Error', 'Tiene que votar todas las opciones', 'info')
      }
    } else {
      Swal.fire('Error', 'No puedes valorarte tu mismo', 'error');
    }
  }

  refresh(): void {
    window.setTimeout(function () { location.reload() }, 1500)
  }
}
