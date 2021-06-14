import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label, ThemeService } from 'ng2-charts';
import { ComentarioProyectoInterface } from 'src/app/Models/cometario-proyecto.model';
import { PromedioProyecto } from 'src/app/Models/promedio-proyecto.model';
import { Proyecto } from 'src/app/Models/proyecto.model';
import { ReComentarioProyecto } from 'src/app/Models/recomentario-proyecto.model';
import { CometariosProyectosService } from 'src/app/services/cometarios-proyectos.service';
import { PromedioProyectoService } from 'src/app/services/promedio-proyecto.service';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.css']
})
export class CalificacionesComponent implements OnInit {

  id_proyecto: number = 0;
  funcionalidad: number = 0;
  documentacion: number = 0;
  disenio: number = 0;
  retroalimentacion: number = 0;
  tiempo_de_entrega: number = 0;
  idempleado: number;

  nombre_proyecto: string = '';
  public listProyectos: Proyecto[];
  public listPromedios: PromedioProyecto[];
  public comentariosProyectos: ReComentarioProyecto[];
  listaFiltrada: PromedioProyecto[];
  verSeleccion: number;
  validar: boolean = false;
  graficos: boolean = false;
  comentarios: boolean = false;

  comentario: string;
  idproyecto: number;
  nombre_proyecto_comentario: string;



  constructor(private tokenStorage: TokenStorageService, private router: Router, private promedioProyectoServices: PromedioProyectoService,
    private themeService: ThemeService, private proyectoServices: ProyectoService, private cometariosProyecto: CometariosProyectosService) { }

  ngOnInit(): void {
    this.proyectoServices.getProyectos().subscribe(
      data => {
        this.listProyectos = data;
        //console.log(this.listProyectos);
      })

      this.idempleado = this.tokenStorage.getIdEmpleado();
      console.log(this.idempleado);
  }

  guardarId() {
    this.verSeleccion = this.id_proyecto;
    console.log(this.id_proyecto);
    this.getPromedios();
  }

  getPromedios() {
    this.promedioProyectoServices.getPromedios().subscribe(
      data => {
        this.listPromedios = data;
        //console.log(this.listPromedios);
        for (let index = 0; index < this.listPromedios.length; index++) {
          if (this.listPromedios[index].id_proyecto == this.id_proyecto) {
            this.funcionalidad = this.listPromedios[index].funcionalidad;
            this.documentacion = this.listPromedios[index].documentacion;
            this.disenio = this.listPromedios[index].disenio;
            this.retroalimentacion = this.listPromedios[index].retroalimentacion;
            this.tiempo_de_entrega = this.listPromedios[index].tiempo_de_entrega;
            this.nombre_proyecto = this.listPromedios[index].nombre_proyecto;
          }
        }
      }
    )
  }

  getComentarios(){
    this.cometariosProyecto.getComentariosProyecto(this.id_proyecto).subscribe(
      data => {
        console.log(data);
        this.comentariosProyectos = data;
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
  public radarChartLabels: Label[] = ['Funcionalidad', 'Documentación', 'Diseño', 'Retro-Alimentación', 'Tiempo de entrega'];

  public radarChartData = [{
    data: [this.funcionalidad, this.documentacion, this.disenio, this.retroalimentacion, this.tiempo_de_entrega],
    label: this.nombre_proyecto,
    fill: true,
    radius: 5,
    borderColor: '#1493cc',
    backgroundColor: '#1492cc6c',
    pointBackgroundColor: '#1493cc'
  }];

  public radarChartType: ChartType = 'radar';

  public charUpdate() {
    this.radarChartData = [{
      data: [this.funcionalidad, this.documentacion, this.disenio, this.retroalimentacion, this.tiempo_de_entrega],
      label: this.nombre_proyecto,
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
    let selectedComentario: ComentarioProyectoInterface = new ComentarioProyectoInterface(this.idempleado, this.comentario, this.verSeleccion);
    this.cometariosProyecto.onCreateCometarioProyecto(selectedComentario).subscribe(
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
