import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/admin/Common/common-api-call.service';
import { CommonService } from 'src/app/admin/Common/common.service';

@Component({
  selector: 'app-newhotelregistration',
  templateUrl: './newhotelregistration.component.html',
  styleUrls: ['./newhotelregistration.component.scss']
})
export class NewhotelregistrationComponent {
  hotelRagistrationForm!:FormGroup;
  editId!: number;
  dataById: any;
  constructor(private formBulider:FormBuilder,private router:Router,
    private commonApiCallService:CommonApiCallService,
    private commonService : CommonService){}

  ngOnInit(){
    this.myOwnerRagistration();

  }
  myOwnerRagistration(){
    this.hotelRagistrationForm=this.formBulider.group({
      ownerName:['',[Validators.required,Validators.minLength(5),Validators.pattern('[A-za-z ]*$')]],
      ownerContact:['',[Validators.required,Validators.pattern('[0-9]*$')]],
      hotelName:['',[Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-z0-9/$@ ]*$')]],
      hotelAddress:['',[Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-z0-9 ]*$')]],
      hotelContact:['',[Validators.required,Validators.pattern('[0-9]*$')]],
      hotelMenu:['',[Validators.required,Validators.minLength(2)]],
      roomsAvailable:['',[Validators.required,Validators.pattern('[0-9]*$')]],
      ownerCheck:['',[Validators.required,]],
      userPass:['',[Validators.required,]],
    })
  }

  back() {
    this.router.navigateByUrl('owner/ownersuccess')
  }
  submitDetails() {
    let endpoint = 'hotelDetails';
    console.log('form data', this.hotelRagistrationForm.value);

    let request = {
      ownerName: this.hotelRagistrationForm.value.ownerName,
      ownerContact: this.hotelRagistrationForm.value.ownerContact,
      hotelName: this.hotelRagistrationForm.value.hotelName,
      hotelAddress: this.hotelRagistrationForm.value.hotelAddress,
      hotelContact: this.hotelRagistrationForm.value.hotelContact,
      hotelMenu: this.hotelRagistrationForm.value.hotelMenu,
      roomsAvailable: this.hotelRagistrationForm.value.roomsAvailable,
      password: this.hotelRagistrationForm.value.userPass,
    }

    if(this.editId){
      this.commonApiCallService.patchApiCall(endpoint, request,this.editId).subscribe((resp: any) => {
        console.log(resp);
      })
    }
    else{
      this.commonApiCallService.postApiCall(endpoint, request).subscribe((resp: any) => {
        console.log(resp);
      })
    }

    this.router.navigateByUrl('owner/ownersuccess');
  }


  ngOnDestroy(){
    this.commonService.dataById = {};
    this.commonService.id = '';
  }

}
