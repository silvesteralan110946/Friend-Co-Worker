import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { PromedioProyecto } from '../Models/promedio-proyecto.model';

const url = 'https://localhost:44393/api/PromedioProyecto/';

const httpOptions =
{
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PromedioProyectoService {

  list: PromedioProyecto[];

  constructor(private http: HttpClient, private tokenService: TokenStorageService) { }

  // Traer proyectos
  getPromedios(): Observable<PromedioProyecto[]> {
    return this.http.get<PromedioProyecto[]>(url, httpOptions);
  }

  // Traer promedio por ID
  getPromedio(id_proyecto: number): Observable<any> {
    return this.http.get<any>(url + id_proyecto, httpOptions);
  }
}
