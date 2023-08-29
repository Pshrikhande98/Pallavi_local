import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from './Common/shared/shared.module';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminsignupComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
