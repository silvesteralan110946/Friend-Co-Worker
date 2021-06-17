import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  validarEmp: boolean = true;
  topProyecto: boolean = false;
  topEmpleado: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  empXpro(){
    this.validarEmp = true;
    this.topProyecto = false;
    this.topEmpleado = false;
  }
  topProyectos(){
    this.validarEmp = false;
    this.topProyecto = true;
    this.topEmpleado = false;
  }
  topEmpleados(){
    this.validarEmp = false;
    this.topProyecto = false;
    this.topEmpleado = true;
  }
}
