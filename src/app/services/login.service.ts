import { Injectable, NgModule } from '@angular/core';
import { HttpClient,HttpClientModule,HttpHeaders } from '@angular/common/http';
//import { Estaticas } from 'src/models/estaticas.model';

@Injectable({
  providedIn: 'root'
})


export class LoginService {

  //REST_API_SERVER:Estaticas=new Estaticas();
  private REST_API_SERVER = "http://localhost:9876";
  constructor(private httpClient: HttpClient) { }

  //peticion con los datos del usuario
  login(usr:string,pss:string){
    console.log("Se envía a: ", this.REST_API_SERVER);
    return this.httpClient.get(`${this.REST_API_SERVER}/login?nombre_usuario=${usr}&pass_usuario=${pss}`);
}
}
