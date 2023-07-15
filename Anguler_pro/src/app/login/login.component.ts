import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router : Router){
  
  }
back(){
this.router.navigateByUrl('landing')
}
submit(formData:any){
  console.log(formData);
  
}
password(passwordValue:any){
 console.log(passwordValue);
 
}

//   # Angular Events Cheat-sheet
// (drag)="myFunction()" imp
// (drop)="myFunction()" imp
// (dragover)="myFunction()"
// (blur)="someFunction()" imp >>input 
// (focus)="someFunction()"  imp >>input
// (scroll)="someFunction()"
// (submit)="someFunction()"
// (click)="someFunction()"  imp >>button
// (dblclick)="someFunction()"   
// (cut)="someFunction()"
// (copy)="someFunction()"
// (paste)="someFunction()"
// (keyup)="someFunction()" imp >>input
// (keypress)="someFunction()" imp >>input
// (keydown)="someFunction()" imp >>input
// (mouseup)="someFunction()"
// (mousedown)="someFunction()"
// (mouseenter)="someFunction()"
//(change)>> imp >>checkbox
}



