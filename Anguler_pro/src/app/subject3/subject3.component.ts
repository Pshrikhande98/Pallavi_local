import { Component } from '@angular/core';
import { StoringDataServiceService } from '../storing-data-service.service';

@Component({
  selector: 'app-subject3',
  templateUrl: './subject3.component.html',
  styleUrls: ['./subject3.component.css']
})
export class Subject3Component {
  dataFromSub1!: string;
  surName = 'Shrikhande';

  constructor(private storingDataService :StoringDataServiceService){}

  ngOnInit(){
    console.log('inp 3');
    this.storingDataService.name.subscribe(data =>{
      this.dataFromSub1 = data;
    })
    
  }
}
