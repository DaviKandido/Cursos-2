import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})

export class HomeComponent {
  name: any = "Davi";

  deveMostrarTitulo: boolean = true;

  // atualizaBooleano(valor: boolean) {
  //   this.meuBooleano = valor;
  // }

  submit(event: any) {
    console.log(event);
  }
}
