import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  @Output() setValorBusca: EventEmitter<string> = new EventEmitter()
  valor: string = ''

  setValor() {
    this.setValorBusca.emit(this.valor)
  }
}
