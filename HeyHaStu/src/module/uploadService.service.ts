import { Injectable } from '@angular/core';
import { ActionSheetController, LoadingController, Platform, AlertController } from 'ionic-angular';
import { FileTransfer, FileTransferObject }from'@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FilePath } from '@ionic-native/file-path';

@Injectable()
export class UpLoadService {
  options = {
    fileKey: '',
    onError: (error) => { console.log(error) },
    onSuccess: (data) => { console.log(data) }
  };
  servicePath = '';
  domain = 'http://api.zjztty.com';

  constructor(
    public platform: Platform,
    public actionSheetCtrl: ActionSheetController,
    public loadingCtrl: LoadingController,
    private fileTransfer:FileTransferObject,
    private transfer:FileTransfer,
    private camera: Camera,
    private filePath: FilePath,
    public alertCtrl: AlertController
  ) {
    this.fileTransfer = this.transfer.create();
  }

  onError(e) {
    let alert = this.alertCtrl.create({
      title: "错误",
      message: JSON.stringify(e),
      buttons: [{
        text: 'Ok',
      }]
    });
    alert.present();
  }

  upload(imgUrl) {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: '请稍后...'
    });
    loading.present();

    this.fileTransfer.upload(imgUrl, `${this.domain}${this.servicePath}`, this.options).then((data) => {
      loading.dismiss();
      this.options.onSuccess(data);
    }).catch((e) => {
      loading.dismiss();
      this.options.onError ? this.options.onError(e) : this.onError(e);
    })
  }

  chooseFromCamera() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.upload(imageData);
    }, (err) => {
      this.options.onError(err);
    });
  }

  chooseFromLibrary() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };

    this.camera.getPicture(options).then((imageData) => {
      this.filePath.resolveNativePath(imageData)
      .then(filePath => this.upload(filePath))
      .catch(err => console.log(err));
    }, (err) => {
      this.options.onError(err);
    });
  }

  chooseImage(onCamera?, onLibrary?) {
    let actionSheet = this.actionSheetCtrl.create({
      title: '选择图片',
      buttons: [
        {
          text: '拍照',
          handler: () => {
            if(onCamera){
              onCamera();
              return;
            }
            this.chooseFromCamera();
          }
        }, {
          text: '相册中选取',
          handler: () => {
            if(onLibrary){
              onLibrary();
              return;
            }
            this.chooseFromLibrary();
          }
        }, {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    actionSheet.present();
  }

  initOptions(path, options) {
    this.servicePath = path;
    this.options = {
      fileKey: options.fileKey,
      onSuccess: options.onSuccess,
      onError: options.onError || this.onError
    };
  }

  chooseAndUpload(path, options) {
    this.initOptions(path, options);
    this.chooseImage();
  }
}
