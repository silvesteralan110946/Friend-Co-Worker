import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { EmpleadoXProyecto } from '../Models/empleado-proyecto.model';

const url = 'https://localhost:44393/api/empleadoProyecto/';

const httpOptions =
{
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmpleadoProyectoService {

  list: EmpleadoXProyecto[];
  legajo: number;
  id_proyecto: number;

  constructor(private http: HttpClient, private tokenService: TokenStorageService) { }

  // Crear proyecto
  onCreateProyectoEmpleado(proyecto: EmpleadoXProyecto): Observable<any> {
    return this.http.post(url, proyecto, httpOptions);
  }
}
