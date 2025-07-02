import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { EnviaFormulario } from '../../services/envia-formulario';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})

export class HomeComponent {
  private enviaFormulario = inject(EnviaFormulario)

  name: any = "Davi";
  deveMostrarTitulo: boolean = true;

  listItem: string[] = [
    'Item 1',
    'Item 2',
    'Item 3'
  ];

  // atualizaBooleano(valor: boolean) {
  //   this.meuBooleano = valor;
  // }
  submit(event: any) {
    this.emitindoValorName.emit(this.name);
    this.enviaFormulario.enviaInfoBackEnd(event.target.value);
  }

  @Input() minhaPropsDeFora!: string;

  @Input("OutraForma") teste!: string;

  @Output() emitindoValorName = new EventEmitter<string>();

}
