import {Component, Input} from '@angular/core';
import {Startup} from "../../core/models/startup";
import {Team} from "../../core/models/team";
import {Router} from "@angular/router";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  constructor(private router: Router) {
  }
  @Input() team: Team;

  goToTeam(team: Team) {
    console.log('goToTeam');
    this.router.navigate(['team', team.teamId],  { state: { team: team} })

  }

  log() {
    console.log('log')
  }
}
