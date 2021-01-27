import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { registro } from '../models/registro';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private url = environment.url;
  private header;
  constructor(private http: HttpClient) {
    this.header= new HttpHeaders().set('Content-Type','application/json');
  }
  obtenerDatos() {
    return this.http.get(this.url+"recordController/getAllRecords");
  }
  crearRegistro(registro:registro) {
    let path = this.url + "recordController/createRecord";
    console.log(registro);

    return this.http.post<string>(path, registro, this.header);
  }
}
