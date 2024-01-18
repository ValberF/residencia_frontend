import { Component, Input } from '@angular/core';
import { IVeiculos, IAvioes, IBarcos, ICarros } from '../../models/models';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrl: './modelos.component.scss'
})
export class ModelosComponent {
  @Input() tipo!: String
  @Input() arrayValores!: (IAvioes | IBarcos | ICarros)[]

  handleClick(index: number) {
    console.log(this.arrayValores[index])
  }
}
