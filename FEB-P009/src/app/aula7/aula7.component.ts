import { Component, OnInit } from '@angular/core';
import { IVeiculos, IAvioes, IBarcos, ICarros } from '../../models/models';

@Component({
  selector: 'app-aula7',
  templateUrl: './aula7.component.html',
  styleUrl: './aula7.component.scss'
})
export class Aula7Component implements OnInit {
  title = 'FEB-P007';
  veiculos: IVeiculos = {
    Avioes: [],
    Barcos: [],
    Carros: []
  }

  veiculosAdicionados: Array<(IAvioes | IBarcos | ICarros)> = []

  tipo: String = ""
  arrayValores: (IAvioes | IBarcos | ICarros)[] = []
  modelo!: (IAvioes | IBarcos | ICarros)
  atributos!: Array<string>
  caracteristica!: string

  ngOnInit() {
    this.getVeiculos();
  }

  getVeiculos() {
    fetch('../../assets/veiculos.json')
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

  onSelectModelo(event: { modelo: IAvioes | IBarcos | ICarros } | undefined) {
    if (event) {
      this.modelo = event.modelo;
      this.atributos = Object.keys(this.modelo)
    }
  }

  onSelectCaracteristica(valor: any) {
    if (valor) {
      this.caracteristica = valor;
    }
  }

  addVeiculo() {
    this.veiculosAdicionados.push(this.modelo)
    console.log(this.veiculosAdicionados)
  }
}
