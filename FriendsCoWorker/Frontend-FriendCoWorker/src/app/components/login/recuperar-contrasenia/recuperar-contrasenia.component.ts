import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Recoverypassword } from 'src/app/Models/recovery-password.model';
import { RecoverypasswordService } from 'src/app/services/recoverypassword.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recuperar-contrasenia',
  templateUrl: './recuperar-contrasenia.component.html',
  styleUrls: ['./recuperar-contrasenia.component.css']
})
export class RecuperarContraseniaComponent implements OnInit {

  passpattern: any = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])([^\s]){8,16}$/;

  form = this.fb.group({
    inputToken: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(40)]],
    inputPassword1: ['', [Validators.required, Validators.pattern(this.passpattern), Validators.minLength(8)]],
    inputPassword2: ['', [Validators.required, Validators.pattern(this.passpattern), Validators.minLength(8)]]
  })

  nombreEmail: string;
  public newpassword: Recoverypassword[];
  selectednewpassword: Recoverypassword = new Recoverypassword();
  tokenExpirado = false;
  passwordsDistintas = false;
  errorMessage = '';

  constructor(private recoverypassword: RecoverypasswordService, private tokenStorage: TokenStorageService,
    private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.nombreEmail = this.tokenStorage.getEmail();
    if (this.nombreEmail !== null) {

      this.selectednewpassword.email = this.nombreEmail;

    } else {
      this.router.navigate(['/login']);
    }
  }

  onSubmit(): void {

    if (this.form.get('inputPassword1').value === this.form.get('inputPassword2').value) {
      this.passwordsDistintas = false;

      this.recoverypassword.modificarPassword(this.selectednewpassword).subscribe(
        data => {

          Swal.fire('Enhorabuena', data, 'success');
          this.tokenExpirado = false;
          this.tokenStorage.logOut();
          this.router.navigate(['/login']);
        },
        err => {
          this.errorMessage = 'El token es invalido o ha expirado';
          this.tokenExpirado = true;
        }
      );
    } else {
      this.passwordsDistintas = true;
      this.errorMessage = 'Las Constraseñas no coinciden';

    }
  }

  public regresarclick() {
    // this.tokenStorage.logOut();
    this.router.navigate(['/login']);
  }

}
