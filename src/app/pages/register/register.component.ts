import {Component, OnInit, signal} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { UserService} from "../../core/services/user.service";
import {Router} from "@angular/router";
import {take} from "rxjs";
import {MaskitoOptions} from "@maskito/core";
import {NotifierService} from "angular-notifier";
import {RegisterUser} from "../../core/models/user";
import {CodeDto} from "../../core/models/response";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private notifierService: NotifierService,
  ) {
  }
  emailCode: FormControl = new FormControl('', Validators.required);
  readonly maskitoOptions: MaskitoOptions = {
    mask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
  };
  isSendCodeReg = signal<boolean>(false);
  loginForm: FormGroup;
  loading = false;
  loginError = false;

  sendCode() {
    if(this.loginForm.valid) {
      this.isSendCodeReg.set(true);
      let dto: CodeDto = {
        email: this.email.value,
      }
      this.userService.sendCode(dto).subscribe({
        next: () => {
          this.notifierService.notify('success', 'Код отправлен на почту! Время ожидания может доходить до 10 минут');
        },
        error: () => {
          this.notifierService.notify('error', 'Произошла ошибка? Попробуйте еще раз!');
        },
      })
    }
  }
  get name(): any {
    return this.loginForm.get('name')
  };

  get password(): any {
    return this.loginForm.get('password')
  };
  get email(): any {
    return this.loginForm.get('email')
  };
  get surname(): any {
    return this.loginForm.get('surname')
  };
  get role(): any {
    return this.loginForm.get('role')
  };
  get telegramId(): any {
    return this.loginForm.get('telegramId')
  };
  get birthDate(): any {
    return this.loginForm.get('birthDate')
  };


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      birthDate: ['', Validators.required],
      surname: ['', Validators.required],
      telegramId: ['', Validators.required],
      role: ['1', Validators.required]
    })
  }

  submit() {
    if (this.loginForm.valid && this.emailCode.valid) {
      this.loading = true
      let user: RegisterUser = {
        name: this.name.value,
        password: this.password.value,
        email: this.email.value,
        birthDate: this.birthDate.value,
        surname: this.surname.value,
        telegramId: this.telegramId.value,
        role: +this.role.value,
        code: +this.emailCode.value
      }
      console.log(user)
      this.userService.signup(user).pipe(take(1)).subscribe({
        next: (r) => {
          this.loading = false;
          this.loginError = false;
          this.notifierService.notify('success', 'Добро пжаловать!');

          sessionStorage.setItem('token', r.data.accessToken);
          void this.router.navigate(
            ['/'],
          );
        },
        error: () => {
          this.notifierService.notify('error', 'Произошла ошибка!');
          this.loading = false;
          this.loginError = true;
        },
        complete: () => {
          this.loading = false;
        }})
    }
  }
}
