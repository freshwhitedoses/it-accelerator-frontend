import {Component, signal} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {UserService} from "../../core/services/user.service";
import {NotifierService} from "angular-notifier";
import {CopyContentService} from "../../core/services/copy-content.service";
import {formatDate} from "@angular/common";
import {SelectListService} from "../../core/services/select-list.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  constructor(private userService:UserService,
              private notifierService:NotifierService,
              private copier:CopyContentService,
              private selectListService: SelectListService) {
  }
  isOpenedForm = signal<boolean>(false);
  newPassword: FormControl = new FormControl('', Validators.required);
  currencyControl: FormControl = new FormControl<string>('RUB');
  user = this.userService.getAccount()

  doCopy(usernick: string) {
    this.copier.copyText(usernick);
    this.notifierService.notify('success', 'Скопировано!');
  }

  logout() {
    this.userService.logout();
    this.notifierService.notify('success', 'Вы успешно вышли из аккаунта!');

  }

  getRole(role: string | number): string {
    return this.selectListService.getRoleStr().find(r => r.value === role)?.text ?? ''
  }

  protected readonly formatDate = formatDate;
}
