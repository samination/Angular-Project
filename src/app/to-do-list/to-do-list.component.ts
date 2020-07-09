import { Component, OnInit } from '@angular/core';
import {Todo} from '../model/todo';
import {CalculServiceService} from "../service/calcul-service.service";
import {TodoServiceService} from "../service/todo-service.service";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  listTodo: Todo[];
  sum: number = 0;
  constructor(private calculeApi: CalculServiceService, private apitodo: TodoServiceService ) {}

  ngOnInit() {
    /*this.listTodo = [
      {userId: 1, id: 1, title: 'delectus aut autem', completed: false},
      {userId: 1, id: 2, title: 'quis ut nam facilis et officia qui', completed: false},
      {userId: 1, id: 3, title: 'fugiat veniam minus', completed: false},
      {userId: 1, id: 4, title: 'quo adipisci enim quam ut ab', completed: true}];
  */
    this.apitodo.getTodolist().subscribe((data: Todo[]) => {
      this.listTodo = data;
    });
  }
  getNumber() {
    this.sum = this.calculeApi.getNumberOf(this.listTodo, 'completed', false);
  }

}
