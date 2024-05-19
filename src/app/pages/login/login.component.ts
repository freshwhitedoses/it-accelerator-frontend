import {Component, OnInit, signal} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../core/services/user.service";
import {Router} from "@angular/router";
import {take} from "rxjs";
import {MaskitoOptions} from "@maskito/core";
import {LoginUser} from "../../core/models/user";
import {NotifierService} from "angular-notifier";
import {CodeDto} from "../../core/models/response";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private notifierService: NotifierService,

  ) {
  }
  isSendCode = signal<boolean>(false)
  loginForm: FormGroup;
  loading = false;
  loginError = false;
  emailCode: FormControl = new FormControl('', Validators.required);
  readonly maskitoOptions: MaskitoOptions = {
    mask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
  };
  sendCode() {
    if(this.loginForm.valid) {
      this.isSendCode.set(true);
      let dto: CodeDto = {
        email: this.name.value,
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

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      name: ['', Validators.email],
      password: ['', Validators.required],
    })
  }

  submit() {
    if (this.loginForm.valid && this.emailCode.valid) {
      this.loading = true;
      let user: LoginUser = {
        email: this.name.value,
        password: this.password.value,
        code: +this.emailCode.value
      }
      this.userService.login(user).pipe(take(1)).subscribe({
        next: (r) => {
            this.loading = false;
            this.loginError = false;
          sessionStorage.setItem('token', r.data.accessToken);
            void this.router.navigate(
              ['/'],
            );
        },
        error: () => {
          this.loading = false;
          this.loginError = true;
        },
        complete: () => {
          this.loading = false;
        }})
    }
  }

}
