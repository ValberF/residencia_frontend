import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss'
})

export class SearchResultsComponent {
  @Input() resultados: Array<any> = []
  @Input() termo: string = ""
}
