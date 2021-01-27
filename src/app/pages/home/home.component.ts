import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { registro } from 'src/app/models/registro';
import { ServicesService } from 'src/app/services/services.service';
import * as uuid from 'uuid';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  public texto: string;
  public textoNew: string;
  public alertaSucess: boolean = false;
  public alertaWrong: boolean = false;

  public modelo = new registro
  constructor(private services: ServicesService) {

    this.modelo.uuid = uuid.v4();
  }

  ngOnInit() {

  }
  crearRegistro() {
    this.services.crearRegistro(this.modelo).subscribe(data=>{
      console.log(data);
    },error=>{
      console.log(error);

    })
  }

}
