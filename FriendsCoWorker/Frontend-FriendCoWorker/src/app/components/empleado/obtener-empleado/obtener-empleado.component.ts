import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReporteEmpleados } from 'src/app/Models/reporte-empleados.model';
import { ReporteEmpleadosService } from 'src/app/services/reporte-empleados.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-obtener-empleado',
  templateUrl: './obtener-empleado.component.html',
  styleUrls: ['./obtener-empleado.component.scss']
})
export class ObtenerEmpleadoComponent implements OnInit {

  public listEmpleados: ReporteEmpleados[];
  idEmpleado: number;

  constructor(private tokenStorage: TokenStorageService, private router: Router, private reEmpleadosServices: ReporteEmpleadosService) { }

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

}
