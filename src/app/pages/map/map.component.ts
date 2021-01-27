import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  title = 'My first AGM project';
  lat = 4.60971 ;
  lng = -74.08175;
  public coordenadas : any;
  constructor(private service: ServicesService) { }
  ngOnInit(): void {
    console.log("Entra a mapa");
    this.ObtenerInfo();
  }
ObtenerInfo(){
  this.service.obtenerDatos().subscribe(data=>{
    console.log(data);
    this.coordenadas=data;

  },error=>{
    console.log(error);

  })
}
}
