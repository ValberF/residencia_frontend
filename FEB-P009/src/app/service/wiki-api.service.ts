import { Injectable, OnInit } from '@angular/core';
import axios from "axios"

@Injectable({
  providedIn: 'root'
})
export class WikiApiService {
  resultado: Array<any> = []

  getWikiSearch(url: string) {
    axios.get(`https://pt.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${url}&origin=*`).then(res => {
      res.data.query.search.forEach((element: any) => {
        this.resultado.push(element)
      });
    })
  }

  getResultado() {
    this.resultado = []
    return this.resultado
  }
}
