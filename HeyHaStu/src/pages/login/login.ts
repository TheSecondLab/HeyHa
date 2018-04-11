import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JPush } from '@jiguang-ionic/jpush';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { AlertController } from 'ionic-angular';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  form;

  constructor(public navCtrl: NavController, public navParams: NavParams, public jPush: JPush, public http: HttpClient, public alertCtrl: AlertController) {
    this.form = new FormGroup({
      username: new FormControl("CFTA18A001", Validators.required),
      password: new FormControl("123456", Validators.required)
    });
  }

  convert(obj) {
    const param = new HttpParams();
    for(let p in obj)
      param.set(p, obj[p]);

    param.toString();
    return param;
}

  login() {
    // console.log(this.form.value)
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    const options= { headers: headers };


    // const params = new HttpParams({fromString: 'username=CFTA18A001&password=123456'});
    // params.append('username', this.form.value.username);
    // params.append('password', this.form.value.password);
    let params = new URLSearchParams();
    params.append('username', this.form.value.username);
    params.append('password', this.form.value.password);
    let body = params.toString();

    console.log('aaa', params.toString())

    // let testUrl: string = "/api/login";
    this.http.post("http://test.hu0572.cn/login", body,options).subscribe(data => {
      console.log(data);
      // this.item = JSON.stringify(data);
      let alert = this.alertCtrl.create({
        title: "Account Created",
        message: "Created Account for: " + JSON.stringify(data),
        buttons: [{
          text: 'Ok',
        }]
      });
      alert.present()
      this.navCtrl.push('TabsPage');
    }, error => {
      let alert = this.alertCtrl.create({
        title: "Account Created",
        message: "error: " + JSON.stringify(error),
        buttons: [{
          text: 'Ok',
        }]
      });
      alert.present()
    });

    // this.navCtrl.push('TabsPage');
    // this.jPush.init().then((data) => {
    //   alert(data)
    //   this.navCtrl.push('TabsPage');
    // }).catch(e=> alert(e));
  }

}
