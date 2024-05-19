import { Component } from '@angular/core';
import {UserService} from "../../core/services/user.service";

@Component({
  selector: 'app-my-teams',
  templateUrl: './my-teams.component.html',
  styleUrls: ['./my-teams.component.scss']
})
export class MyTeamsComponent {
  constructor(private userService:UserService) {

  }
  teamsResponse = this.userService.getTeamsByUser();
}
