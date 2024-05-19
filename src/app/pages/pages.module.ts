import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatCardModule} from "@angular/material/card";
import {RouterModule} from "@angular/router";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";
import { AccountComponent } from './account/account.component';
import { HeaderComponent } from './header/header.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { FooterComponent } from './footer/footer.component';
import {MaskitoDirective} from "@maskito/angular";
import {NotifierModule, NotifierOptions} from "angular-notifier";
import { MyStartupsComponent } from './my-startups/my-startups.component';
import { MyTeamsComponent } from './my-teams/my-teams.component';
import { NewStartupComponent } from './new-startup/new-startup.component';
import { TeamComponent } from './team/team.component';
import {MatChipsModule} from "@angular/material/chips";
import { TeamItemComponent } from './team-item/team-item.component';
import { StartupItemComponent } from './startup-item/startup-item.component';
import { NewTeamComponent } from './new-team/new-team.component';
import { StartupComponent } from './startup/startup.component';
import { InvestorComponent } from './investor/investor.component';
import { StartupsInvestorComponent } from './startups-investor/startups-investor.component';
import { StartupModeratorComponent } from './startup-moderator/startup-moderator.component';
import { UniversalStartpComponent } from './universal-startp/universal-startp.component';
import { MatchesInvestorComponent } from './matches-investor/matches-investor.component';

const customNotifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'right',
      distance: 12
    },
    vertical: {
      position: 'top',
      distance: 12,
      gap: 10
    }
  },
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    MainComponent,
    AccountComponent,
    HeaderComponent,
    FooterComponent,
    MyStartupsComponent,
    MyTeamsComponent,
    NewStartupComponent,
    TeamComponent,
    TeamItemComponent,
    StartupItemComponent,
    NewTeamComponent,
    StartupComponent,
    InvestorComponent,
    StartupsInvestorComponent,
    StartupModeratorComponent,
    UniversalStartpComponent,
    MatchesInvestorComponent
  ],
  imports: [
    CommonModule,
    MaskitoDirective,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    RouterModule,
    MatDialogModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    NotifierModule.withConfig(customNotifierOptions),
    MatChipsModule,
  ]
})
export class PagesModule { }
