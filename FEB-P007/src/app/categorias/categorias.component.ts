import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IVeiculos, IAvioes, IBarcos, ICarros } from '../../models/models';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent {
  @Output() selectCategoria: EventEmitter<{ tipo: string, arrayValores: (IAvioes | IBarcos | ICarros)[] }> = new EventEmitter();

  @Input() veiculos: IVeiculos = {
    Avioes: [],
    Barcos: [],
    Carros: []
  };

  tipos: string[] = Object.keys(this.veiculos);
  arrayValores: (IAvioes | IBarcos | ICarros)[] = [];

  handleClick(tipo: string) {
    this.arrayValores = this.obterValoresDinamicamente(tipo);
    this.selectCategoria.emit({ tipo, arrayValores: this.arrayValores });
  }

  private obterValoresDinamicamente(chave: string): (IAvioes | IBarcos | ICarros)[] {
    switch (chave) {
      case 'Avioes':
        return this.veiculos.Avioes;
      case 'Barcos':
        return this.veiculos.Barcos;
      case 'Carros':
        return this.veiculos.Carros;
      default:
        return [];
    }
  }
}