import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/Models/proyecto.model';
import { ProyectoService } from 'src/app/services/proyecto.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent implements OnInit {

  //Modelo validacion campos
  private patterSoloLetras: any = /^[a-zA-Z ]*$/;

  formProyecto = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(2), Validators.pattern(this.patterSoloLetras)]],
    fechaCreacion: ['', [Validators.required]],
    fechaFin: ['', [Validators.required]],
    horas_trabajadas: ['', [Validators.required]],
    img_mockup: [''],
    FechaRealCreacion: ['', [Validators.required]],
    FechaRealFin: ['', [Validators.required]],
    Empresa: ['', [Validators.required]],
    Descripcion: ['', [Validators.required]]
  })

  public proyecto: Proyecto[];
  selectedProyecto: Proyecto = new Proyecto();

  imagen: any = "./assets/images/SubirFoto.png";

  constructor(private fb: FormBuilder, private router: Router, private proyectoServices: ProyectoService) { }

  ngOnInit(): void {
  }

  agregarProyecto(proyecto : Proyecto){
    //Nos suscribimos al servicio y traemos el metodo del backend
    this.proyectoServices.onCreateProyecto(proyecto).subscribe(
      data => {
        swal.fire('Enhorabuena', 'Proyecto creado exitosamente', 'success');
        this.router.navigate(['/proyecto']);
      })
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

            this.imagen = e.target.result;
            this.selectedProyecto.Imagen_mockup = this.imagen;
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
