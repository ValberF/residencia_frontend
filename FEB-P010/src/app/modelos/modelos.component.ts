import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../veiculos.service';
import { IAvioes, IBarcos, ICarros } from '../../models/models';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrl: './modelos.component.scss'
})
export class ModelosComponent implements OnInit {
  modelos!: (IAvioes | IBarcos | ICarros)[]
  tipo: string = ''

  constructor(private vehicleService: VeiculoService) { }

  ngOnInit(): void {
    this.vehicleService.getTipo().subscribe(tipo => this.tipo = tipo);
    this.vehicleService.getModelos().subscribe(modelos => this.modelos = modelos);
  }

  handleClick(modelo: (IAvioes | IBarcos | ICarros)) {
    this.vehicleService.setModelo(modelo);
  }
}
