import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-two-component',
  templateUrl: './child-two-component.component.html',
  styleUrls: ['./child-two-component.component.css']
})
export class ChildTwoComponentComponent implements OnInit {
  msgParent: string = 'Hi im your second child';
  constructor() { }

  ngOnInit() {
  }

}
