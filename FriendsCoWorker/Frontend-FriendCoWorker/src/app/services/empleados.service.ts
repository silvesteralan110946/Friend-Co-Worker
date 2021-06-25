import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Empleado } from '../Models/empleado.model';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const url = 'https://localhost:44393/api/Empleados/';
const urlNuevo = 'https://localhost:44393/api/nuevoEmpleado/';

const httpOptions =
{
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable
  (
    {
      providedIn: 'root'
    }
  )

export class EmpleadosService {
  list: Empleado[];
  idEmpleado: number;

  constructor(private http: HttpClient, private tokenService: TokenStorageService) { }

  // Crear empleado
  onCreateEmpleado(empleado: Empleado): Observable<any> {
    return this.http.post(urlNuevo, empleado, httpOptions);
  }

  // Traer empleados
  getEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(url, httpOptions);
  }

  // Traer empleados por ID
  getEmpleado(): Observable<any> {
    this.idEmpleado = this.tokenService.getIdEmpleado();
    return this.http.get<any>(url + this.idEmpleado, httpOptions);
  }
}
