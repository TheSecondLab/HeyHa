import { Injectable } from '@angular/core';
import { ActionSheetController, LoadingController, Platform, AlertController } from 'ionic-angular';
import { FileTransfer, FileTransferObject }from'@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { File, FileEntry } from '@ionic-native/file';
import {HttpClient} from "@angular/common/http";
import {catchError, finalize} from "rxjs/operators";
import {Observable} from "rxjs";
import { ForkJoinObservable } from "rxjs/observable/ForkJoinObservable";
import { FilePath } from '@ionic-native/file-path';

@Injectable()
export class MultipleUpLoadService {
  options = {
    fileKey: '',
    onError: (error) => { console.log(error) },
    onSuccess: (data) => { console.log(data) },
    isMulti: false
  };
  servicePath = '';
  loading: any;
  domain = 'http://api.zjztty.com';
  formData = new FormData();

  constructor(
    public platform: Platform,
    public actionSheetCtrl: ActionSheetController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private fileTransfer:FileTransferObject,
    private transfer:FileTransfer,
    private camera: Camera,
    private file: File,
    private filePath: FilePath,
    private readonly http: HttpClient
  ) {
    this.fileTransfer = this.transfer.create();
  }

  chooseFromCamera(cb) {
    const options: CameraOptions = {
      quality: 30,
      // destinationType: this.platform.is('ios') ? this.camera.DestinationType.NATIVE_URI : this.camera.DestinationType.FILE_URI,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      cb(imageData);
    }, (err) => {
      this.options.onError(err);
    });
  }

  chooseFromLibrary(cb) {
    const options: CameraOptions = {
      quality: 10,
      // destinationType: this.platform.is('ios') ? this.camera.DestinationType.NATIVE_URI : this.camera.DestinationType.FILE_URI,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      targetWidth:768, //图片输出宽度
      targetHeight:1280 //图片输出高度
    };

    this.camera.getPicture(options).then((imageData) => {
      if (this.platform.is('ios')) {
        cb(imageData);
        return;
      }
      this.filePath.resolveNativePath(imageData)
        .then(filePath => cb(filePath))
        .catch(err => console.log(err));
    }, (err) => {
      this.options.onError(err);
    });
  }

  chooseImage(cb) {
    let actionSheet = this.actionSheetCtrl.create({
      title: '选择图片',
      buttons: [
        {
          text: '拍照',
          handler: () => {
            this.chooseFromCamera(cb);
          }
        }, {
          text: '相册中选取',
          handler: () => {
            this.chooseFromLibrary(cb);
          }
        }, {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    actionSheet.present();
  }

  postImage(path, param, onSuccess, onError) {
    this.http.post(path, param).toPromise().then(res => {
      onSuccess(res);
    }).catch(error => {
      onError(error);
    });
  }

  uploadFile(path, fileKey: string, params, filePaths:Array<string>, onSuccess: Function, onError: Function) {
    this.formData = new FormData();

    if (!filePaths.length) {
      params.forEach((value, key) => {
        this.formData.append(key, value);
      });
      this.formData.append(fileKey, '');
      this.postImage(`${this.domain}${path}`, this.formData,onSuccess, onError);
      return;
    }

    this.upload(filePaths, fileKey).subscribe(data => {

      console.log('开始上传........');

      params.forEach((value, key) => {
        this.formData.append(key, value);
      });

      this.postImage(`${this.domain}${path}`, this.formData,onSuccess, onError);

    }, error => {
        console.log('文件处理失败');
    });
}



  private upload(filePaths:Array<string>, fileKey:string):Observable<any> {
    var observables: Array<any> = [];
    filePaths.forEach((value:string, i, array) => {
      var observable = new Observable((sub:any) => {
        this.file.resolveLocalFilesystemUrl(value).then(entry => {
          (<FileEntry>entry).file(file => {
            let blob: Blob = <Blob>file;
            const reader = new FileReader();
              reader.onloadend = () => {
                const imgBlob = new Blob([reader.result], {type: blob.type});
                this.formData.append(fileKey, imgBlob, (<any>blob).name);
                sub.next(null);
                sub.complete();
              };
              reader.readAsArrayBuffer(blob);
            });
          })
        .catch(error => console.log('报错了，日了狗----->' + JSON.stringify(error)));
      });
      observables.push(observable);
    });
    return ForkJoinObservable.create(observables);
  }

}
