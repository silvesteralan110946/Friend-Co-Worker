import { Injectable } from '@angular/core';
import jwtDecode, * as JWT from 'jwt-decode';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const EMAIL_KEY = 'auth-email';
const ID_KEY = 'user_id';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public saveID(id): void {
    window.sessionStorage.removeItem(ID_KEY);
    window.sessionStorage.setItem(ID_KEY, JSON.stringify(id));
  }

  public getUser(): any {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
    //return jwtDecode(this.getToken())['unique_name'];
  }

  public getIdEmpleado(): any{
    return JSON.parse(sessionStorage.getItem(ID_KEY));
    // return jwtDecode(this.getToken())['user_id'];
  }

  public saveEmail(email): void {
    window.sessionStorage.removeItem(EMAIL_KEY);
    window.sessionStorage.setItem(EMAIL_KEY, JSON.stringify(email));
  }
  public getEmail(): any {
    return JSON.parse(sessionStorage.getItem(EMAIL_KEY));
  }

  public logOut(): void {
    window.sessionStorage.clear();
  }
}
