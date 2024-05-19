import {Component, Input, OnInit} from '@angular/core';
import {Startup} from "../../core/models/startup";
import {Location} from "@angular/common";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {InvestingStartupsResponse, StartupsResponse} from "../../core/models/response";
import {StartupService} from "../../core/services/startup.service";

@Component({
  selector: 'app-startup-item',
  templateUrl: './startup-item.component.html',
  styleUrls: ['./startup-item.component.scss']
})
export class StartupItemComponent implements OnInit{
  startup: Startup;
  constructor(private location:Location, private startupService:StartupService) {
  }
  statuses: FormControl = new FormControl<any>('0');
  startupsRes: Observable<null | InvestingStartupsResponse>;

  ngOnInit(): void {
    // @ts-ignore
    this.startup = this.location.getState().startup;
    if(this.startup) {
      this.startupsRes = this.startupService.getStartupForTeamByInvestorsFeedback(this.startup.startupId, 0)
    }
    this.statuses.valueChanges.subscribe((res)=> {
      if(res === '0') {
        this.startupsRes  = this.startupService.getStartupForTeamByInvestorsFeedback(this.startup.startupId, 0);
      }
      if(res === '1') {
        this.startupsRes  = this.startupService.getStartupForTeamByInvestorsFeedback(this.startup.startupId, 1);
      }
      if(res === '2') {
        this.startupsRes  = this.startupService.getStartupForTeamByInvestorsFeedback(this.startup.startupId, 2);
      }
    })
  }

}
