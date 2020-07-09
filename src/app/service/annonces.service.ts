import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Annonce} from "../model/annonce";

@Injectable({
  providedIn: 'root'
})
export class AnnoncesService {

  constructor(private httpClient: HttpClient) { }
  getAnnonces() {
    return this.httpClient.get<Annonce[]>('./assets/annonces.json');
  }
}
