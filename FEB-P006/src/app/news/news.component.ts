import { Component, OnInit } from '@angular/core';
import axios from 'axios';

interface ISource {
  id: Number | null
  name: String
}

interface INews {
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
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent implements OnInit {
  news: Array<INews> = []

  ngOnInit() {
    this.logIt();
  }

  logIt() {
    axios.get("https://newsapi.org/v2/everything?q=science&apiKey=67be9d1df077449ba24c6070e7804af8&language=pt").then((res) => {

      res.data.articles.forEach((element: INews, index: Number) => {
        if (element.title === "[Removed]") {
          res.data.articles.splice(index, 1)
        }
      });

      return res.data;
    }).then((data) => {
      console.log(data.articles)
      this.news = [...data.articles.slice(0, 5)]
      console.log(this.news);
    })
  }
}
