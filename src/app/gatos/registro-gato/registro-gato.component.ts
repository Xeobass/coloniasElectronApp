import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import { ColoniasService } from 'src/app/services/colonias.service';
import { Colonias } from 'src/models/colonias.model';
import { GatosService } from 'src/app/services/gatos.service';

@Component({
  selector: 'app-registro-gato',
  templateUrl: './registro-gato.component.html',
  styleUrls: ['./registro-gato.component.css'],
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    {provide: MAT_DATE_LOCALE, useValue: 'es_ES'},

    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS}
  ]
})
export class RegistroGatoComponent implements OnInit {
  adoptadoModel=false;
  colonias:any=null;
  selectedColonia = [{id_colonia: 1,nombre_colonia: 'SIN COLONIA ESPECÍFICA',tb_id_protes: 0}];

  constructor(private _formBuilder: FormBuilder,private dateAdapter: DateAdapter<any>, private coloniaService:ColoniasService,private gatoService:GatosService) { }

  public datosGatoForm:FormGroup = this._formBuilder.group({
    nombre_gato:new FormControl(),
    fecNac:new FormControl(),
    colonia_selector:new FormControl(),
    num_chip:new FormControl(),
    basicfile:new FormControl(),
    adoptadoCheck:new FormControl(false)
  });

  public datosGatoFormAdopt:FormGroup = this._formBuilder.group({
    nombre_adopt:new FormControl(),
    apellido1:new FormControl(),
    apellido2:new FormControl(),
    direccion:new FormControl(),
    provincia:new FormControl(),
    codpos:new FormControl(),
    email:new FormControl(),
    telefono:new FormControl(),
    enAcogida:new FormControl()
  });

  public datosGatoFormAdoptDni:FormGroup = this._formBuilder.group({
    numDni:new FormControl(),
    basicfilednifront:new FormControl(),
    basicfiledniback:new FormControl()  
  });

  ngOnInit(): void {
    this.dateAdapter.setLocale('es');
    setTimeout(() => this.datosGatoFormAdopt.disable());
    setTimeout(() => this.datosGatoFormAdoptDni.disable());    
    this.coloniaService.obtenerColonias().subscribe((coloniasData:any)=>{
      this.colonias=coloniasData;
      this.selectedColonia = coloniasData[coloniasData.findIndex((col:any) => col.id_colonia==1)];
    });
  }

  guardarDatos(){
    console.log("Guardando datos!:", this.datosGatoForm);
    console.log("segundo formulario: ",this.datosGatoFormAdopt);
    console.log("tercero formulario: ",this.datosGatoFormAdoptDni);
    if(this.datosGatoForm.get("adoptadoCheck")?.value){
      console.log("gato adoptado");
    }else{
      let gato={
        id_gato:null,
        nombre_gato:this.datosGatoForm.get("nombre_gato")?.value.toUpperCase(),
        tb_datos_gato_fk:1,
        tb_datos_adopt_fk:1,
        num_chip:this.datosGatoForm.get("num_chip")?.value
      };

      console.log("Gato a guardar: ", gato);
      this.gatoService.registraGato(gato).subscribe((resp:any)=>{
        console.log("Gato guardado: ",resp);
      });
      console.log("Gato no adoptado");
    }
  }

  desbloquoForm(){
    console.log("desbloqueo");
    if(this.adoptadoModel){
      setTimeout(() => this.datosGatoFormAdopt.enable());
      setTimeout(() => this.datosGatoFormAdoptDni.enable());
    }else{
      setTimeout(() => this.datosGatoFormAdopt.disable());
      setTimeout(() => this.datosGatoFormAdoptDni.disable());
    }

  }
}
