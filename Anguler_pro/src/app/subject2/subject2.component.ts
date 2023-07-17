import { Component } from '@angular/core';
import { StoringDataServiceService } from '../storing-data-service.service';

@Component({
  selector: 'app-subject2',
  templateUrl: './subject2.component.html',
  styleUrls: ['./subject2.component.css']
})
export class Subject2Component {
nameComingFromSub1!: string;


constructor(private storingDataService :StoringDataServiceService){}

ngOnInit(){
  console.log('inp 2');
  this.storingDataService.name.subscribe(data =>{
    this.nameComingFromSub1 = data;
  }) 
}
}
