import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  @Input() rcvMessage:string;
  @Output() msgEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  sendMessage() {
    this.msgEvent.emit('I received your message dad');
  }
}
