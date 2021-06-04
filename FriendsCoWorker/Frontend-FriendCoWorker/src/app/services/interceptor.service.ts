import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TokenStorageService } from './token-storage.service';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private tokenStorage: TokenStorageService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const token : string = this.tokenStorage.getToken();
    let request = req;

    if(token) {
      request = req.clone({
        setHeaders:{
          autorization : `Bearer ${token}`
        }
      });
    }

    return next.handle(request).pipe(
      catchError((err:HttpErrorResponse) => {
        if(err.status === 401){
          this.router.navigateByUrl('/login');
        }
        return throwError(err);
      })
    );
  }
}
