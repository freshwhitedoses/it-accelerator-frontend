import {Component, OnInit} from '@angular/core';
import {StartupService} from "../../core/services/startup.service";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {StartupsResponse} from "../../core/models/response";
import {Startup} from "../../core/models/startup";
import {Router} from "@angular/router";

@Component({
  selector: 'app-startup-moderator',
  templateUrl: './startup-moderator.component.html',
  styleUrls: ['./startup-moderator.component.scss']
})
export class StartupModeratorComponent implements OnInit{
  constructor(private startupService:StartupService, private router:Router) {
  }
  startups: Observable<StartupsResponse | null>;
  statuses: FormControl = new FormControl<any>('0');
  ngOnInit(): void {
    // @ts-ignore
    this.startups = this.startupService.getStartupsForModerator(0);
    this.statuses.valueChanges.subscribe((res)=> {
      if(res === '0') {
        this.startups  = this.startupService.getStartupsForModerator(0);
      }
      if(res === '1') {
        this.startups  = this.startupService.getStartupsForModerator(1);
      }
      if(res === '2') {
        this.startups  = this.startupService.getStartupsForModerator(2);
      }
    })
  }

  goToStartup(startup: Startup) {
    this.router.navigate(['universal/startup', startup.startupId],  { state: { startup: startup, readonly: true, role: 'MODERATOR'} })
  }
}
