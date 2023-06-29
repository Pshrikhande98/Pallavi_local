import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StoringDataServiceService } from '../storing-data-service.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  data!: String;
  @Input() dataFromParent:any;
  @Output() surName = new EventEmitter <any>
  @Output() dataFromChild = new EventEmitter <any>
 
 constructor(public storingDataService : StoringDataServiceService){

 }

  get(){
    this.data = this.storingDataService.setData;
    console.log('data',this.data);
    
  }
  sendData(data? : any){
    let sName = 'Shrikhande';
    this.surName.emit(sName);
  
    if(data){
      console.log(data.target.value);
      let value = data.target.value;
      this.dataFromChild.emit(value);
    }
}
}