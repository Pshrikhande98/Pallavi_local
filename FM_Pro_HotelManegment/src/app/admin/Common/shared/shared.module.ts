import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { HttpClientModule} from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ToastrModule } from 'ngx-toastr';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatRadioModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    ToastrModule.forRoot(),
    MatDialogModule
  ],
  
  exports: [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatRadioModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule

  ]
})
export class SharedModule { }
