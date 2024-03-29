import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DniService {

  private REST_API_SERVER = "http://localhost:9876";
  constructor(private httpClient: HttpClient) { }

  registraDni(dni:any):any{
    return this.httpClient.post(`${this.REST_API_SERVER}/nuevodni`,dni);
  };
}
