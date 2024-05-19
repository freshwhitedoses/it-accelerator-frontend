import {Component, Input} from '@angular/core';
import {InvestingStartup} from "../../core/models/startup";
import {UserService} from "../../core/services/user.service";
import {StartupService} from "../../core/services/startup.service";
import {Location} from "@angular/common";
import {FormBuilder} from "@angular/forms";
import {NotifierService} from "angular-notifier";
import {SelectListService} from "../../core/services/select-list.service";
import {TeamFeedback} from "../../core/models/team";

@Component({
  selector: 'app-investor',
  templateUrl: './investor.component.html',
  styleUrls: ['./investor.component.scss']
})
export class InvestorComponent {
@Input() investorStartup: InvestingStartup;
@Input() role: string
  constructor(private userService:UserService, private startupService:StartupService, private location:Location, private fb: FormBuilder, private notifierService:NotifierService, private selectListService:SelectListService) {
  }

  sendFeedback(number: number, investingStartupId: string) {
  let teamFeedback:TeamFeedback = {
    status: number,
    investingStartupId: investingStartupId
  }
    this.userService.sendTeamFeedback(teamFeedback).subscribe({
      next: (r) => {
        this.notifierService.notify('success', 'Обратная связь успешно отправлена!');
      },
      error: () => {
      }
    })
  }
}
