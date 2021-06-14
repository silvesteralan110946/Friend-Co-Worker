import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { ComentarioEmpleadoInterface } from 'src/app/Models/comentario-empleado.model';
import { Empleado } from 'src/app/Models/empleado.model';
import { PromedioEmpleado } from 'src/app/Models/promedio-empleado.model';
import { ReComentarioEmpleado } from 'src/app/Models/recomentario-empleado.model';
import { CometariosEmpleadosService } from 'src/app/services/cometarios-empleados.service';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { PromedioEmpleadoService } from 'src/app/services/promedio-empleado.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-calificaciones-empleado',
  templateUrl: './calificaciones-empleado.component.html',
  styleUrls: ['./calificaciones-empleado.component.css']
})
export class CalificacionesEmpleadoComponent implements OnInit {

  legajo_traer: number = 0;
  comunicacion: number = 0;
  desempenio: number = 0;
  trabajoEquipo: number = 0;
  puntualidad: number = 0;
  resolucion_problemas: number = 0;
  nombre_empleado: string = '';
  idempleado: number;

  public listEmpleados: Empleado[];
  verSeleccion: number;
  public listPromedios: PromedioEmpleado[];
  public listComentarios: ReComentarioEmpleado[];

  validar: boolean = false;
  graficos: boolean = false;
  comentarios: boolean = false;
  comentario: string;

  constructor(private tokenStorage: TokenStorageService, private router: Router, private empleadoServices: EmpleadosService,
    private promedioEmpleadoServices: PromedioEmpleadoService, private comentariosEmpleado: CometariosEmpleadosService) { }

  ngOnInit(): void {
    this.empleadoServices.getEmpleados().subscribe(
      data => {
        this.listEmpleados = data;
        //console.log(this.listEmpleados);
      })

      this.idempleado = this.tokenStorage.getIdEmpleado();
      //console.log(this.idempleado);
  }

  guardarId() {
    this.verSeleccion = this.legajo_traer;
    console.log(this.legajo_traer);
    this.getPromedios();
  }

  getPromedios() {
    this.promedioEmpleadoServices.getPromedios().subscribe(
      data => {
        this.listPromedios = data;
        console.log(this.listPromedios);
        for (let index = 0; index < this.listPromedios.length; index++) {
          if (this.listPromedios[index].legajo == this.legajo_traer) {
            this.comunicacion = this.listPromedios[index].comunicacion;
            this.desempenio = this.listPromedios[index].desempenio_individual;
            this.trabajoEquipo = this.listPromedios[index].trabajo_en_equipo;
            this.puntualidad = this.listPromedios[index].puntualidad;
            this.resolucion_problemas = this.listPromedios[index].resolucion_de_problemas;
            this.nombre_empleado = this.listPromedios[index].nombre_empleado;
          }
        }
      }
    )
  }

  getComentarios(){
    this.comentariosEmpleado.getComentariosEmpleado(this.legajo_traer).subscribe(
      data => {
        //console.log(data);
        this.listComentarios = data;
      }
    )
  }

  cambiarGrafico(){
    this.graficos = true;
    this.comentarios = false;
  }

  cambiarComentario(){
    this.comentarios = true;
    this.graficos = false;
  }

  // Radar
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
    scale: {
      ticks: {
        min: 0,
        max: 5
      }
    }

  };
  public radarChartLabels: Label[] = ['Comunicación', 'Desempeño individual', 'Trabajo en equipo', 'Puntualidad', 'Resolución de problemas'];

  public radarChartData = [{
    data: [this.comunicacion, this.desempenio, this.trabajoEquipo, this.puntualidad, this.resolucion_problemas],
    label: this.nombre_empleado,
    fill: true,
    radius: 5,
    borderColor: '#1493cc',
    backgroundColor: '#1492cc6c',
    pointBackgroundColor: '#1493cc'
  }];

  public radarChartType: ChartType = 'radar';

  public charUpdate() {
    this.radarChartData = [{
      data: [this.comunicacion, this.desempenio, this.trabajoEquipo, this.puntualidad, this.resolucion_problemas],
    label: this.nombre_empleado,
      fill: true,
      radius: 5,
      borderColor: '#1493cc',
      backgroundColor: '#1492cc6c',
      pointBackgroundColor: '#1493cc'
    }]
    this.validar = true;
    this.graficos = true;
    this.comentarios = false;
    this.getComentarios();
  }

  agregarComentario() {
    let selectedComentario: ComentarioEmpleadoInterface = new ComentarioEmpleadoInterface(this.idempleado,  this.verSeleccion, this.comentario);
    this.comentariosEmpleado.onCreateCometarioEmpleado(selectedComentario).subscribe(
      data => {
        //Swal.fire('Enviado', 'Comentario sumado con exito', 'success');
        this.getComentarios();
        this.comentario = '';
      }
    )
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
