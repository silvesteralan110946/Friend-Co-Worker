import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Empleado } from '../Models/empleado.model';
import { Observable } from 'rxjs';

const url = /*'https://localhost:44386/api/cliente/'*/'';

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

export class EmpleadoService {
  list: Empleado[];
  idEmpleado: number;

  constructor(private http: HttpClient) { }

  onCreateEmpleado(empleado: Empleado): Observable<any> {
    return this.http.post(url, empleado, httpOptions);
  }
}
