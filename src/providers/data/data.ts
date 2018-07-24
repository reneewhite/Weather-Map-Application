import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  getInformation(){
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=pretoria&APPID=3b80f62b909380edd4a0b8f6bd4bc105');

    
}

getInformationJhb(){
  return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=johannesburg&APPID=3b80f62b909380edd4a0b8f6bd4bc105');

  
}

}
