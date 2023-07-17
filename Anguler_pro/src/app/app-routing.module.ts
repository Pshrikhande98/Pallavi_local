import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DirectivesInAngulerComponent } from './directives-in-anguler/directives-in-anguler.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ApiCallsComponent } from './api-calls/api-calls.component';
import { Subject1Component } from './subject1/subject1.component';
import { Subject2Component } from './subject2/subject2.component';
import { Subject3Component } from './subject3/subject3.component';

const routes: Routes = [ 
  {path : '', component : LandingComponent},
  {path : 'landing', component : LandingComponent },
  {path : 'login', component : LoginComponent},
  {path : 'SignUp', component : SignUpComponent},
  {path : 'directives', component : DirectivesInAngulerComponent},
  {path : 'parent', component : ParentComponent},
  {path : 'child', component : ChildComponent},
  {path : 'ApiCalls', component : ApiCallsComponent},
  {path : 'Subject1', component: Subject1Component},
  {path : 'Subject2', component: Subject2Component},
  {path : 'Subject3', component: Subject3Component},
  { path : 'student', loadChildren:()=>import ('./student/student.module').then(mod=>mod.StudentModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
