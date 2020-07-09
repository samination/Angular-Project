import { Component, OnInit } from '@angular/core';
import {News} from "../model/news";

@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.css']
})
export class NewslistComponent implements OnInit {
  newslist: News[] = [{id: 1, author: 'Asma Mabrouk', content: 'good paper'},
    {id: 2, author: 'Amani Boubaker', content: 'good news'},
    {id: 3, author: 'Ahmed Nabulsi', content: 'Happy life'}];
  constructor() { }

  ngOnInit() {
  }

}
