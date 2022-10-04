import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Gesti&oacute;n Colonias Canguesas';
  estadoMenu:boolean=false;
  constructor(private route:Router){}
  mostrarMenu:boolean = false;
  ngOnInit(){
    this.route.navigate(['acceso']);
  }
}
