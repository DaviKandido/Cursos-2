import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EnviaFormulario {

  constructor() { }

  enviaInfoBackEnd(info: String) {
    console.log(`enviado: ${info}`);
  }
}
