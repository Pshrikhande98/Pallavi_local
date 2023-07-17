import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DirectivesInAngulerComponent } from './directives-in-anguler/directives-in-anguler.component';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SharedModule } from './shared/shared.module';
import { ApiCallsComponent } from './api-calls/api-calls.component';
import { CharOnlyDirective } from './char-only.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Subject1Component } from './subject1/subject1.component';
import { Subject2Component } from './subject2/subject2.component';
import { Subject3Component } from './subject3/subject3.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    SignUpComponent,
    DirectivesInAngulerComponent,
    ParentComponent,
    ChildComponent,
    ApiCallsComponent,
    CharOnlyDirective,
    Subject1Component,
    Subject2Component,
    Subject3Component,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //FormsModule,
    //ReactiveFormsModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

