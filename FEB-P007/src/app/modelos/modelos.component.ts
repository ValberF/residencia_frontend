import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAvioes, IBarcos, ICarros } from '../../models/models';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrl: './modelos.component.scss'
})
export class ModelosComponent {
  @Input() tipo!: String
  @Input() arrayValores!: (IAvioes | IBarcos | ICarros)[]
  @Output() selectModelo: EventEmitter<{ modelo: IAvioes | IBarcos | ICarros } | undefined> = new EventEmitter();

  handleClick(index: number) {
    this.selectModelo.emit({ modelo: this.arrayValores[index] });
  }
}
