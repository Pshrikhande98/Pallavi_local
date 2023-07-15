import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumOnly]'
})
export class NumOnlyDirective {

  constructor(private eleRef : ElementRef) { }

  @HostListener('input',['$event'])
  ChangeOnNumber(){
    console.log('Numderictive Calling');
    let InitialInputBoxValue = this.eleRef.nativeElement.value;
    console.log('InitialInputBoxValue',InitialInputBoxValue);
    this.eleRef.nativeElement.value = InitialInputBoxValue.replace(/[^0-9]*/g,'')
    
  }
}
