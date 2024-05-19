import {Component, OnInit} from '@angular/core';
import {UserService} from "../../core/services/user.service";
import {Location} from "@angular/common";
import {AnalystFeedback, InvestorFeedback, Startup} from "../../core/models/startup";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {map} from "rxjs";
import {SelectListOptions, SelectListService} from "../../core/services/select-list.service";
import {NotifierService} from "angular-notifier";
import {StartupService} from "../../core/services/startup.service";

@Component({
  selector: 'app-universal-startp',
  templateUrl: './universal-startp.component.html',
  styleUrls: ['./universal-startp.component.scss']
})
export class UniversalStartpComponent implements OnInit{
  constructor(private userService:UserService, private startupService:StartupService, private location:Location, private fb: FormBuilder, private notifierService:NotifierService, private selectListService:SelectListService) {
  }
  startup: Startup;
  readonly: boolean = true;
  role: string;
  formStartup: FormGroup;
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
  commentAnalyst: FormControl = new FormControl<any>('', Validators.required);
  ngOnInit(): void {
    // @ts-ignore
    this.startup = this.location.getState().startup;
    // @ts-ignore
    this.readonly = this.location.getState().readonly;
    // @ts-ignore
    this.role = this.location.getState().role;


    this.formStartup = this.fb.group({
      name: [this.startup.name, Validators.required,],
      teamId: [this.startup.teamId, Validators.required],
      target: [this.startup.target, Validators.required],
      description: [this.startup.description, Validators.required],
      investmentAmount: [this.startup.investmentAmount, Validators.required],
      investmentType: [this.startup.investmentType, Validators.required],
      mainInStartup: [this.startup.mainInStartup, Validators.required],
      mainInMe: [this.startup.mainInMe, Validators.required],
      filesLink: [this.startup.filesLink, Validators.required],
      maturityStage: [this.startup.maturityStage, Validators.required],
    })
  }
  get name(): any {
    return this.formStartup.get('name')
  };
  get teamId(): any {
    return this.formStartup.get('teamId')
  };
  get target(): any {
    return this.formStartup.get('target')
  };
  get description(): any {
    return this.formStartup.get('description')
  };
  get investmentAmount(): any {
    return this.formStartup.get('investmentAmount')
  };
  get investmentType(): any {
    return this.formStartup.get('investmentType')
  };
  get mainInStartup(): any {
    return this.formStartup.get('mainInStartup')
  };
  get mainInMe(): any {
    return this.formStartup.get('mainInMe')
  };
  get filesLink(): any {
    return this.formStartup.get('filesLink')
  };
  get maturityStage(): any {
    return this.formStartup.get('maturityStage')
  };

  goBack() {
    this.location.back()
  }

  statusControl: FormControl = new FormControl('1', Validators.required);
  investorStatusControl: FormControl = new FormControl('1', Validators.required);

  saveAnalystFeedback() {
    if(this.statusControl.valid && this.commentAnalyst.valid) {
      let feed: AnalystFeedback = {
        status: +this.statusControl.value,
        analystComment: this.commentAnalyst.value,
        startupId: this.startup.startupId
      };
      this.startupService.sendFeedbackFromAnalyst(feed).subscribe({
        next: (r) => {
          this.notifierService.notify('success', 'Валидация прошла успешно!');
          this.location.back()
        },
        error: () => {
        }
      })
    }
  }

  saveInvestorFeedback() {
    if (this.investorStatusControl.valid) {
      let feed: InvestorFeedback = {
        status: +this.investorStatusControl.value,
        startupId: this.startup.startupId
      };
      this.startupService.sendFeedbackFromInvestor(feed).subscribe({
        next: (r) => {
          this.notifierService.notify('success', 'Обратная связь успешно отправлена!');
          this.location.back()
        },
        error: () => {
        }
      })
    }
  }
}
