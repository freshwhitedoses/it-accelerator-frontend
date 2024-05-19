import { Component } from '@angular/core';
import {UserService} from "../../core/services/user.service";

@Component({
  selector: 'app-my-startups',
  templateUrl: './my-startups.component.html',
  styleUrls: ['./my-startups.component.scss']
})
export class MyStartupsComponent {
  constructor(private userService:UserService) {

  }
  teamsResponse = this.userService.getTeamsByUser();
}
