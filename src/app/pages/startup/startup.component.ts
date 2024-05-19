import {Component, Input, OnInit} from '@angular/core';
import {Startup} from "../../core/models/startup";
import {SelectListService} from "../../core/services/select-list.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.scss']
})
export class StartupComponent implements OnInit{
  @Input() startup: Startup;
  constructor(private service:SelectListService, private router:Router) {
  }
  readonly startupStatuses = this.service.getStartupStatuses()
  getStatus(status: number): string {
    return this.startupStatuses.find(i => i.value===status)?.text !
  }
  goToStartup(startup: Startup) {
    this.router.navigate(['startup', startup.startupId],  { state: { startup: startup} })

  }

  ngOnInit(): void {
    console.log()
  }

  editStartup(event: MouseEvent) {
    event.preventDefault();
    console.log('1212')
  }
}
