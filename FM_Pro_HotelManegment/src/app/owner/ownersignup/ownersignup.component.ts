import { Component } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/admin/Common/common-api-call.service';
import { CommonService } from 'src/app/admin/Common/common.service';

@Component({
  selector: 'app-ownersignup',
  templateUrl: './ownersignup.component.html',
  styleUrls: ['./ownersignup.component.scss']
})
export class OwnersignupComponent {

  signUpForm! :FormGroup; 
  journey! :string;
  postResponse:any;
  constructor(private router : Router,
             private fb : FormBuilder,
            private commonService :CommonService,
            private commonApiCallService :CommonApiCallService ){}
             

    ngOnInit(){
     this.journey = this.commonService.journey;
     console.log(' this.journey', this.journey);
     
     this.FormDetails();
  }

  FormDetails(){
    this.signUpForm = this.fb.group({
      name:['',[Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-Z ]*'),this.commonService.whiteSpaceValidator]],
      pancard:['',[Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-Z0-9]*')]],
      email:['',[Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-Z0-9]@*')]],
      mobile:['',[]],
      password:['',[]],
      gender:['',[]],
      

    })
  }
  submit(){
    let request = {
      UserName : this.signUpForm.value.name,
      Email:   this.signUpForm.value.email,
      Mobile :  this.signUpForm.value.mobile,
      Password :  this.signUpForm.value.password,
      Gender :  this.signUpForm.value.gender
    
    }
    this.commonApiCallService.postApiCall(this.journey,request).subscribe(respo=>{
      console.log(respo);
      this.postResponse = respo;
    })
    // if(this.postResponse?.id){
      this.router.navigateByUrl('owner/ownersuccess');
      //}
   }
   back(){
    this.router.navigateByUrl('owner/ownerhome')
}
    }
    