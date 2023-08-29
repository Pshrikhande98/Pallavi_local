import { Injectable } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  journey!: string;
  userName!: string;
  id!: any;
  dataById:any;
  toastrService: any;

  constructor() { }



  whiteSpaceValidator(nameFieldValue:any){
    let data = nameFieldValue.value;
    let newdata = data?.trim();
    let isNotValid = data.length != newdata.length ;
    return isNotValid ? {whiteSpace:true} : null
  }
  warningToaster( msg:any, title:any, configuration:any ){
    this.toastrService.warning( msg, title, configuration)
}
}
