import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentDataService } from '../student-data.service';

@Component({
  selector: 'app-student-demo',
  templateUrl: './student-demo.component.html',
  styleUrls: ['./student-demo.component.css']
})
export class StudentDemoComponent {
  studentData ={
    Name: 'Pallavi',
    Age : 25,
    Class :'BE Computer'
  }

  constructor(private router : Router,
    private studentDataService : StudentDataService){

  }
  

  back(){
     this.router.navigateByUrl('landing')
  }
  SetData(){
    this.studentDataService.studentData = this.studentData;
    console.log('Services Property-->>' , this.studentDataService.studentData);
    
  }
  serviceFun(){
    let res = this.studentDataService.test(20,30);
     console.log('res',res);
     
   }
}
