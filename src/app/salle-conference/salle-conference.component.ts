import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Salle} from "../model/salle";

@Component({
  selector: 'app-salle-conference',
  templateUrl: './salle-conference.component.html',
  styleUrls: ['./salle-conference.component.css']
})
export class SalleConferenceComponent implements OnInit {
  salles = [
    {id:1,nom:'éléctro mecanique', capacite:30, description: "jjdsjsdjg"},
    {id:2,nom:'Genie civile', capacite:50, description: "jjdsjsdjg"},
    {id:3,nom:'IOT', capacite:100, description: "jjdsjsdjg"},
    {id:4,nom:'Informatique mecanique', capacite:10, description: "jjdsjsdjg"},
    {id:5,nom:'BI', capacite:50, description: "jjdsjsdjg"},
  ]
  salle:Salle=new Salle();
  getSalle(id:number){
    for (let s in this.salles) {
      let salleCourante=this.salles[s];
      if (salleCourante.id==id){
        this.salle=salleCourante;
        console.log(salleCourante);
      }
    }
    //return this.salles.indexOf()
  }
  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit() {

    this.getSalle(this.route.snapshot.params['id']);
    console.log(this.route);
  }

}
