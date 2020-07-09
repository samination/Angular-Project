import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {User} from "../model/user";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
   defaultlgn: string = 'english';
   user: User = new User();
  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form: NgForm) {
  console.log(form.value);
  console.log(form.value['name']);
    console.log(form.controls['name']);
  }
}
