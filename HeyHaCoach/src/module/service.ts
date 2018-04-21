import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()


export class BaseServiceJson {
  constructor(public http: HttpClient) {

  }

  postData(url: string, data: any, myHeader?: any): Observable<any> {
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // for (const key in myHeader) {
    //   headers.append(key, myHeader[key]);
    // };

    // const options= { headers: headers };

    // let params = new URLSearchParams();
    // for (const key in data) {
    //   params.append(key, data[key]);
    // };

    return this.http.post(`http://test.hu0572.cn${url}`, data);
  }
}
