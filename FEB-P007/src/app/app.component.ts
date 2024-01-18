import { Component, OnInit } from '@angular/core';
import { IVeiculos, IAvioes, IBarcos, ICarros } from '../models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'FEB-P007';
  veiculos: IVeiculos = {
    Avioes: [],
    Barcos: [],
    Carros: []
  }

  tipo: String = ""
  arrayValores: (IAvioes | IBarcos | ICarros)[] = [];

  ngOnInit() {
    this.getVeiculos();
  }

  getVeiculos() {
    fetch('../assets/veiculos.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Não foi possível obter o arquivo JSON');
        }
        return response.json();
      })
      .then(data => {
        this.veiculos = data;
      })
      .catch(error => {
        console.error('Erro ao obter o arquivo JSON:', error);
      });
  }

  onSelectCategoria(tipo: string, arrayValores: (IAvioes | IBarcos | ICarros)[]) {
    this.tipo = tipo
    this.arrayValores = arrayValores
  }
}
