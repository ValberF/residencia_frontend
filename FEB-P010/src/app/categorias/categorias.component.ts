import { Component, OnInit } from '@angular/core';
import { IVeiculos, IAvioes, IBarcos, ICarros } from '../../models/models';
import { VeiculoService } from '../veiculos.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {
  veiculos: IVeiculos = {
    Avioes: [],
    Barcos: [],
    Carros: []
  }

  tipos: string[] = [];

  constructor(private vehicleService: VeiculoService) { }

  ngOnInit(): void {
    this.vehicleService.getVeiculos().subscribe(veiculo => this.veiculos = veiculo);
    this.tipos = Object.keys(this.veiculos);
  }

  handleClick(tipo: string) {
    this.vehicleService.setTipo(tipo)
    this.vehicleService.setModelos(this.obterValoresDinamicamente(tipo))
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