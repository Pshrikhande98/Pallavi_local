import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonApiCallService } from '../common-api-call.service';

@Component({
  selector: 'app-api-calls',
  templateUrl: './api-calls.component.html',
  styleUrls: ['./api-calls.component.css']
})
export class ApiCallsComponent {
ApiCalls! : FormGroup;
  adminData: any;

constructor(private fb : FormBuilder ,
  private CommonApiCallService : CommonApiCallService){
}
ngOnInit(){
  console.log('---->');
  this.myData();
  this.getData();
}
 
  myData() {
    this.ApiCalls =this.fb.group({
      name : ['',[]],
      Pno : [''],
      email : ['']
    })
  }
saved(){
  console.log("this.ApiCalls",this.ApiCalls.value);
  let endpoint ='admin';
  this.CommonApiCallService.postApiCall(endpoint,this.ApiCalls.value).subscribe(resp =>{
   console.log(resp);
   
  })
}
getData(){
let endpoinToGetData = 'admin';
this.CommonApiCallService.getApiCall(endpoinToGetData).subscribe(data =>{
  console.log('grt data',data);
  this.adminData = data;
});
}
}
