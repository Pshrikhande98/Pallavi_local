import { Component } from '@angular/core';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../admin/Common/common.service';
import { CommonApiCallService } from '../admin/Common/common-api-call.service';

@Component({
  selector: 'app-ownerhome',
  templateUrl: './ownerhome.component.html',
  styleUrls: ['./ownerhome.component.scss']
})
export class OwnerhomeComponent {
  loginForm!: FormGroup;
  endPoint!:string;
  ownerData: any;
  validUser: boolean = false;
 constructor(private router : Router,
            private fb : FormBuilder,
            private commonService : CommonService ,
            private commonApiCallService : CommonApiCallService){

            }
  ngOnInit(){
    this.endPoint = this.commonService.journey;
    console.log('endPoint...',this.endPoint);
    
    this.loginFormDetails();
  }
  loginFormDetails() {
   this.loginForm = this.fb.group({
    userName : ['',[Validators.required,Validators.pattern('[a-zA-Z]*$')]],
    password : ['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*$')]]
   })
  }
  
  login(){
    console.log(this.loginForm.value);
    if(this.loginForm.value.userName ){
      this.commonService.userName = this.loginForm.value.userName ;
   }
   this.getOwnerApiData();
   console.log('this.ownerData', this.ownerData);

   if (this.ownerData) {
     this.isValidUser();
     if (this.validUser) {
       this.router.navigateByUrl('owner/ownersuccess');
     }
     else {
      // alert('username or password is incorrect');
      this.commonService.warningToaster('Password is incorrect','Warning',
      {
       timeOut: 10000,
       positionClass: 'toast-top-center'
      })
      
       this.router.navigateByUrl('owner/ownerhome');
     }
   }
 }
 

  back(){
   this.router.navigateByUrl('home');
  }
  async getOwnerApiData(){
    // this.commonApiCallService.getApiCall(this.endPoint).subscribe(getOwnerResponse=>{
    //   this.ownerData = getOwnerResponse;
    // })
   this.ownerData = await this.commonApiCallService.getApiCall(this.endPoint).toPromise()
    console.log('this.ownerData',this.ownerData);
    
  }

  isValidUser(){
    this.ownerData.forEach((element:any)=>{
      if(element.UserName === this.loginForm.value.userName 
        && element.Password === this.loginForm.value.password) {
        this.validUser = true;
      }     
    });
    return
  }
}


