import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  item = '';

  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.loadData();
  }


  loadData() {
    let testUrl: string = "http://dev.hu0572.cn/api/update";
    this.http.get(testUrl).subscribe(data => {
      console.log(data);
      this.item = JSON.stringify(data);
    });
  }

}
