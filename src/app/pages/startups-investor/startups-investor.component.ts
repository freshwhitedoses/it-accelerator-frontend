import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {StartupsResponse} from "../../core/models/response";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StartupFilters} from "../../core/models/startup";
import {SelectListService} from "../../core/services/select-list.service";
import {StartupService} from "../../core/services/startup.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-startups-investor',
  templateUrl: './startups-investor.component.html',
  styleUrls: ['./startups-investor.component.scss']
})
export class StartupsInvestorComponent implements OnInit{
  startups: Observable<StartupsResponse | null>;
  createStartup: FormGroup;
  constructor(private fb:FormBuilder, private router:Router,private selectListService:SelectListService, private startupService:StartupService) {
  }
  goToStartup(startup: any) {
    this.router.navigate(['universal/startup', startup.startupId],  { state: { startup: startup, readonly: true, role: 'INVESTOR'} })

  }
  mainInMeOptions =this.selectListService.getMainInMeStatuses();
  mainInStartupOptions =this.selectListService.getMainInStartupStatuses();
  maturityStageOptions =this.selectListService.getMaturityStage();
  ngOnInit(): void {
    this.createStartup = this.fb.group({
      mainInStartup: [null],
      mainInMe: [null],
      maturityStage: [null]
    })
    this.startups = this.startupService.getStartupsForInvestor(this.createStartup.value);
    this.createStartup.valueChanges.subscribe((res) => {
      this.startups = this.startupService.getStartupsForInvestor(res);
    })

  }
}
