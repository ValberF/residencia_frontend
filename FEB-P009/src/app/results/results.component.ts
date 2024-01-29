import { Component, OnInit } from '@angular/core';
import axios from 'axios';

interface ISource {
  id: Number | null
  name: String
}

interface IResult {
  author: String
  content: String
  description: String
  publishedAt: String
  source: ISource
  title: String
  url: String
  urlToImage: String
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent implements OnInit {
  results: Array<IResult> = []

  ngOnInit() {
    this.logIt();
  }

  logIt() {
    axios.get("https://newsapi.org/v2/everything?q=technology&apiKey=67be9d1df077449ba24c6070e7804af8&language=pt").then((res) => {

      res.data.articles.forEach((element: IResult, index: Number) => {
        if (element.title === "[Removed]") {
          res.data.articles.splice(index, 1)
        }
      });

      return res.data;
    }).then((data) => {
      console.log(data.articles)
      this.results = [...data.articles.slice(0, 5)]
      console.log(this.results);
    })
  }
}
