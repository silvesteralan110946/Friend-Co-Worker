import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { ValoresProyectoInterface } from '../Models/valores-proyecto.model';

const url = 'https://localhost:44393/api/ValoresProyecto/';

const httpOptions =
{
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ValorarProyectoService {

  constructor(private http: HttpClient, private tokenService: TokenStorageService) { }

  // Agregar votacion
  onCreateValorarProyecto(proyecto: ValoresProyectoInterface): Observable<any> {
    return this.http.post(url, proyecto, httpOptions);
  }

  // Modificar votacion
  ModificarValorarProyecto(proyecto: ValoresProyectoInterface): Observable<any> {
    return this.http.put(url, proyecto, httpOptions);
  }
}
