import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chart.js';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { ReportesService } from 'src/app/services/reportes.service';
import { TopProyectos } from 'src/app/Models/reporte-top.model';

@Component({
  selector: 'app-top-proyectos',
  templateUrl: './top-proyectos.component.html',
  styleUrls: ['./top-proyectos.component.css']
})
export class TopProyectosComponent implements OnInit {

  top1: string = '';
  top2: string = '';
  top3: string = '';
  promedio1: number = 0;
  promedio2: number = 0;
  promedio3: number = 0;
  validar: boolean = false;

  listTopProyectos: TopProyectos[];

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      xAxes: [{}], yAxes: [{
        display: true,
        ticks: {
          suggestedMin: 0,
          suggestedMax: 250,
        }
      }]
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['TOP PROYECTOS'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData = [
    {
      data: [this.promedio1],
      label: this.top1
    },
    {
      data: [this.promedio2],
      label: this.top2
    },
    {
      data: [this.promedio3],
      label: this.top3
    }
  ];

  constructor(private tokenStorage: TokenStorageService, private router: Router, private reporteServices: ReportesService) { }

  ngOnInit(): void {
    this.obtenerTop();
  }

  obtenerTop() {
    this.reporteServices.getTopProyectos().subscribe(
      data => {
        this.listTopProyectos = data;
        //console.log(this.listTopProyectos);
        for (let index = 0; index < this.listTopProyectos.length; index++) {
          if (index == 0) {
            this.top1 = this.listTopProyectos[index].nombre_proyecto;
            this.promedio1 = this.listTopProyectos[index].promedio;
            console.log(this.promedio1)
          } else if (index == 1) {
            this.top2 = this.listTopProyectos[index].nombre_proyecto;
            this.promedio2 = this.listTopProyectos[index].promedio;
            console.log(this.promedio2)
          } else if (index == 2) {
            this.top3 = this.listTopProyectos[index].nombre_proyecto;
            this.promedio3 = this.listTopProyectos[index].promedio;
            console.log(this.promedio3)
          }
        }
      }
    )
  }

  public charUpdate() {
    this.barChartData = [
      {
        data: [this.promedio1],
        label: this.top1
      },
      {
        data: [this.promedio2],
        label: this.top2
      },
      {
        data: [this.promedio3],
        label: this.top3
      }
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
