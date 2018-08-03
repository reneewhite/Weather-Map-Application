import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from './../../providers/data/data';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  Places
  info;
  infoList ;
  //num = 0;
    constructor(public navCtrl: NavController, public navParams: NavParams, private data: DataProvider) {

    }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  onSubmit(selectedValue: any){
    if(this.Places === "p")
    {
      this.data.getData().subscribe(data=> {
        this.info = data;
        console.log(this.info);
        this.infoList = this.info.data;
      });
    }else if(this.Places === "j")
    {
      this.data.getData().subscribe(data=> {
        this.info = data;
        console.log(this.info);
        this.infoList = this.info.data;
      });
    }

  }

  onPageTwo(){
    this.navCtrl.push("FirstPage");
  }



}
