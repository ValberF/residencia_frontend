import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.component.html',
  styleUrl: './caracteristicas.component.scss'
})
export class CaracteristicasComponent {
  @Output() selectCaracteristica: EventEmitter<any> = new EventEmitter();

  @Input() modelo!: any
  @Input() atributos!: Array<string>

  handleClick(atributo: string) {
    this.selectCaracteristica.emit(this.modelo[atributo]);
  }
}
