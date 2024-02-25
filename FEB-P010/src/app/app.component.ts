import { Component, OnInit } from '@angular/core';
import { VeiculoService } from './veiculos.service';
import { IAvioes, IBarcos, ICarros } from '../models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  caracteristica: string = ''
  modelo!: any
  carrinho: Array<(IAvioes | IBarcos | ICarros)> = []

  constructor(private vehicleService: VeiculoService) { }

  ngOnInit(): void {
    this.vehicleService.getCaracteristica().subscribe(caracteristica => this.caracteristica = caracteristica);
    this.vehicleService.getModelo().subscribe(modelo => this.modelo = modelo)
  }

  addVeiculo() {
    this.carrinho.push(this.modelo);
    this.vehicleService.setCarrinho(this.carrinho)
  }
}
