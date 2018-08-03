
import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

/**
 * Generated class for the FirstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {
  info;
  infoList 
place;

temperature;
tempFahrenheit;
minTemp;
maxTemp;
today = " ";
sign = "°K";
  constructor(public navCtrl: NavController, public navParams: NavParams, private data: DataProvider, public menuCtrl: MenuController) {
    this.data.getInformation(this.place).subscribe(data=> {
      this.info = data;
      this.tempFahrenheit = this.info.main.temp;
      console.log(this.info);
    });
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstPage');
  }
  
  doRefresh(refresher) {
    this.data.getInformation(this.place).subscribe(data=> {
      this.info = null;
      this.tempFahrenheit = null;
      this.minTemp =  null;
      this.maxTemp = null;
      console.log(this.info);
    });
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);

  }
 getValues(){
  this.data.getInformation(this.place).subscribe(data=> {
    this.info = data;
    this.tempFahrenheit = this.info.main.temp;
    this.minTemp = this.info.main.temp_min;
    this.maxTemp = this.info.main.temp_max;
    console.log(this.info);
  });
 }

 getTemp() {
  this.menuCtrl.open();
}

resetList(){
  this.place = null;
}
tempClick(selectedValue: any){
  if(this.temperature === "Celcius")
  {
    this.tempFahrenheit = Math.floor(this.info.main.temp-273.15);
    this.minTemp = Math.floor(this.info.main.temp_min-273.15);
    this.maxTemp = Math.floor(this.info.main.temp_max-273.15);
    this.today = "Today";
    this.sign = "°C";
  }else if(this.temperature === "Fahrenheit")
  {
    this.tempFahrenheit = Math.floor((this.info.main.temp-273.15) * 1.8000 + 32.00);
    this.minTemp = Math.floor((this.info.main.temp_min-273.15) * 1.8000 + 32.00);
    this.maxTemp = Math.floor((this.info.main.temp_max-273.15) * 1.8000 + 32.00);
    this.today = "Tomorrow";
    this.sign = "°F";
  }else if(this.temperature === "Kelvin")
  {
    this.tempFahrenheit = Math.floor((((this.info.main.temp-273.15) * 1.8000 + 32.00) - 273.15) * 1.8000 + 32.00);
    this.minTemp = Math.floor((((this.info.main.temp_min-273.15) * 1.8000 + 32.00) - 273.15) * 1.8000 + 32.00);
    this.maxTemp = Math.floor((((this.info.main.temp_max-273.15) * 1.8000 + 32.00) - 273.15) * 1.8000 + 32.00);
    this.today = "Wednesday";
    this.sign = "°K";
  }else if(this.temperature === "Kelvin")
  {
    this.tempFahrenheit = Math.floor((this.info.main.temp-273.15) + 273.15);
    this.minTemp = Math.floor((this.info.main.temp_min-273.15) + 273.15);
    this.maxTemp = Math.floor((this.info.main.temp_max-273.15) + 273.15);
    this.today = "Thursday";
    this.sign = "°K";
  }else if(this.temperature === "Celcius")
  {
    this.tempFahrenheit = Math.floor((((this.info.main.temp-273.15) * 1.8000 + 32.00) - 32) / 1.8000);
    this.minTemp = Math.floor((((this.info.main.temp_min-273.15) * 1.8000 + 32.00) - 32) / 1.8000);
    this.maxTemp = Math.floor((((this.info.main.temp_max-273.15) * 1.8000 + 32.00) - 32) / 1.8000);

    this.today = "Friday";
    this.sign = "°C";
  }
 else if(this.temperature === "Fahrenheit")
  {
    this.tempFahrenheit = Math.floor((this.info.main.temp - 273.15)* 1.8000 + 32.00);
    this.minTemp = Math.floor((this.info.main.temp_min - 273.15)* 1.8000 + 32.00);
    this.maxTemp = Math.floor((this.info.main.temp_max - 273.15)* 1.8000 + 32.00);
    this.today = "Morning";
    this.sign = "°F";
  }

}



}
