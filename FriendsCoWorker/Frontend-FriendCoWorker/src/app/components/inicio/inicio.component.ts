import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EnvioMail } from 'src/app/Models/reporte-top.model';
import { ReportesService } from 'src/app/services/reportes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  formMail = this.fb.group({
    nombre: ['', [Validators.required]],
    telefono: ['', [Validators.required]],
    detalleMensajes: ['', [Validators.required]],
  })

  public envioMail: EnvioMail[];
  datosMail: EnvioMail = new EnvioMail();

  constructor(private reportes: ReportesService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  enviarMensaje(mail: EnvioMail){
    this.reportes.enviarMail(mail).subscribe(
      data =>{
        console.log(data);
        this.formMail.reset();
      }
    );
    Swal.fire('Enviando...', 'El mensaje fue enviado exitosamente', 'success');
    this.refresh();
  }

  refresh(): void {
    window.setTimeout(function(){location.reload()},1500)
  }
}
