import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { ReEmpleadoProyecto } from '../Models/ReEmpProyecto.model';
import { EnvioMail, TopEmpleados, TopProyectos } from '../Models/reporte-top.model';

const url = 'https://localhost:44393/api/Reportes/';

const httpOptions =
{
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  nombre: string;
  telefono: string;
  detalleMensaje: string;
  list: EnvioMail[];

  idEmpleado: number;
  id_proyecto: number;

  constructor(private http: HttpClient, private tokenService: TokenStorageService) { }

  // Traer cantidad de proyectos por ID
  getCantidadProyectos(): Observable<any> {
    this.idEmpleado = this.tokenService.getIdEmpleado();
    return this.http.get(url + 'cantidadProyectos/' + this.idEmpleado, httpOptions);
  }

  // Traer empleados por proyecto
  getEmpleadosXProyectos(id_proyecto: number): Observable<ReEmpleadoProyecto[]> {
    return this.http.get<ReEmpleadoProyecto[]>(url + 'EmpleadosProyecto/' + id_proyecto, httpOptions);
  }

  // Top Proyectos
  getTopProyectos(): Observable<TopProyectos[]> {
    return this.http.get<TopProyectos[]>(url + 'TopProyectos/', httpOptions);
  }

  // Top Empleados
  getTopEmpleados(): Observable<TopEmpleados[]> {
    return this.http.get<TopEmpleados[]>(url + 'TopEmpleados/', httpOptions);
  }

  // Enviar Mail
  enviarMail(envioMail: EnvioMail): Observable<any> {
    return this.http.post(url + 'EnvioMail/', envioMail, httpOptions);
  }
}
