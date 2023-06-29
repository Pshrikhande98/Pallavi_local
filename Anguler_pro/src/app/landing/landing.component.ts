import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StoringDataServiceService } from '../storing-data-service.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  test : any ;  //property section
  userName!:string;
  list:any;
  studentsData:any;
  constructor(private router : Router,
    private sDataService : StoringDataServiceService ){
  }
  
  ngOnInit(){
    this.userName = this.sDataService.userFullName;
    console.log('  this.userName>>>',  this.userName);
     
    this.list = this.sDataService.listOfUsers;
    //get student data from service
   }
   login(){    //functions , lifecycle hooks
  
    this.router.navigateByUrl('/login');
  }
  studentActivity(){
    this.router.navigateByUrl ('student/studentActivity');
  }
  directives(){
    this.router.navigateByUrl('directives')
  }
  parent(){
    this.router.navigateByUrl('parent');
  }
}
