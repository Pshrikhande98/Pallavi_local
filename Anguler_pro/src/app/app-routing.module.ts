import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DirectivesInAngulerComponent } from './directives-in-anguler/directives-in-anguler.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ApiCallsComponent } from './api-calls/api-calls.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [ 
  {path : '', component : LandingComponent},
  {path : 'landing', component : LandingComponent },
  {path : 'login', component : LoginComponent},
  {path : 'SignUp', component : SignUpComponent},
  {path : 'directives', component : DirectivesInAngulerComponent},
  {path : 'parent', component : ParentComponent},
  {path : 'child', component : ChildComponent},
  {path : 'ApiCalls', component : ApiCallsComponent},
  {path : 'form' , component : FormComponent},
  { path : 'student', loadChildren:()=>import ('./student/student.module').then(mod=>mod.StudentModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
