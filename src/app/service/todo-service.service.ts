import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "../model/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor(private httpclient: HttpClient) { }

  getTodolist() {
    return this.httpclient.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
