import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = this.fb.group({
    inputUsuario: ['', [Validators.required, Validators.minLength(1)]],
    inputPassword: ['', [Validators.required, Validators.minLength(1)]]
  })

  usuario: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  nombreEmail: string;

  constructor(private fb: FormBuilder, private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.router.navigate(['/inicio']);
    }
  }

  onSubmit(): void {
    this.authService.login(this.usuario).subscribe(
      data => {
        this.tokenStorage.saveToken(data);

        var decoded = jwtDecode(data);
        this.tokenStorage.saveUser(decoded['unique_name']);
        this.tokenStorage.saveID(decoded['user_id']);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.router.navigate(['/inicio']);
      },
      err => {
        Swal.fire('Oops...', "¡Usuario y/o password invalidos!" , 'error')
        this.isLoginFailed = true;
      }
    );
  }

  resetAlert(){
    this.isLoginFailed = false;
  }
}
