import { Component, OnInit } from '@angular/core';
import {News} from "../model/news";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newslist: News[] = [{id: 1, author: 'Asma Mabrouk', content: 'good paper'},
    {id: 2, author: 'Amani Boubaker', content: 'good news'},
    {id: 3, author: 'Ahmed Nabulsi', content: 'Happy life'}];
  news = new News();
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log(this.route.snapshot.params);
    console.log(this.route.snapshot.params.id);
    this.getNews(this.route.snapshot.params.id);
  }
  getNews(id: number) {
   for(let i in this.newslist) {
     let currentNews = this.newslist[i];
     if (currentNews.id == id) {
       this.news = currentNews;
     }
   }
  }

}
