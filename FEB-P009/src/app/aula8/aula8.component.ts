import { Component } from '@angular/core';
import { WikiApiService } from '../service/wiki-api.service';

@Component({
  selector: 'app-aula8',
  templateUrl: './aula8.component.html',
  styleUrl: './aula8.component.scss'
})
export class Aula8Component {
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