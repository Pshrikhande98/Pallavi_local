import { Component } from '@angular/core';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ownerhome',
  templateUrl: './ownerhome.component.html',
  styleUrls: ['./ownerhome.component.scss']
})
export class OwnerhomeComponent {
  loginForm!: FormGroup;
 constructor(private router : Router,
            private fb : FormBuilder){

            }
  ngOnInit(){
    this.loginFormDetails();
  }
  loginFormDetails() {
   this.loginForm = this.fb.group({
    userName : ['',[Validators.required,Validators.pattern('[a-zA-Z]*$')]],
    password : ['',[Validators.required,Validators.pattern('[0-9]*$')]]
   })
  }
  
  login(){
    console.log(this.loginForm.value);
    
 }

  back(){
   this.router.navigateByUrl('home');
  }

}
