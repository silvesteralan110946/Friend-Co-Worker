import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const url = 'https://localhost:44393/api/Reportes/';

const httpOptions =
{
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  idEmpleado: number;

  constructor(private http: HttpClient, private tokenService: TokenStorageService) { }

  // Traer cantidad de proyectos por ID
  getCantidadProyectos(): Observable<any> {
    this.idEmpleado = this.tokenService.getIdEmpleado();
    return this.http.get(url + 'cantidadProyectos/' + this.idEmpleado, httpOptions);
  }
}
