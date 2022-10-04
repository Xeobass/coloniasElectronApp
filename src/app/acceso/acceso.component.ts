import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/models/usuario.model';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css']
})
export class AccesoComponent implements OnInit {
  user:Usuario=new Usuario();
  loginValid:boolean=true
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  estadoMenu:boolean=true;


  constructor(private loginService:LoginService,private _snackBar: MatSnackBar,private route:Router){}

  ngOnInit(): void {
  }

  

  acceder(user:Usuario){
    console.log("Accediendo con:",user);
    
    this.loginService.login(user.nombreUsuario!,user.passUsuario!).subscribe((respuesta:any)=>{
      console.log("Respuesta: ", respuesta);
      if(!respuesta){
        this._snackBar.open('Usuario o contraseña incorrecta', "Cerrar", {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration:5000
        });
      }else{
        console.log("accediendo a la aplicación!");
        this.route.navigate(['principal']);
      }



    });
  }
}
