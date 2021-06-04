import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Localidades } from '../Models/localidad.model';

const url = 'https://localhost:44393/api/Localidad/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class LocalidadService {

  list: Localidades[];
  constructor(private http: HttpClient) { }

  getLocalidades(): Observable<Localidades[]> {
    return this.http.get<Localidades[]>(url, httpOptions);
  }
}
