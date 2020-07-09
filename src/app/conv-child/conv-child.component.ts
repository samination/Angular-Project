import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-conv-child',
  templateUrl: './conv-child.component.html',
  styleUrls: ['./conv-child.component.css']
})
export class ConvChildComponent implements OnInit, OnChanges {
  @Input() x: number;
  res;
  @Output() sendres = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.res = this.x * 3.14 ;
    this.sendres.emit(this.res);
  }

}
