import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {Utilisateur} from "../model/utilisateur";
import {Todo} from "../model/todo";
import {CalculServiceService} from "../service/calcul-service.service";

@Component({
  selector: 'app-users-api',
  templateUrl: './users-api.component.html',
  styleUrls: ['./users-api.component.css']
})
export class UsersApiComponent implements OnInit {
  listUsers: Utilisateur[];
  userinput: string;
  sumUsers: number = 0;
  constructor(private userApi: UserService, private calculService: CalculServiceService) { }

  ngOnInit() {
    this.userApi.getUserlist().subscribe((data: Utilisateur[]) => {
      this.listUsers = data;
    });
  }
 verify(){
    this.sumUsers=this.calculService.getNumberOf(this.listUsers,'username', this.userinput);
 }
}
