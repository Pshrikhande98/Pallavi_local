import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallService } from '../Common/common-api-call.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.scss']
})
export class AdminsignupComponent {

  constructor(
    private builder: FormBuilder,
    private router: Router,
    private commonApiCallService : CommonApiCallService,
    private toastr : ToastrService
  ) { }

  registerForm = this.builder.group({
    id: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    name: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    gender: this.builder.control('Female'),
    password: this.builder.control('', Validators.required),
  });

  proceedRegister() {
    if(this.registerForm.valid) {
      this.commonApiCallService.registerAdmin(this.registerForm.value).subscribe((res:any)=>{
        console.log(res)
        this.toastr.success("congratulations !! you have registered successfully !!", "Registerd successfully")
        this.router.navigateByUrl('/admin/login')
      })
    }else {
      this.toastr.warning("please enter valid data ")
    }
  }

}
