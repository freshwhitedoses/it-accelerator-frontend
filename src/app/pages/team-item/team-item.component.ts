import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {Team} from "../../core/models/team";
import {StartupService} from "../../core/services/startup.service";
import {StartupsResponse} from "../../core/models/response";
import {Observable} from "rxjs";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-team-item',
  templateUrl: './team-item.component.html',
  styleUrls: ['./team-item.component.scss']
})
export class TeamItemComponent implements OnInit{
  constructor(private location: Location, private startupService:StartupService) {
  }
  team: Team;
  startupsRes: Observable<null | StartupsResponse>;
  statuses: FormControl = new FormControl<any>('0');
  ngOnInit(): void {
    // @ts-ignore
    this.team = this.location.getState().team;
    if(this.team) {
      this.startupsRes = this.startupService.getStartupsForTeam(this.team.teamId)
    }
    this.statuses.valueChanges.subscribe((res)=> {
      if(res === '0') {
        this.startupsRes  = this.startupService.getStartupsForTeam(this.team.teamId);
      }
      if(res === '1') {
        this.startupsRes  = this.startupService.getStartupsForTeamByStatus(this.team.teamId, 0);
      }
      if(res === '2') {
        this.startupsRes  = this.startupService.getStartupsForTeamByStatus(this.team.teamId, 1);
      }
      if(res === '3') {
        this.startupsRes  = this.startupService.getStartupsForTeamByStatus(this.team.teamId, 2);
      }
    })
  }

}
