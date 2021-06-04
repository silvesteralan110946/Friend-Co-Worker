import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { Login } from '../Models/login.model';

const AUTH_API = 'https://localhost:44393/api/login/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private tokenStorage:TokenStorageService) { }

  public login(usuario:Login) : Observable<any>{
    return this.http.post(AUTH_API + 'authenticate',usuario, httpOptions);
  }

  public estaAutenticado() : boolean{
    if (this.tokenStorage.getToken() != null && this.tokenStorage.getUser() != null ){
      return true;
    }else{
      return false;
    }
  }
}
