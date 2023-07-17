import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDemoComponent } from '../student/student-demo/student-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NumOnlyDirective } from '../student/num-only.directive';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

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
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule
 ],
 exports:[
  CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NumOnlyDirective,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule
 ]
})
export class SharedModule { }
