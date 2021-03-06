import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/Models/proyecto.model';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { EmpleadoProyectoService } from 'src/app/services/empleadoxproyecto.service';
import Swal from 'sweetalert2';
import { EmpleadoXProyecto } from 'src/app/Models/empleado-proyecto.model';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';
import { ComentarioProyectoInterface } from 'src/app/Models/cometario-proyecto.model';
import { CometariosProyectosService } from 'src/app/services/cometarios-proyectos.service';
import { ValoresProyectoInterface } from 'src/app/Models/valores-proyecto.model';
import { ValorarProyectoService } from 'src/app/services/valorar-proyecto.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.scss']
})
export class ProyectoComponent implements OnInit {

  public listProyectos: Proyecto[];

  public empleado: EmpleadoXProyecto[];
  idEmpleado: number;
  message: string;
  isCreateFailed: boolean;

  comentario: string;
  idproyecto: number;
  nombre_proyecto: string;

  funcionalidad: number;
  documentacion: number;
  diseño: number;
  retro: number;
  tiempo: number;

  constructor(private proyectoServices: ProyectoService, private empledoProyectoServices: EmpleadoProyectoService,
    private tokenStorage: TokenStorageService, private router: Router, private comentarioProyectoServices: CometariosProyectosService,
    private valoresServices: ValorarProyectoService) { }

  ngOnInit(): void {
    this.proyectoServices.getProyectos().subscribe(
      data => {
        this.listProyectos = data;
        console.log(this.listProyectos);
      }
    )

    this.idEmpleado = this.tokenStorage.getIdEmpleado();
    console.log(this.idEmpleado);

    console.log(this.funcionalidad)
  }

  sumarProyecto(id: number) {
    console.log(id);
    Swal.fire({
      title: '¿Se quiere sumar a este proyecto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, sumarme',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        //Nos suscribimos al servicio y traemos el metodo del backend
        let selectedEmpleado: EmpleadoXProyecto = new EmpleadoXProyecto(this.idEmpleado, id);
        this.empledoProyectoServices.onCreateProyectoEmpleado(selectedEmpleado).subscribe(
          data => {
            //this.tokenStorage.saveToken(data);
            if (data === 1) {
              this.message = 'Usted ya se encuentra registrado en este proyecto';
              Swal.fire('Oops...', this.message, 'error')
              this.isCreateFailed = true;
            }
            else if (data === 0) {
              Swal.fire('Enhorabuena', 'Empleado registrado a proyecto exitosamente', 'success');
              this.isCreateFailed = false;
              //this.clientes.push(data);
            }
          });
        Swal.fire(
          'Sumado!',
          'Ahora eres parte del proyecto.',
          'success'
        )
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'La operación se cancelo con exito :)',
          'error'
        )
      }
    })
  }

  idProyecto(id_proyecto: number) {
    this.idproyecto = id_proyecto;
    console.log(id_proyecto);
  }

  idValorar(id_proyecto: number, nombre_proyecto: string) {
    this.idproyecto = id_proyecto;
    this.nombre_proyecto = nombre_proyecto;
  }

  setFuncionalidad(valor: number) {
    this.funcionalidad = valor;
  }

  setDocumentacion(valor: number) {
    this.documentacion = valor;
  }

  setDisenio(valor: number) {
    this.diseño = valor;
  }

  setRetro(valor: number) {
    this.retro = valor;
  }

  setTiempo(valor: number) {
    this.tiempo = valor;
  }

  agregarValorProyecto() {
    let selectedVotacion: ValoresProyectoInterface = new ValoresProyectoInterface(this.idproyecto, this.funcionalidad, this.documentacion,
      this.diseño, this.retro, this.tiempo, this.idEmpleado);

    if (this.funcionalidad != undefined && this.documentacion != undefined && this.diseño != undefined && this.retro != undefined && this.tiempo != undefined) {
      this.valoresServices.onCreateValorarProyecto(selectedVotacion).subscribe(
        data => {
          if (data == 1) {

            Swal.fire({
              title: '¿Ya votaste a este proyecto, quieres modificar tu valoración?',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonText: 'Si, votar',
              cancelButtonText: 'No'
            }).then((result) => {
              if (result.isConfirmed) {
                //Nos suscribimos al servicio y traemos el metodo del backend
                let selectedVotacion: ValoresProyectoInterface = new ValoresProyectoInterface(this.idproyecto, this.funcionalidad, this.documentacion,
                  this.diseño, this.retro, this.tiempo, this.idEmpleado);
                this.valoresServices.ModificarValorarProyecto(selectedVotacion).subscribe();
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

            //Swal.fire('Error', 'Ya valoraste este proyecto', 'error');
            this.refresh();
          } else {
            Swal.fire('Enviado', 'Valor sumado con exito', 'success');
            this.refresh();
          }
          //console.log(data);
        }
      )
    } else {
      Swal.fire('Error', 'Tiene que votar todas las opciones', 'info')
    }
  }

  agregarComentario() {
    let selectedComentario: ComentarioProyectoInterface = new ComentarioProyectoInterface(this.idEmpleado, this.comentario, this.idproyecto);
    this.comentarioProyectoServices.onCreateCometarioProyecto(selectedComentario).subscribe(
      data => {
        Swal.fire('Enviado', 'Comentario sumado con exito', 'success');
      }
    )
  }

  refresh(): void {
    window.setTimeout(function(){location.reload()},1500)
  }
}
