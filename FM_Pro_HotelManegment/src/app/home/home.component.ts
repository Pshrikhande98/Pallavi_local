import { Component } from '@angular/core';
import { CommonService } from '../admin/Common/common.service';
import { Router } from '@angular/router';
import * as CONSTANTS from 'src/app/admin/Common/common-constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  constructor(private router : Router ,
           private commonService :CommonService ){}

           journey(journey: string) {
    
        
            if (journey === CONSTANTS.journey.admin) {
              this.commonService.journey = CONSTANTS.journey.admin;
              this.router.navigateByUrl('admin');
            }
            else if (journey === CONSTANTS.journey.owner) {
              this.commonService.journey =  CONSTANTS.journey.owner;
              this.router.navigateByUrl('owner');
            }
            else {
              this.commonService.journey =  CONSTANTS.journey.user;
              this.router.navigateByUrl('user');
            }
          }
        
        
        }
