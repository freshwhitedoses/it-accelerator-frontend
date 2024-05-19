import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {StartupService} from "../../core/services/startup.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {StartupsResponse} from "../../core/models/response";
import {InvestingStartup} from "../../core/models/startup";

@Component({
  selector: 'app-matches-investor',
  templateUrl: './matches-investor.component.html',
  styleUrls: ['./matches-investor.component.scss']
})
export class MatchesInvestorComponent {
  statuses: FormControl = new FormControl<any>('0');
  constructor(private startupService:StartupService, private router:Router) {
  }
  startups = this.startupService.getStartupsByMatchedInvestorId();

}
