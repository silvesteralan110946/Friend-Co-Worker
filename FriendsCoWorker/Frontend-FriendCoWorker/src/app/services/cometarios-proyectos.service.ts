import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { ComentarioProyectoInterface } from '../Models/cometario-proyecto.model';

const url = 'https://localhost:44393/api/ComentarioProyecto/';

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
}
