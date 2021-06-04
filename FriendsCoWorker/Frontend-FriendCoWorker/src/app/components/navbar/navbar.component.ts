import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/Models/empleado.model';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  nombreUsuario: string;
  selfie: string;
  fotoUsuario: string;
  nombre: string;
  public empleados: Empleado[];
  selectedEmpleado: Empleado = new Empleado();
  idEmpleado: number;


  constructor(private tokenStorage: TokenStorageService, private router: Router, private empleadosService: EmpleadosService) { }

  ngOnInit(): void {
    this.idEmpleado = this.tokenStorage.getIdEmpleado();
    //console.log(this.idEmpleado);

    this.empleadosService.getEmpleado().subscribe(
      data => {
        this.nombre = data.Nombre + " " + data.Apellido;
        this.fotoUsuario = data.FotoPerfil;
        //console.log(data);
      }
    )
  }

  logout(): void {
    this.tokenStorage.logOut();
    this.router.navigate(['/login']);
  }
}
