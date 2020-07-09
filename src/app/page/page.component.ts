import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../model/articlex";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
 @Input() listArticles: Article[] = [];
 @Input() nbrArticlesChild: number;
  constructor() { }

  ngOnInit() {
  }

}
