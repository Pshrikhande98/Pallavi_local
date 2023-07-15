import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCharOnly]'
})
export class CharOnlyDirective {

  constructor(private elementRef : ElementRef) { }

  @HostListener('input',['$event'])
  onInputChange(){
console.log("directive Calling");
let InitialInputBoxValue = this.elementRef.nativeElement.value;
console.log(InitialInputBoxValue);
this.elementRef.nativeElement.value = InitialInputBoxValue.replace(/[^a-zA-Z ]*/g , '')

}

}
