import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estimation-cout',
  templateUrl: './estimation-cout.component.html',
  styleUrls: ['./estimation-cout.component.css']
})
export class EstimationCoutComponent implements OnInit {
  position: string;
  nbr: number;
  count: number = 0;
  constructor() { }

  ngOnInit() {
  }
  estimer(){
    if (this.position == 'haut'){
      if (this.nbr <= 30) {
        this.count = 10;
      }
      else {
        this.count = 20;
      }
    }
    if (this.position == 'bas'){
      if (this.nbr <= 30) {
        this.count = 5;
      }
      else {
        this.count = 15;
      }
    }
  }

}
