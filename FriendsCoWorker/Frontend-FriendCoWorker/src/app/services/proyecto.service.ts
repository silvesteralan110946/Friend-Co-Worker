import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { Proyecto } from '../Models/proyecto.model';

const url = 'https://localhost:44393/api/proyecto/';

const httpOptions =
{
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  list: Proyecto[];

  constructor(private http: HttpClient, private tokenService: TokenStorageService) { }

  // Crear proyecto
  onCreateProyecto(proyecto: Proyecto): Observable<any> {
    return this.http.post(url, proyecto, httpOptions);
  }

  // Traer proyectos
  getProyectos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(url, httpOptions);
  }
}
