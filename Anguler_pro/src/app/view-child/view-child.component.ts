import { Component, ElementRef, ViewChild } from '@angular/core';
import { Subject3Component } from '../subject3/subject3.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent {

  @ViewChild('headingTag') headline! : ElementRef;
  @ViewChild(Subject3Component) Sub3Compo! : Subject3Component;
  name!: string;
 

  ngAfterViewInit(){
  console.log('ngAfterViewInit Calling');
  console.log('headline',this.headline.nativeElement.innerHTML);
  this.headline.nativeElement.innerHTML = 'pallavi';
  console.log(this.Sub3Compo.surName);
  this.name = this.Sub3Compo.surName;
  
  }
}


