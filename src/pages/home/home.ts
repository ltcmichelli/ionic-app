import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  constructor(public navCtrl: NavController) {

  }

  submit() {
    let start = (document.getElementById("txtStart") as HTMLInputElement).value;
    let end = (document.getElementById("txtEnd") as HTMLInputElement).value;
    console.log(start);
    console.log(end);
  }

}

