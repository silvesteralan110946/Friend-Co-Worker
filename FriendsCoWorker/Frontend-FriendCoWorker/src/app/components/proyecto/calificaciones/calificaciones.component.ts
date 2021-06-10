import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label, ThemeService } from 'ng2-charts';
import { PromedioProyecto } from 'src/app/Models/promedio-proyecto.model';
import { Proyecto } from 'src/app/Models/proyecto.model';
import { PromedioProyectoService } from 'src/app/services/promedio-proyecto.service';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.css']
})
export class CalificacionesComponent implements OnInit {

  id_proyecto: number = 1004;
  funcionalidad: number = 0;
  documentacion: number = 0;
  disenio: number = 0;
  retroalimentacion: number = 0;
  tiempo_de_entrega: number = 0;
  nombre_proyecto: string = '';
  public listProyectos: Proyecto[];
  public listPromedios: PromedioProyecto[];
  listaFiltrada: PromedioProyecto[];
  verSeleccion: number;



  constructor(private tokenStorage: TokenStorageService, private router: Router, private promedioProyectoServices: PromedioProyectoService,
    private themeService: ThemeService, private proyectoServices: ProyectoService) { }

  ngOnInit(): void {
    this.proyectoServices.getProyectos().subscribe(
      data => {
        this.listProyectos = data;
        //console.log(this.listProyectos);
      })
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
        console.log(this.listPromedios);
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

  // public radarChartData: ChartDataSets[] = [
  //   {
  //     data: [5, 4, 3, 1, 2.5],
  //     label: this.nombre_proyecto,
  //     fill: true,
  //     radius: 5,
  //     borderColor: '#1493cc',
  //     backgroundColor: '#1492cc6c',
  //     pointBackgroundColor: '#1493cc'
  //   }
  // ];

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
  }


  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
