import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertController, LoadingController } from 'ionic-angular';

// import { LoginPage } from '../pages/login/login';

interface ReqOption {
  data: any,
  myHeader?: any,
  hideLoading?: boolean
}

interface ResData {
  data: any,
  msg: string,
  status: string
}

@Injectable()
export class BaseService {
  constructor(public http: HttpClient, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
  }

  // sessionTimeout() {
  //   let alert = this.alertCtrl.create({
  //     title: "错误",
  //     message: '登陆过期，请重新登陆',
  //     buttons: [{
  //       text: 'Ok',
  //       handler: () => {
  //         this.app.getRootNav().setRoot(LoginPage);
  //       }
  //     }]
  //   });
  //   alert.present();
  // }

  postData(url: string, option: ReqOption = { data: {}, myHeader: {}, hideLoading: false}, onSuccess: any, onError?: any): void {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: '请稍后...'
    });

    if (!option.hideLoading) {
      loading.present();
    }

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

    const domain = 'http://api.zjztty.com';
    // const domain = '';

    this.http.post(`${domain}${url}`, params.toString() ,options).subscribe((data: ResData) => {
      loading.dismiss();
      if(data.status === 'SUCCESS') {
        onSuccess(data.data);
        return;
      }
      // if(data.status === 'SESSION_OUT') {
      //   this.sessionTimeout();
      // }

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
