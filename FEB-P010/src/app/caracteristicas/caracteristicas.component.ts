import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../veiculos.service';
import { IAvioes, IBarcos, ICarros } from '../../models/models';

@Component({
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.component.html',
  styleUrl: './caracteristicas.component.scss'
})
export class CaracteristicasComponent implements OnInit {
  modelo!: any
  atributos!: Array<string>

  constructor(private vehicleService: VeiculoService) { }

  ngOnInit(): void {
    this.vehicleService.getModelo().subscribe(modelo => this.modelo = modelo);
    this.atributos = Object.keys(this.modelo)
  }

  handleClick(atributo: string) {
    this.vehicleService.setCaracteristica(this.modelo[atributo]);
  }
}
