import { Component } from '@angular/core';
import { Usuario } from 'src/models/usuario.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'colonias-app';
  user:Usuario=new Usuario("nombre","1234");
  loginValid:boolean=true


  acceder(user:Usuario){
    console.log("Accediendo con:",user);
  }
}
