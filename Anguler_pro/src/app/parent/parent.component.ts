import { Component } from '@angular/core';
import { StoringDataServiceService } from '../storing-data-service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  parentData:any;
  valueFromChild : any;
  surName : any;
 constructor(private storingDataService : StoringDataServiceService){

 }

  Set(){
    this.storingDataService.setData ="pallavi";
  }
  getData(value : any){
    console.log(value);
    this.valueFromChild = value;
    

  }

  surname(surName : any){
    console.log(surName);
    this.surName = surName;
    

  }
  }