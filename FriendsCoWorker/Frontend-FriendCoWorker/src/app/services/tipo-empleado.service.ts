import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoEmpleado } from '../Models/tipo-empleado.model';

const url = 'https://localhost:44393/api/TipoEmpleado/';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
  providedIn: 'root'
})
export class TipoEmpleadoServices {

  constructor(private http: HttpClient) { }

  getTipoEmpleado(): Observable<TipoEmpleado[]>{
    return this.http.get<TipoEmpleado[]>(url, httpOptions);
 }
}
