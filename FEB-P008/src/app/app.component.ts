import { Component } from '@angular/core';
import { WikiApiService } from './services/wiki-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FEB-P008';
  termo: string = ''
  resultados: Array<any> = []

  constructor(private wikiApiService: WikiApiService) { }

  onSetValorBusca(valor: string) {
    this.termo = valor
    this.wikiApiService.getWikiSearch(this.termo)
    this.resultados = this.wikiApiService.getResultado()
    console.log(this.resultados)
  }
}
