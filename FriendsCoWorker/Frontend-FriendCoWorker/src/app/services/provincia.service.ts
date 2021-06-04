import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';
import { Provincias } from '../models/provincia.model';

const url = 'https://localhost:44393/api/Provincia/';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
  providedIn: 'root'
})
export class ProvinciasService {
  list: Provincias[];

  constructor(private http: HttpClient) { }

  getProvincias(): Observable<Provincias[]>{
    return this.http.get<Provincias[]>(url, httpOptions);
 }
}
