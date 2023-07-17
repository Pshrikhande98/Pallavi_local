import { Component } from '@angular/core';
import { StoringDataServiceService } from '../storing-data-service.service';

@Component({
  selector: 'app-subject1',
  templateUrl: './subject1.component.html',
  styleUrls: ['./subject1.component.css']
})
export class Subject1Component {
name = 'Pallavi';

constructor(private storingDataService :StoringDataServiceService){}


sendData(){
console.log('inp 1');
this.storingDataService.name.next(this.name);
}
}


