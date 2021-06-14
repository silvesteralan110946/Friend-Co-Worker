import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { ComentarioEmpleadoInterface } from '../Models/comentario-empleado.model';
import { ReComentarioEmpleado } from '../Models/recomentario-empleado.model';

const url = 'https://localhost:44393/api/ComentarioEmpleado/';
const urlReport = 'https://localhost:44393/api/ReComentarioEmpleado/';
const httpOptions =
{
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CometariosEmpleadosService {

  constructor(private http: HttpClient, private tokenService: TokenStorageService) { }

  // Agregar comentario
  onCreateCometarioEmpleado(empleado: ComentarioEmpleadoInterface): Observable<any> {
    return this.http.post(url, empleado, httpOptions);
  }

  // Traer comentarios
  getComentariosEmpleados(): Observable<ReComentarioEmpleado[]> {
    return this.http.get<ReComentarioEmpleado[]>(urlReport, httpOptions);
  }

  // Traer comentarios por ID
  getComentariosEmpleado(legajo: number): Observable<ReComentarioEmpleado[]> {
    return this.http.get<ReComentarioEmpleado[]>(urlReport + legajo, httpOptions);
  }
}
