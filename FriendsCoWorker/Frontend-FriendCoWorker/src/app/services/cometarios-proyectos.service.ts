import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { ComentarioProyectoInterface } from '../Models/cometario-proyecto.model';
import { ReComentarioProyecto } from '../Models/recomentario-proyecto.model';

const url = 'https://localhost:44393/api/ComentarioProyecto/';
const urlReport = 'https://localhost:44393/api/ReComentarioProyecto/';
const httpOptions =
{
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CometariosProyectosService {

  constructor(private http: HttpClient, private tokenService: TokenStorageService) { }

  // Agregar comentario
  onCreateCometarioProyecto(proyecto: ComentarioProyectoInterface): Observable<any> {
    return this.http.post(url, proyecto, httpOptions);
  }

  // Traer comentarios
  getComentariosProyectos(): Observable<ReComentarioProyecto[]> {
    return this.http.get<ReComentarioProyecto[]>(urlReport, httpOptions);
  }

  // Traer comentarios por ID
  getComentariosProyecto(id_proyecto: number): Observable<ReComentarioProyecto[]> {
    return this.http.get<ReComentarioProyecto[]>(urlReport + id_proyecto, httpOptions);
  }
}
