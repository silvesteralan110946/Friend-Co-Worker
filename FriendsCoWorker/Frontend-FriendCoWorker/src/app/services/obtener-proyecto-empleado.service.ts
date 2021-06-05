import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { ProyectosEmpleado } from '../Models/obtener-empleado-proyecto.model';

const url = 'https://localhost:44393/api/proyecto-x-empleado/';

const httpOptions =
{
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ObtenerProyectoEmpleadoService {

  list: ProyectosEmpleado[];
  idEmpleado: number;


  constructor(private http: HttpClient, private tokenService: TokenStorageService) { }

  // Traer empleados
  getProyectosEmpleados(): Observable<ProyectosEmpleado[]> {
    return this.http.get<ProyectosEmpleado[]>(url, httpOptions);
  }

  // Traer empleados por ID
  getProyectosEmpleado(): Observable<ProyectosEmpleado[]> {
    this.idEmpleado = this.tokenService.getIdEmpleado();
    return this.http.get<ProyectosEmpleado[]>(url + this.idEmpleado, httpOptions);
  }

  deleteProyecto(legajo: number, id_proyecto: number): Observable<any>{
    return this.http.post<ProyectosEmpleado[]>(url + legajo + "/"+ id_proyecto + "/", httpOptions);
  }
}
