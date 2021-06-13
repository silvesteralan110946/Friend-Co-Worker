import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { ValoresEmpleadoInterface } from '../Models/valores-empleado.model';

const url = 'https://localhost:44393/api/ValoresEmpleado/';

const httpOptions =
{
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ValoresEmpleadoService {

  constructor(private http: HttpClient, private tokenService: TokenStorageService) { }

  // Agregar votacion
  onCreateValorarEmpleado(proyecto: ValoresEmpleadoInterface): Observable<any> {
    return this.http.post(url, proyecto, httpOptions);
  }
}
