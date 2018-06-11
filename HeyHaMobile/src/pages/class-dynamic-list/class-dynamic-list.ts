import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, ViewController, Platform } from 'ionic-angular';
import { ModalPostPageComponent } from '../../components/modal-post-page/modal-post-page';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { PhotoLibrary } from '@ionic-native/photo-library';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

import { BaseService } from '../../module/baseService.service';

/**
 * Generated class for the ClassDynamicListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-class-dynamic-list',
  templateUrl: 'class-dynamic-list.html',
})
export class ClassDynamicListPage {

  dynamicList = [];
  classId;
  classTitle;
  constructor(
    public platform: Platform,
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public baseService: BaseService,
    private transfer: FileTransfer, private file: File,
    public viewCtrl: ViewController,
    private photoLibrary: PhotoLibrary,
    private photoViewer: PhotoViewer,
    public modalCtrl: ModalController) {
  }

  fileTransfer: FileTransferObject = this.transfer.create();

  openModal() {
    let modal = this.modalCtrl.create(ModalPostPageComponent, { classId: this.classId });
    modal.onDidDismiss(data => {
      this.loadPageData();
    })
    modal.present();
  }


  ionViewWillEnter() {
    this.viewCtrl.setBackButtonText('返回');
    this.classId = this.navParams.get('item').id;
    this.classTitle = this.navParams.get('item').name;
    this.loadPageData();
  }
  
  loadPageData() {
    this.baseService.postData('/admin/dynamic/getDynamicListByClazz', { data: { clazzId: this.classId } }, (data)=> {
      this.dynamicList = data;
    });
  }

  deleteDynamic(id) {
    this.baseService.postData('/admin/dynamic/deleteDynamic', { data: {id}, hideLoading: true }, (data)=> {
      this.loadPageData();
    });
  }

  photoView(url) {
    this.fileTransfer.download(url, this.file.dataDirectory + url.split('/').pop()).then((entry) => {
      console.log('download complete===============zx: ' + entry.toURL());
      this.photoViewer.show(entry.toURL(), ' ', { share: true });
    }, (error) => {
      // handle error
    });
    // if (this.platform.is('ios')) {

    // } else {
    //   this.photoViewer.show(url, ' ', { share: true });
    // }
  }

}

