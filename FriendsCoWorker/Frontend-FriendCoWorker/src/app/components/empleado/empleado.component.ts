import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TipoDni } from 'src/app/Models/dni.model';
import { Empleado } from 'src/app/Models/empleado.model';
import { EmpleadoService } from 'src/app/services/empleado.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  //Modelo validacion campos
  private patterSoloLetras: any = /^[a-zA-Z ]*$/;
  private patternUsuario: any = /^(?=.*[a-zA-Z]{1,})(?=.*[\d]{0,})[a-zA-Z0-9]{5,}$/;
  private emailpattern: any = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
  private patternPassword: any = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])([^\s]){8,16}$/;
  private patternSoloNum: any = /^[0-9]{7,}$/;
  private patternTelefono: any = /^[0-9]{10,10}$/;
  private patternDomicilio: any = /^[A-Za-z0-9\s]{5,50}$/;

  form = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(2), Validators.pattern(this.patterSoloLetras)]],
    apellido: ['', [Validators.required, Validators.minLength(2), Validators.pattern(this.patterSoloLetras)]],
    sexo: ['', [Validators.required]],
    idTipoDocumento: ['', [Validators.required]],
    numDni: ['', [Validators.required, Validators.minLength(7), Validators.pattern(this.patternSoloNum)]],
    fotoPerfil: ['', [Validators.required]],
    fechaNacimiento: ['', [Validators.required]],
    localidad: ['', [Validators.required]],
    domicilio: ['', [Validators.required, Validators.minLength(5), Validators.pattern(this.patternDomicilio)]],
    elefono: ['', [Validators.required, Validators.minLength(7), Validators.pattern(this.patternTelefono)]],
    email: ['', [Validators.required, Validators.minLength(1), Validators.pattern(this.emailpattern)]],
    idTipoEmpleado: ['', [Validators.required]],
    usuario: ['', [Validators.required, Validators.minLength(5), Validators.pattern(this.patternUsuario)]],
    password: ['', [Validators.required, Validators.pattern(this.patternPassword), Validators.minLength(8)]],
    passwordRepeat: ['', [Validators.required, Validators.pattern(this.patternPassword), Validators.minLength(8)]]
  })

  public empleado: Empleado[];
  selectedEmpleado: Empleado = new Empleado();
  public tipoDni: TipoDni[];

  message = '';
  isCreateFailed = false;
  passwordsDistintas = false;

  constructor(private fb: FormBuilder, private router: Router, private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
  }

  public regresarclick() {
    this.router.navigate(['/login']);
  }

  //Metodo al enviar el fomulario
  public onSubmit(empleado: Empleado) {

    if (this.form.get('password').value === this.form.get('passwordRepeat').value) {
      this.passwordsDistintas = false;

      //Nos suscribimos al servicio y traemos el metodo del backend
      this.empleadoService.onCreateEmpleado(empleado).subscribe(
        data => {
          //this.tokenStorage.saveToken(data);

          if (data === 1) {
            this.message = 'El Dni ingresado ya existe';
            this.isCreateFailed = true;
          }
          else if (data === 2) {
            this.message = 'El Email ingresado ya existe';
            this.isCreateFailed = true;
          }
          else if (data === 3) {
            this.message = 'El Usuario ingresado ya existe';
            this.isCreateFailed = true;
          }
          else if (data === 0) {
            swal.fire('Enhorabuena', 'Empleado registrado exitosamente', 'success');
            this.isCreateFailed = false;
            //this.clientes.push(data);
            this.router.navigate(['/login']);
          }
        });
    } else {
      this.passwordsDistintas = true;
      this.message = "Las constraseñas no coinciden";
    }
  }

}
