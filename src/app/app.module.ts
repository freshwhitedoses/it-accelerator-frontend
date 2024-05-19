import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpTokenInterceptor} from "./core/interceptors/http.token.interceptor";
import {AuthGuard} from "./core/guards/auth.guard";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PagesModule} from "./pages/pages.module";
import {NotifierModule} from "angular-notifier";
import {CopyContentService} from "./core/services/copy-content.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    PagesModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NotifierModule,

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true},
    AuthGuard,
    CopyContentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
