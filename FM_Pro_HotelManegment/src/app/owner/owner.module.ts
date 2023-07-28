import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnersignupComponent } from './ownersignup/ownersignup.component';
import { SharedModule } from '../admin/Common/shared/shared.module';
import { OwnersuccessComponent } from './ownersuccess/ownersuccess.component';
import { NewhotelregistrationComponent } from './newhotelregistration/newhotelregistration.component';


@NgModule({
  declarations: [
    OwnersignupComponent,
    OwnersuccessComponent,
    NewhotelregistrationComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule
  ]
})
export class OwnerModule { }
