import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-any-component',
  templateUrl: './any-component.component.html',
  styleUrls: ['./any-component.component.css']
})
export class AnyComponentComponent implements OnInit {
  @Input() txt: string;
  constructor() { }

  ngOnInit() {
  }

}
