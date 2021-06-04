import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/Models/proyecto.model';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { EmpleadoProyectoService } from 'src/app/services/empleadoxproyecto.service';
import Swal from 'sweetalert2';
import { EmpleadoXProyecto } from 'src/app/Models/empleado-proyecto.model';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';

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

  constructor(private proyectoServices: ProyectoService, private empledoProyectoServices: EmpleadoProyectoService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    this.proyectoServices.getProyectos().subscribe(
      data => {
        this.listProyectos = data;
        console.log(this.listProyectos);
      }
    )

    this.idEmpleado = this.tokenStorage.getIdEmpleado();
    console.log(this.idEmpleado);
  }

  sumarProyecto(id: number){
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
}
