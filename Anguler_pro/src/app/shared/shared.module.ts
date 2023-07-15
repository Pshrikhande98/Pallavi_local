import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDemoComponent } from '../student/student-demo/student-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NumOnlyDirective } from '../student/num-only.directive';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    StudentDemoComponent,
    NumOnlyDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule
 ],
 exports:[
  CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NumOnlyDirective,
    MatButtonModule
 ]
})
export class SharedModule { }
