import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";
import {AnalystFeedback, InvestorFeedback, Startup, StartupFilters, StartupRequest} from "../models/startup";
import {environment} from "../../../enviroments/enviroment";
import {
  InvestingStartupResponse,
  InvestingStartupsResponse,
  Response,
  StartupResponse,
  StartupsResponse,
  TeamsResponse
} from "../models/response";
import {catchError, of} from "rxjs";
import {TeamFeedback} from "../models/team";

@Injectable({
  providedIn: 'root'
})
export class StartupService {

  constructor(private http: HttpClient,
              private router: Router,
              private notifierService:NotifierService) { }

  createStartup(startup: StartupRequest) {
    return this.http.post<StartupResponse>(`${environment.api}/startup`, startup).pipe(
      catchError(() => {
          this.notifierService.notify('error', 'Произошла ошибка!');
          return of(null)
        }
      ));
  }

  editStartup(startup: Startup) {
    return this.http.put<StartupResponse>(`${environment.api}/startup`, startup).pipe(
      catchError(() => {
          this.notifierService.notify('error', 'Произошла ошибка!');
          return of(null)
        }
      ));
  }
  deleteStartup(id: string) {
    let q = new HttpParams().append('id', id);
    return this.http.delete<Response>(`${environment.api}/startup`, {params: q}).pipe(
      catchError(() => {
          this.notifierService.notify('error', 'Произошла ошибка!');
          return of(null)
        }
      ));
  }
  sendFeedbackFromAnalyst(feedback: AnalystFeedback) {
    return this.http.put<StartupResponse>(`${environment.api}/analyst/feedback`, feedback).pipe(
      catchError(() => {
          this.notifierService.notify('error', 'Произошла ошибка!');
          return of(null)
        }
      ));
  }
  sendFeedbackFromInvestor(feedback: InvestorFeedback) {
    return this.http.post<InvestingStartupResponse>(`${environment.api}/investor/feedback`, feedback).pipe(
      catchError(() => {
          this.notifierService.notify('error', 'Произошла ошибка!');
          return of(null)
        }
      ));
  }
  getStartupsForInvestor( filters: StartupFilters) {
    let q = new HttpParams();
    if(filters.mainInStartup) q = q.append('mainInStartup', filters.mainInStartup);
    if(filters.mainInMe) q = q.append('mainInMe', filters.mainInMe);
    if(filters.maturityStage) q= q.append('maturityStage', filters.maturityStage)
    return this.http.get<StartupsResponse>(`${environment.api}/startups/investor`, {params: q}).pipe(
      catchError(() => {
          this.notifierService.notify('error', 'Произошла ошибка!');
          return of(null)
        }
      ));
  }
  getStartupsForModerator( status: number) {
    let q = new HttpParams().append('status', status);
    return this.http.get<StartupsResponse>(`${environment.api}/startups/moderator`, {params: q}).pipe(
      catchError(() => {
          this.notifierService.notify('error', 'Произошла ошибка!');
          return of(null)
        }
      ));
  }
  getStartupsForTeam( teamId: string) {
    let q = new HttpParams().append('teamId', teamId);
    return this.http.get<StartupsResponse>(`${environment.api}/startups/team`, {params: q}).pipe(
      catchError(() => {
          this.notifierService.notify('error', 'Произошла ошибка!');
          return of(null)
        }
      ));
  }
  getStartupsForTeamByStatus( teamId: string, status: number) {
    let q = new HttpParams().append('teamId', teamId);
    q = q.append('status', status);
    return this.http.get<StartupsResponse>(`${environment.api}/startups/team/by_status`, {params: q}).pipe(
      catchError(() => {
          this.notifierService.notify('error', 'Произошла ошибка!');
          return of(null)
        }
      ));
  }
  getStartupsByMatchedInvestorId() {
    return this.http.get<InvestingStartupsResponse>(`${environment.api}/startups/match`).pipe(
      catchError(() => {
          this.notifierService.notify('error', 'Произошла ошибка!');
          return of(null)
        }
      ));
  }
  getStartupForTeamByInvestorsFeedback(startupId: string, status: number) {
    let q = new HttpParams().append('startupId', startupId);
    q = q.append('teamStatus', status);
    return this.http.get<InvestingStartupsResponse>(`${environment.api}/startups/team/by_investor`, {params: q}).pipe(
      catchError(() => {
          this.notifierService.notify('error', 'Произошла ошибка!');
          return of(null)
        }
      ));
  }

}
