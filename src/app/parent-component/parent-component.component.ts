import {Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {ChildTwoComponentComponent} from "../child-two-component/child-two-component.component";

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit{
   message: string = 'Hi my child 1';
   messageCHild: string = '';
   msgChild2: string = '';
   @ViewChild(ChildTwoComponentComponent) child = new ChildTwoComponentComponent();

  constructor() { }

  ngOnInit() {
    this.msgChild2 = this.child.msgParent;
    console.log('hi');
  }

  RecvMessage($event) {
    this.messageCHild = $event;
  }
}
