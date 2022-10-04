import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  constructor() { }
  mostrarMenu:boolean = true;;
  ngOnInit(): void {
  }

  fichaGato(){
    console.log("Ficha de gato!");
  }

}