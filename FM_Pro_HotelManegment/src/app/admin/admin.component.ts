import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallService } from './Common/common-api-call.service';
import { CommonService } from './Common/common.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  constructor(
    private builder: FormBuilder,
    private router: Router,
    private commonApiCallService :  CommonApiCallService,
    private commonService : CommonService,
    public  toastr : ToastrService
  ){}

  result:any;

  loginForm = this.builder.group({
    id: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required)
  })

  proceedLogin(){
    if(this.loginForm.valid){
      this.commonApiCallService.getAdminByCode(this.loginForm.value.id).subscribe((res)=>{
        this.result = res;
        if(this.result.password === this.loginForm.value.password){
          sessionStorage.setItem('username', this.result.id);
          sessionStorage.setItem('pass', this.result.password);
          this.router.navigateByUrl('/admin/home')
          this.toastr.success(`welcome ${this.result.id}`,'Login Successfully !!')
        } else {
          this.toastr.error('Invalid Password')
        }
      });
    }else {
      this.toastr.warning('Please enter valid data.')
    }
  }



}


