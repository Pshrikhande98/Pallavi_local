import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [ 
  {path : '', component : LandingComponent},
  {path : 'landing', component : LandingComponent },
  {path : 'login', component : LoginComponent},
  {path : 'SignUp', component : SignUpComponent},
  { path : 'student', loadChildren:()=>import ('./student/student.module').then(mod=>mod.StudentModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
