import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "../model/todo";
import {Utilisateur} from "../model/utilisateur";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient: HttpClient) { }

  getUserlist() {
    return this.httpclient.get<Utilisateur[]>('https://jsonplaceholder.typicode.com/users');
  }
}
