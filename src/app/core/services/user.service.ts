import { Injectable } from '@angular/core';
import {BehaviorSubject, catchError, of} from "rxjs";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../enviroments/enviroment";
import {LoginUser, RegisterUser} from "../models/user";
import {
  CodeDto, InvestingStartupResponse,
  InvestingStartupsResponse,
  Response,
  SignupResponse,
  TeamResponse,
  TeamsResponse,
  UserResponse
} from "../models/response";
import {NotifierService} from "angular-notifier";
import {TeamFeedback, TeamRequest} from "../models/team";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  $user = new BehaviorSubject(null);

  constructor( private http: HttpClient,
               private router: Router,
               private notifierService:NotifierService) { }


  login(user: LoginUser) {
    return this.http.post<SignupResponse>(`${environment.api}/login`,
      user);
  }
  signup(user: RegisterUser) {
    return this.http.post<SignupResponse>(`${environment.api}/signup`, user)
  }
  logout() {
    sessionStorage.clear();
    void this.router.navigate(['/login']);
  }
  getAccount() {
    return this.http.get<UserResponse>(`${environment.api}/account`).pipe(
      catchError(() => {
        this.notifierService.notify('error', 'Произошла ошибка!');
        return of(null)
        }
      ));

  }

  sendCode(code: CodeDto) {
    return this.http.post<Response>(`${environment.api}/send_email`, code)
  }

  getTeamsByUser() {
    return this.http.get<TeamsResponse>(`${environment.api}/teams_by_user_id`).pipe(
      catchError(() => {
          this.notifierService.notify('error', 'Произошла ошибка!');
          return of(null)
        }
      ));
  }
  createTeam(team: TeamRequest) {
    return this.http.post<TeamResponse>(`${environment.api}/team`, team).pipe(
      catchError(() => {
          this.notifierService.notify('error', 'Произошла ошибка!');
          return of(null)
        }
      ));
  }
  sendTeamFeedback(teamFeedback: TeamFeedback) {
    return this.http.put<InvestingStartupResponse>(`${environment.api}/team/feedback`, teamFeedback).pipe(
      catchError(() => {
          this.notifierService.notify('error', 'Произошла ошибка!');
          return of(null)
        }
      ));
  }
}
