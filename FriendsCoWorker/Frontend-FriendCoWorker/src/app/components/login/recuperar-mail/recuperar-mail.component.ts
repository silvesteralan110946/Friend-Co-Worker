import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Recoverymail } from 'src/app/Models/recoverymail.model';
import { RecoverymailService } from 'src/app/services/recoverymail.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-recuperar-mail',
  templateUrl: './recuperar-mail.component.html',
  styleUrls: ['./recuperar-mail.component.css']
})
export class RecuperarMailComponent implements OnInit {

  public email: Recoverymail[];
  selectedEmail: Recoverymail = new Recoverymail();
  noExisteEmail = false;
  enviandoEmail = false;
  errorMessage = '';
  message = '';

  /*Validaciones del form*/
  emailpattern: any = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
  form = new FormGroup({
    emailValue: new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern(this.emailpattern)])
  })

  constructor(private recoveryMail: RecoverymailService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.enviandoEmail = true;
    this.message = 'Enviando Email...';

    this.recoveryMail.getEmail(this.selectedEmail).subscribe(
      data => {
        this.tokenStorage.saveEmail(data);
        this.noExisteEmail = false;
        this.router.navigate(['/recoverypassword']);
      },
      err => {
        this.errorMessage = "El Email no pertenece a nuestra cartera de clientes";
        this.noExisteEmail = true;
        this.enviandoEmail = false;
        this.onReset();
      }
    );
  }

  public regresarclick() {
    this.router.navigate(['/login']);
  }

  onReset(): void{
    this.form.reset();
  }

}
