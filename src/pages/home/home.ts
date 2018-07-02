import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventModalPage } from '../event-modal/event-modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
items: any[];
PLACES = [    
{ name: "Moscow"},
{ name: "Berlin"},
{ name: "Los Angeles"},
{ name: "London"},
{ name: "Paris"}
];

  constructor(public navCtrl: NavController) {

  this.items = [];
  for (let i = 0; i<5; i++) {
    this.items.push({
      name: this.PLACES[i].name
    });
  }
  
  }
  toggleweather(item){
    this.navCtrl.push(EventModalPage, {item: item});
  }

}
