import { Component, OnInit } from '@angular/core';
import {Annonce} from "../model/annonce";
import {AnnoncesService} from "../service/annonces.service";
import {Todo} from "../model/todo";

@Component({
  selector: 'app-liste-annonces',
  templateUrl: './liste-annonces.component.html',
  styleUrls: ['./liste-annonces.component.css']
})
export class ListeAnnoncesComponent implements OnInit {
  listAnnonces: Annonce[];
  constructor(private apiAnnonce: AnnoncesService) { }

  ngOnInit() {
    this.apiAnnonce.getAnnonces().subscribe((data: Annonce[]) => {
      this.listAnnonces = data;
    });
  }

}
