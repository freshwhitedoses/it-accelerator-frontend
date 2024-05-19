import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {AuthGuard} from "./core/guards/auth.guard";
import {RegisterComponent} from "./pages/register/register.component";
import {MainComponent} from "./pages/main/main.component";
import {AccountComponent} from "./pages/account/account.component";
import {MyStartupsComponent} from "./pages/my-startups/my-startups.component";
import {MyTeamsComponent} from "./pages/my-teams/my-teams.component";
import {NewStartupComponent} from "./pages/new-startup/new-startup.component";
import {TeamItemComponent} from "./pages/team-item/team-item.component";
import {NewTeamComponent} from "./pages/new-team/new-team.component";
import {StartupItemComponent} from "./pages/startup-item/startup-item.component";
import {StartupsInvestorComponent} from "./pages/startups-investor/startups-investor.component";
import {StartupModeratorComponent} from "./pages/startup-moderator/startup-moderator.component";
import {UniversalStartpComponent} from "./pages/universal-startp/universal-startp.component";
import {MatchesInvestorComponent} from "./pages/matches-investor/matches-investor.component";

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent,
    // canActivate: [AuthGuard]
  },
  {
    path:'register',
    component: RegisterComponent,
    // canActivate: [AuthGuard]
  },
  {
    path:'',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'my/startups',
        component: MyStartupsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'new/startup',
        component: NewStartupComponent,
        canActivate: [AuthGuard],
      },
      {
       path: 'team/:id',
        component: TeamItemComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'my/teams',
        component: MyTeamsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'account',
        component: AccountComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'new/team',
        component: NewTeamComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'startup/:id',
        component: StartupItemComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'startups/investor',
        component: StartupsInvestorComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'startups/moderator',
        component: StartupModeratorComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'universal/startup/:id',
        component: UniversalStartpComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'investor/matches',
        component: MatchesInvestorComponent,
        canActivate: [AuthGuard],
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
