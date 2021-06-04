import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoDni } from '../Models/dni.model';

const url = 'https://localhost:44393/api/tipodni/';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
  providedIn: 'root'
})
export class TipoDniService {

  constructor(private http: HttpClient) { }

  getTipoDni(): Observable<TipoDni[]>{
    return this.http.get<TipoDni[]>(url, httpOptions);
 }
}
