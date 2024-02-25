import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../veiculos.service';
import { IAvioes, IBarcos, ICarros } from '../../models/models';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.scss'
})
export class CarrinhoComponent implements OnInit {
  carrinho: Array<(IAvioes | IBarcos | ICarros)> = []

  constructor(private vehicleService: VeiculoService) { }

  ngOnInit(): void {
    this.vehicleService.getCarrinho().subscribe(carrinho => this.carrinho = carrinho);
  }
}
