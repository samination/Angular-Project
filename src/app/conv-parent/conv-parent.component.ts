import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conv-parent',
  templateUrl: './conv-parent.component.html',
  styleUrls: ['./conv-parent.component.css']
})
export class ConvParentComponent implements OnInit {
  v: number;
  r;
  constructor() { }

  ngOnInit() {
  }
  RcvValue($event) {
    this.r = $event;
  }
}
