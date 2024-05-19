import {Component, OnInit} from '@angular/core';
import {UserService} from "../../core/services/user.service";
import {map} from "rxjs";
import {SelectListOptions, SelectListService} from "../../core/services/select-list.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {StartupRequest} from "../../core/models/startup";
import {StartupService} from "../../core/services/startup.service";
import {NotifierService} from "angular-notifier";

@Component({
  selector: 'app-new-startup',
  templateUrl: './new-startup.component.html',
  styleUrls: ['./new-startup.component.scss']
})
export class NewStartupComponent implements OnInit{
  constructor(private notifierService:NotifierService,private userService:UserService, private startupService: StartupService, private location:Location, private selectListService:SelectListService,   private router:Router, private fb: FormBuilder,
  ) {
  }
  createStartup: FormGroup;
  readonly teams = this.userService.getTeamsByUser().pipe(
    map(item => item?.data.teams.map(team => {
      let t: SelectListOptions;
      t = {text: team.name, value: team.teamId}
      return t;
    }))
  )
  mainInMeOptions =this.selectListService.getMainInMeStatuses();
  mainInStartupOptions =this.selectListService.getMainInStartupStatuses();
  investmentTypeOptions =this.selectListService.getInvestmentType();
  maturityStageOptions =this.selectListService.getMaturityStage();

  ngOnInit(): void {
    this.createStartup = this.fb.group({
      name: ['', Validators.required],
      teamId: [null, Validators.required],
      target: ['', Validators.required],
      description: ['', Validators.required],
      investmentAmount: [null, Validators.required],
      investmentType: [null, Validators.required],
      mainInStartup: [null, Validators.required],
      mainInMe: [null, Validators.required],
      filesLink: ['', Validators.required],
      maturityStage: [null, Validators.required],
    })
  }
  get name(): any {
    return this.createStartup.get('name')
  };
  get teamId(): any {
    return this.createStartup.get('teamId')
  };
  get target(): any {
    return this.createStartup.get('target')
  };
  get description(): any {
    return this.createStartup.get('description')
  };
  get investmentAmount(): any {
    return this.createStartup.get('investmentAmount')
  };
  get investmentType(): any {
    return this.createStartup.get('investmentType')
  };
  get mainInStartup(): any {
    return this.createStartup.get('mainInStartup')
  };
  get mainInMe(): any {
    return this.createStartup.get('mainInMe')
  };
  get filesLink(): any {
    return this.createStartup.get('filesLink')
  };
  get maturityStage(): any {
    return this.createStartup.get('maturityStage')
  };


  goToNewPage() {
    this.router.navigate(['new/team'])
  }

  goBack() {
    this.createStartup.reset();
    this.location.back();
  }

  submit() {
    if (this.createStartup.valid) {
      let startup: StartupRequest = {
        teamId: this.teamId.value,
        name: this.name.value,
        target: this.target.value,
        description: this.description.value,
        investmentAmount: this.investmentAmount.value,
        investmentType: this.investmentType.value,
        mainInStartup: this.mainInStartup.value,
        mainInMe: this.mainInMe.value,
        filesLink: this.filesLink.value,
        maturityStage: this.maturityStage.value,
      }
      this.startupService.createStartup(startup).subscribe({
        next: (r) => {
          this.notifierService.notify('success', 'Стартап успешно добавлен!');
          this.location.back()
        },
        error: () => {
        }
      })
    }
  }
}
