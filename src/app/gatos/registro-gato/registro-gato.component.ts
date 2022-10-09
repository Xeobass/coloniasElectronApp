import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import { ColoniasService } from 'src/app/services/colonias.service';
import { GatosService } from 'src/app/services/gatos.service';
import { MatDialog } from '@angular/material/dialog';
import { OkSaveDataComponent } from 'src/app/mensajes/dialogs/ok-save-data/ok-save-data.component';
import { AdoptanteService } from 'src/app/services/adoptante.service';
import { DniService } from 'src/app/services/dni.service';

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

  constructor(
    private _formBuilder: FormBuilder,
    private dateAdapter: DateAdapter<any>, 
    private coloniaService:ColoniasService,
    private gatoService:GatosService,
    private adoptanteService:AdoptanteService,
    private dniService:DniService,
    public dialog:MatDialog

    ) { }

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

    let gato={
      id_gato:null,
      nombre_gato:this.datosGatoForm.get("nombre_gato")?.value.toUpperCase(),
      tb_datos_gato_fk:1,
      tb_datos_adopt_fk:1,
      num_chip:this.datosGatoForm.get("num_chip")?.value,
      prote:sessionStorage.getItem("prote")
    };

    let auxColoniaSeleccionada = this.datosGatoForm.get("colonia_selector")?.value;
    let datosGato={
      id_datos_gato:null,
      fecha_nac:new Date(this.datosGatoForm.get("fecNac")?.value),
      fecha_def:null,
      tb_foto_ficha:1,
      tb_colonia_fk:auxColoniaSeleccionada.id_colonia
    };

    console.log("datos del gato: ",datosGato);



    if(this.datosGatoForm.get("adoptadoCheck")?.value){
      /*console.log("gato adoptado");
      let adoptante={
        nombre_adopt:this.datosGatoFormAdopt.get("nombre_adopt")?.value.toUpperCase(),
        apellido1:this.datosGatoFormAdopt.get("apellido1")?.value.toUpperCase(),
        apellido2:this.datosGatoFormAdopt.get("apellido2")?.value.toUpperCase(),
        direccion:this.datosGatoFormAdopt.get("direccion")?.value.toUpperCase(),
        provincia:this.datosGatoFormAdopt.get("provincia")?.value.toUpperCase(),
        codpos:this.datosGatoFormAdopt.get("codpos")?.value,
        email:this.datosGatoFormAdopt.get("email")?.value,
        telefono:this.datosGatoFormAdopt.get("telefono")?.value,
        dniFK:1,
        enAcogida:this.datosGatoFormAdopt.get("enAcogida")?.value
      };

      let dni={
        numDni:this.datosGatoFormAdoptDni.get("numDni")?.value.toUpperCase(),
        basicfilednifront:null,
        basicfiledniback:null
      };

      this.dniService.registraDni(dni).subscribe((reqDni:any)=>{
        console.log("dni registrado: ",reqDni);
        adoptante.dniFK=reqDni.id;

        this.adoptanteService.registraAdoptante(adoptante).subscribe((resAdoptante:any)=>{
          console.log("guardado adoptante: ",resAdoptante);
          gato.tb_datos_adopt_fk=resAdoptante.id;
  
          this.gatoService.registraGato(gato).subscribe((resp:any)=>{
            this.dialog.open(OkSaveDataComponent,{
              width: '25em'})
          });
        });
      });
*/
    }else{
      /*
      this.gatoService.registraGato(gato).subscribe((resp:any)=>{
        this.dialog.open(OkSaveDataComponent,{
          width: '25em'})
      });*/
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
