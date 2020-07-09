import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {User} from "../model/user";

@Component({
  selector: 'app-reactive-user',
  templateUrl: './reactive-user.component.html',
  styleUrls: ['./reactive-user.component.css']
})
export class ReactiveUserComponent implements OnInit {
  user: User = new User();
  userForm = new FormGroup({
        'name': new FormControl('', Validators.required)});
  constructor() { }

  ngOnInit() {
  }
  OnSubmit() {
    console.log(this.userForm.value);
    this.user.name = this.userForm.value['name'];

  }
}
