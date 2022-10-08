import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Colonias } from 'src/models/colonias.model';

@Injectable({
  providedIn: 'root'
})
export class ColoniasService {
  private REST_API_SERVER = "http://localhost:9876";
  constructor(private httpClient: HttpClient) { }

  obtenerColonias(){
    return this.httpClient.get(`${this.REST_API_SERVER}/colonias`);
}
}
