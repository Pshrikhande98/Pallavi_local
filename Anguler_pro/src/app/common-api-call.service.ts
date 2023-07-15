import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonApiCallService {

  url = "http://localhost:3000";

  constructor(public httpClient : HttpClient) { }

postApiCall(endpoint : string , data : any){
  let url = this.url + '/' + endpoint;
  return this.httpClient.post(url,data)
}
getApiCall(endpoint: any){
  let url = this.url + '/' + endpoint;
  return this.httpClient.get(url)
}
getById(endPoint:string, id ? : any ){
  //statment condition true ? part1 : prt2
 // 6 < 10 ? true  : false
  let url = id ? this.url + endPoint + '/' + id : this.url + endPoint ; 
  //http://localhost:3000/ + admin 
  //http://localhost:3000/admin
  return this.httpClient.get(url);
}
}