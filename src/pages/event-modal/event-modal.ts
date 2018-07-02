import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EventModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-modal',
  templateUrl: 'event-modal.html',
})
export class EventModalPage {
  item: any;
  weather: any;
  temp: any;
  tempmax: any;
  tempmin: any;
  windspeed: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventModalPage');

    const URL = "http://api.openweathermap.org/data/2.5/weather?q=" +
      this.item.name +
      "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=metric";
    fetch(URL).then(res => res.json()).then(json => {
      this.weather= json;
      this.temp = this.weather.main.temp;
      this.tempmax = this.weather.main.temp_max;
      this.tempmin = this.weather.main.temp_min;
      this.windspeed = this.weather.wind.speed;
      //console.log(this.weather)
});
  }


}
