import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { PromedioEmpleado } from '../Models/promedio-empleado.model';

const url = 'https://localhost:44393/api/PromedioEmpleado/';

const httpOptions =
{
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PromedioEmpleadoService {

  list: PromedioEmpleado[];

  constructor(private http: HttpClient) { }

  // Traer empleados
  getPromedios(): Observable<PromedioEmpleado[]> {
    return this.http.get<PromedioEmpleado[]>(url, httpOptions);
  }

  // Traer promedio por ID
  getPromedio(legajo: number): Observable<any> {
    return this.http.get<any>(url + legajo, httpOptions);
  }
}
