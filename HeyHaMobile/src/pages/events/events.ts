import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, ActionSheetController, AlertController } from 'ionic-angular';
import { StModalPostPageComponent } from '../../components/st-modal-post-page/st-modal-post-page';
import { BaseService } from '../../module/baseService.service';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { PhotoLibrary } from '@ionic-native/photo-library';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
  eventList= [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private transfer: FileTransfer,
    private file: File,
    public viewCtrl: ViewController,
    private photoLibrary: PhotoLibrary,
    private photoViewer: PhotoViewer,
    public alertCtrl: AlertController,
    public actionSheetCtrl: ActionSheetController,
    public baseService: BaseService) {
  }

  fileTransfer: FileTransferObject = this.transfer.create();

  openModal(characterNum) {
    let modal = this.modalCtrl.create(StModalPostPageComponent, characterNum);
    modal.onDidDismiss(data => {
      this.loadData();
    });
    modal.present();
  }
  ionViewWillEnter() {
    this.viewCtrl.setBackButtonText('返回');
    this.loadData();
  }

  loadData() {
    this.baseService.postData('/admin/growthRecord/getGrowthRecord', { data: {} }, (data)=> {
      this.eventList = data;
    });
  }

  deleteEvent(id) {
    this.baseService.postData('/admin/growthRecord/deleteGrowthRecord', { data: { id }, hideLoading: true }, (data)=> {
      this.loadData();
    });
  }

  photoView(url) {
    this.fileTransfer.download(url, this.file.dataDirectory + url.split('/').pop()).then((entry) => {
      this.photoViewer.show(entry.toURL(), ' ', { share: true });
    }, (error) => {
      // handle error
    });
  }

  save(url) {
    this.photoLibrary.requestAuthorization().then(() => {
      this.fileTransfer.download(url, this.file.dataDirectory + url.split('/').pop()).then((entry) => {
       
        this.photoLibrary.saveImage( entry.toURL(), '金牌小子').then((entry=>{
          let alert = this.alertCtrl.create({
            title: '保存成功',
            buttons: ['确定']
          });
          alert.present();
        }),
        (error) => {
          // handle error
          let alert = this.alertCtrl.create({
            title: '保存失败',
            buttons: ['确定']
          });
          alert.present();
        });
      }, (error) => {
        // handle error
      });
      
    })
    .catch(err => console.log('permissions weren\'t granted'));
  }

  presentActionSheet(imageUrl) {
    const actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: '查看大图',
          role: 'destructive',
          handler: () => {
            this.photoView(imageUrl);
          }
        },{
          text: '保存图片',
          handler: () => {
            this.save(imageUrl);
          }
        }
      ]
    });
    actionSheet.present();
  }
}
