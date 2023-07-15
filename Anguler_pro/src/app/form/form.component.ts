import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonApiCallService } from '../common-api-call.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  form! : FormGroup;
  adminData:any;
  tableHeading : any[]= ['Full Name', "Mobile Number", "City", "Email"];
  myName = 'poonam';
  constructor(private fb : FormBuilder, 
   private commonApiCallService: CommonApiCallService,
   private httpClient : HttpClient){}
   todayDate = new Date();
   searchBoxVal:any;
   
   ngOnInit(){
   console.log('...');
   this.myForm();
   this.getData();
   
  }

   myForm(){
     this.form = this.fb.group({
     name : ['',[]],
     mobileNo : ['']
   })
   }

   save(){
     console.log(" this.form", this.form.value);
     let urlEndPoint = 'form';
     let formData = {
       Name : this.form.value.name,
       MobileNumber : this.form.value.mobileNo
     }
    this.commonApiCallService.postApiCall(urlEndPoint,formData).subscribe(resp=>{
     console.log(resp);
    })
   }

   getData(){
     let endpointToGetData = 'admin';
     this.commonApiCallService.getApiCall(endpointToGetData).subscribe(data =>{
     console.log('get data',data);
     this.adminData = data;
   });
   
    
   }
}


