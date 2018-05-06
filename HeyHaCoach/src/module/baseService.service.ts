import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { App, AlertController, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AlertService } from './alertService.service';
import { Globals } from "./global";

import { LoginPage } from '../pages/login/login';

interface ReqOption {
  data: any,
  myHeader?: any,
  hideLoading?: boolean,
  array?: any
}

interface ResData {
  data: any,
  msg: string,
  status: string
}

@Injectable()
export class BaseService {
  constructor(
    public app: App,
    public http: HttpClient,
    public loadingCtrl: LoadingController,
    public alertService: AlertService,
    public alertCtrl: AlertController) {
  }

  sessionTimeout() {
    if(Globals.showTimeout) {
      return;
    }

    Globals.showTimeout = true;

    let alert = this.alertCtrl.create({
      title: "错误",
      message: '登陆过期，请重新登陆',
      buttons: [{
        text: 'Ok',
        handler: () => {
          Globals.showTimeout = false;
          this.app.getRootNav().setRoot('LoginPage');
        }
      }]
    });
    alert.present();
  }

  multiReq(options): void {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: '请稍后...'
    });

    if (!options.hideLoading) {
      loading.present();
    }

    const requests = options.requests.map(({url, option}) => {
      const { data, myHeader } = option;
      const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
      // headers.append('withCredentials', 'true');
      // console.log(headers);
      for (const key in myHeader) {
        headers.append(key, myHeader[key]);
      };

      const options = { headers: headers };

      let params = new URLSearchParams();
      for (const key in data) {
        params.append(key, data[key]);
      };

      // const domain = 'http://test.hu0572.cn';
      const domain = 'http://api.zjztty.com';
      // const domain = '';

      return this.http.post(`${domain}${url}`, params.toString() ,options);
    });

    Observable.forkJoin(requests).subscribe((datas: ResData[]) => {
      loading.dismiss();
      const timeout = datas.filter((data) => data.status === 'SESSION_OUT');
      if(timeout.length > 0) {
        this.alertService.showTimeout();
        return;
      }

      const error = datas.filter((data) => data.status !== 'SUCCESS');
      if(error.length > 0) {
        if (typeof options.onError === 'function') {
          options.onError(error);
          return;
        }
        let alert = this.alertCtrl.create({
          title: "错误",
          message: JSON.stringify(error[0].msg),
          buttons: [{
            text: 'Ok',
          }]
        });
        alert.present();
        return;
      }

      const successData = datas.map( data => data.data );
      options.onSuccess(successData);

    }, error => {
      loading.dismiss();
      if (typeof options.onError === 'function') {
        options.onError("系统错误，请稍后重试");
        return;
      }

      let alert = this.alertCtrl.create({
        title: "错误",
        message: JSON.stringify(error),
        buttons: [{
          text: 'Ok',
        }]
      });
      alert.present();
    });

  }

  postData(url: string, option: ReqOption = { data: {}, myHeader: {}, hideLoading: false}, onSuccess: any, onError?: any): void {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: '请稍后...'
    });

    if (!option.hideLoading) {
      loading.present();
    }

    const { data, myHeader, array } = option;
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    // headers.append('withCredentials', 'true');
    // console.log(headers);
    for (const key in myHeader) {
      headers.append(key, myHeader[key]);
    };

    const options = { headers: headers };

    let params = new URLSearchParams();
    for (const key in data) {
      params.append(key, data[key]);
    };

    for (const key in array) {
      array[key].forEach((value) => {
        params.append(key, value)
      });
    }

    const domain = 'http://api.zjztty.com';
    // const domain = '';

    this.http.post(`${domain}${url}`, params.toString() ,options).subscribe((data: ResData) => {
      loading.dismiss();
      if(data.status === 'SUCCESS') {
        onSuccess(data.data);
        return;
      }
      if(data.status === 'SESSION_OUT') {
        this.sessionTimeout();
      }

      if (typeof onError === 'function') {
        onError(data.msg);
        return;
      }
      let alert = this.alertCtrl.create({
        title: "错误",
        message: data.msg,
        buttons: [{
          text: 'Ok',
        }]
      });
      alert.present();

    }, error => {
      loading.dismiss();
      if (typeof onError === 'function') {
        onError("系统错误，请稍后重试");
        return;
      }
      let alert = this.alertCtrl.create({
        title: "错误",
        // message: "系统错误，请稍后重试",
        message: JSON.stringify(error),
        buttons: [{
          text: 'Ok',
        }]
      });
      alert.present()
    });
  }
}
