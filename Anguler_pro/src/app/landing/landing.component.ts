import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StoringDataServiceService } from '../storing-data-service.service';
import { CommonApiCallService } from '../common-api-call.service';

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
  getApiResponse :any; 
  constructor(private router : Router,
    private sDataService : StoringDataServiceService ,
    private CommonApiCallService : CommonApiCallService ){
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
  apicalls(){
    this.router.navigateByUrl('ApiCalls');
  } 
  getApiCall(){
    console.log('get Method Calling');
    let endpoint = "admin";
    this.CommonApiCallService.getApiCall(endpoint).subscribe (resp =>{
      this.getApiResponse = Response ;
    })
    console.log(" this.getApiResponse", this.getApiResponse);
  }
   getbyId(){
    this.CommonApiCallService.getById("admin",1).subscribe(response =>{
      console.log(response);
    })

}
subject(){
  this.router.navigateByUrl('Subject1');
}
}
