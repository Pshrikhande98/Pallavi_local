import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoringDataServiceService {

userFullName : any;
listOfUsers:any;
studentData: any;
  setData!: String;

  name = new Subject<string>();

constructor() { }
 
}
