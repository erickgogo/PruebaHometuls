import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-algoritmo',
  templateUrl: './algoritmo.component.html',
  styleUrls: ['./algoritmo.component.scss']
})
export class AlgoritmoComponent implements OnInit {
  public texto: string;
  public textoNew : string;
  public alertaSucess : boolean = false;
  public alertaWrong : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  validarTexto() {
    //console.log(this.texto);
    this.textoNew = this.texto;
    var re = /0/gi;
    this.textoNew = this.textoNew.replace(re, "o");
    this.textoNew = this.textoNew.replace("()", "o");
    this.textoNew = this.textoNew.replace("()", "o");
    this.textoNew = this.textoNew.replace("<>", "o");
    this.textoNew = this.textoNew.replace("<>", "o");
    this.textoNew = this.textoNew.replace("[]", "o");
    this.textoNew = this.textoNew.replace("[]", "o");
    this.textoNew = this.textoNew.replace("3", "e");
    this.textoNew = this.textoNew.replace("3", "e");
    let textNew = this.textoNew.toLowerCase()
    if (textNew == "google") {
      console.log("true");
      this.alertaSucess=true;
      this.alertaWrong=false;
    }
    else {
      console.log("false")
      this.alertaSucess=false;
      this.alertaWrong=true;
    }
  }
}
