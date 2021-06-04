import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TipoDni } from 'src/app/Models/dni.model';
import { Empleado } from 'src/app/Models/empleado.model';
import { Localidades } from 'src/app/Models/localidad.model';
import { Paises } from 'src/app/models/pais.model';
import { Provincias } from 'src/app/models/provincia.model';
import { TipoEmpleado } from 'src/app/Models/tipo-empleado.model';
import { LocalidadService } from 'src/app/services/localidad.service';
import { PaisService } from 'src/app/services/pais.service';
import { ProvinciasService } from 'src/app/services/provincia.service';
import { TipoDniService } from 'src/app/services/tipodni.service';
import { TipoEmpleadoServices } from 'src/app/services/tipo-empleado.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import swal from 'sweetalert2';
import { EmpleadosService } from 'src/app/services/empleados.service';
declare const validarExtension: any;

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

  formEmpleado = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(2), Validators.pattern(this.patterSoloLetras)]],
    apellido: ['', [Validators.required, Validators.minLength(2), Validators.pattern(this.patterSoloLetras)]],
    sexo: ['', [Validators.required]],
    idTipoDocumento: ['', [Validators.required]],
    numDni: ['', [Validators.required, Validators.minLength(7), Validators.pattern(this.patternSoloNum)]],
    fotoPerfil: [''],
    pais: ['', [Validators.required]],
    provincia: ['', [Validators.required]],
    fechaNacimiento: ['', [Validators.required]],
    localidad: ['', [Validators.required]],
    domicilio: ['', [Validators.required, Validators.minLength(5), Validators.pattern(this.patternDomicilio)]],
    telefono: ['', [Validators.required, Validators.minLength(7), Validators.pattern(this.patternTelefono)]],
    email: ['', [Validators.required, Validators.minLength(1), Validators.pattern(this.emailpattern)]],
    idTipoEmpleado: ['', [Validators.required]],
    usuario: ['', [Validators.required, Validators.minLength(5), Validators.pattern(this.patternUsuario)]],
    password: ['', [Validators.required, Validators.pattern(this.patternPassword), Validators.minLength(8)]],
    passwordRepeat: ['', [Validators.required, Validators.pattern(this.patternPassword), Validators.minLength(8)]]
  })

  public empleado: Empleado[];
  selectedEmpleado: Empleado = new Empleado();
  public tipoDni: TipoDni[];
  public tipoEmpleado: TipoEmpleado[];

  // Localidad, Provincia, Pais
  public localidades: Localidades[];
  public localidadesAux: Localidades[];
  public paises: Paises[];
  public provincias: Provincias[];
  public provinciasAux: Provincias[];
  selectedPais: Paises = { id: 0, nombre: '' };
  selectedProv: Provincias = { id: 0, nombre: '', id_pais: 0 };

  valorInputSelfie = '';
  fotoUsuario: any = "./assets/images/SubirFoto.png";

  message = '';
  isCreateFailed = false;
  passwordsDistintas = false;

  constructor(private fb: FormBuilder, private router: Router, private tipoEmpleadoService: TipoEmpleadoServices, private tipodniService: TipoDniService,
    private tokenStorage: TokenStorageService, private localidadServices: LocalidadService, private provinciaServices: ProvinciasService, private paisServices: PaisService,
    private empleadoServices: EmpleadosService) { }

  ngOnInit(): void {
    // if (this.tokenStorage.getToken) {
    //   this.router.navigate(['/home']);
    // }

    //obtenemos lista tipos de dni
    this.tipodniService.getTipoDni().subscribe(
      data => {
        this.tipoDni = data;
      }
    )

    this.tipoEmpleadoService.getTipoEmpleado().subscribe(
      data => {
        this.tipoEmpleado = data;
      }
    )

    this.paisServices.getPaises().subscribe(
      data => {
        this.paises = data;
      }
    )

    this.provinciaServices.getProvincias().subscribe(
      data => {
        this.provincias = data;
      }
    )

    this.localidadServices.getLocalidades().subscribe(
      data => {
        this.localidades = data;
      }
    )
  }

  //Metodo al enviar el fomulario
  public agregarEmpleado(empleado: Empleado) {

    if (this.formEmpleado.get('password').value === this.formEmpleado.get('passwordRepeat').value) {
      this.passwordsDistintas = false;

      //Nos suscribimos al servicio y traemos el metodo del backend
      this.empleadoServices.onCreateEmpleado(empleado).subscribe(
        data => {
          //this.tokenStorage.saveToken(data);

          if (data === 1) {
            this.message = 'El Dni ingresado ya existe';
            swal.fire('Oops...', this.message, 'error')
            this.isCreateFailed = true;
          }
          else if (data === 2) {
            this.message = 'El Email ingresado ya existe';
            swal.fire('Oops...', this.message, 'error')
            this.isCreateFailed = true;
          }
          else if (data === 3) {
            this.message = 'El Usuario ingresado ya existe';
            swal.fire('Oops...', this.message, 'error')
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

  //Metodos para cargar los select filtrados por el id del select seleccionado(Pais-->Provincia-->Localidad)

  onSelectPais(id: number): void {
    this.limpiarForm();
    this.localidadesAux = null;
    this.provinciasAux = null;
    this.provinciasAux = this.provincias.filter(item => item.id_pais == id);

  }

  onSelectProv(id: number): void {
    this.localidadesAux = this.localidades.filter(item => item.id_provincia == id);

  }

  //Metodo para limpiar select al cambiar el target
  limpiarForm() {
    this.formEmpleado.patchValue({
      provincia: '',
      localidad: ''
    });
  }

  //Metodo previsualizar fotos en el inicio
  onSelectedFile() {
    (async () => {

      const { value: file } = await swal.fire({
        title: 'Selecione la imagen',
        input: 'file',
        width: 600,
        imageWidth: 100,
        inputAttributes: {
          'accept': 'image/*',
          'aria-label': 'Upload your profile picture',
          'color': '#2098D1'
        }
      })

      if (file != null) {
        if (this.validarFoto(file['name'])) {

          const reader = new FileReader()
          reader.onload = (e) => {

            this.fotoUsuario = e.target.result;
            this.selectedEmpleado.FotoPerfil = this.fotoUsuario;
          }
          reader.readAsDataURL(file)
        } else {
          swal.fire('Formato invalido', 'Solo se permite imagenes .jpg y .png', 'warning');
        }
      } else {
        swal.fire('Campo Vacio', 'Seleccione un archivo', 'warning');
      }
    })()
  }

  //Metodo validar extension del archivo subido
  validarFoto(foto: any): boolean {
    let extPermitidas = /(.jpg|.png)$/i;

    if (!extPermitidas.exec(foto)) {
      return false;
    }
    else {
      return true;
    }
  }
}
