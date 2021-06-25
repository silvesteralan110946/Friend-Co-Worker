import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { TopEmpleados } from 'src/app/Models/reporte-top.model';
import * as pluginDataLabels from 'chart.js';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';
import { ReportesService } from 'src/app/services/reportes.service';

@Component({
  selector: 'app-top-empleados',
  templateUrl: './top-empleados.component.html',
  styleUrls: ['./top-empleados.component.css']
})
export class TopEmpleadosComponent implements OnInit {

  top1: string = '';
  top2: string = '';
  top3: string = '';
  top4: string = '';
  top5: string = '';
  promedio1: number = 0;
  promedio2: number = 0;
  promedio3: number = 0;
  promedio4: number = 0;
  promedio5: number = 0;
  validar: boolean = false;

  listTopEmpleados: TopEmpleados[];

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      xAxes: [{
        ticks: {
          fontSize: 17
        }
      }], yAxes: [{
        display: true,
        ticks: {
          suggestedMin: 0,
          suggestedMax: 250,
          fontSize: 15
        }
      }]
    },
    legend: {
      display: true,
      labels: {
        fontSize:15,
      }
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end'
      },
    }
  };
  public barChartLabels: Label[] = ['TOP EMPLEADOS MÁS VOTADOS'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData = [
    { data: [this.promedio1], label: this.top1 },
    { data: [this.promedio2], label: this.top2 },
    { data: [this.promedio3], label: this.top3 },
    { data: [this.promedio4], label: this.top4 },
    { data: [this.promedio5], label: this.top5 }
  ];

  constructor(private tokenStorage: TokenStorageService, private router: Router, private reporteServices: ReportesService) { }

  ngOnInit(): void {
    this.obtenerTop();
  }

  obtenerTop() {
    this.reporteServices.getTopEmpleados().subscribe(
      data => {
        this.listTopEmpleados = data;
        //console.log(this.listTopProyectos);
        for (let index = 0; index < this.listTopEmpleados.length; index++) {
          if (index == 0) {
            this.top1 = this.listTopEmpleados[index].nombre_empleado;
            this.promedio1 = this.listTopEmpleados[index].promedio;
          } else if (index == 1) {
            this.top2 = this.listTopEmpleados[index].nombre_empleado;
            this.promedio2 = this.listTopEmpleados[index].promedio;
          } else if (index == 2) {
            this.top3 = this.listTopEmpleados[index].nombre_empleado;
            this.promedio3 = this.listTopEmpleados[index].promedio;
          } else if (index == 3) {
            this.top4 = this.listTopEmpleados[index].nombre_empleado;
            this.promedio4 = this.listTopEmpleados[index].promedio;
          } else if (index == 4) {
            this.top5 = this.listTopEmpleados[index].nombre_empleado;
            this.promedio5 = this.listTopEmpleados[index].promedio;
          }
        }
      }
    )
  }

  public charUpdate() {
    this.barChartData = [
      { data: [this.promedio1], label: '1° ' + this.top1 },
      { data: [this.promedio2], label: '2° ' + this.top2 },
      { data: [this.promedio3], label: '3° ' + this.top3 },
      { data: [this.promedio4], label: '4° ' + this.top4 },
      { data: [this.promedio5], label: '5° ' + this.top5 }
    ];
    this.validar = true;
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
