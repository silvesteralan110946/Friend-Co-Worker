import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paises } from '../models/pais.model';

const url = 'https://localhost:44393/api/Pais/';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  list: Paises[];

  constructor(private http: HttpClient) { }

  getPaises(): Observable<Paises[]>{
    return this.http.get<Paises[]>(url, httpOptions);
 }
}
