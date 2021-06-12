import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { ReporteEmpleados } from '../Models/reporte-empleados.model';

const url = 'https://localhost:44393/api/ReporteEmpleados/';

const httpOptions =
{
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ReporteEmpleadosService {

  list: ReporteEmpleados[];

  constructor(private http: HttpClient, private tokenService: TokenStorageService) { }

  // Traer empleados
  getReEmpleados(): Observable<ReporteEmpleados[]> {
    return this.http.get<ReporteEmpleados[]>(url, httpOptions);
  }
}
