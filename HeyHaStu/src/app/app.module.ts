import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule } from "@angular/common/http";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { JPush } from '@jiguang-ionic/jpush';
import {JmessageChenyu} from "jmessage-chenyu";
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Camera } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject }from'@ionic-native/file-transfer';
import { File, FileEntry } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';

import { MyApp } from './app.component';

// 自定义组件
import { ComponentsModule } from '../components/components.module';
import { ModalPostPageComponent } from '../components/modal-post-page/modal-post-page';

import { MyPointPageModule } from '../pages/my-point/my-point.module';
import { CoachInfoPageModule } from '../pages/coach-info/coach-info.module';
import { CardsPageModule } from '../pages/cards/cards.module';
import { EventsPage } from '../pages/events/events';
import { EventsPageModule } from '../pages/events/events.module';
import { MinePage } from '../pages/mine/mine';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TabsPageModule } from '../pages/tabs/tabs.module';
import { TrainPage } from '../pages/train/train';
import { MyTaskPage } from '../pages/my-task/my-task';
import { SettingPage } from '../pages/setting/setting';
import { CoachInfoPage } from '../pages/coach-info/coach-info';
import { PersonalInfoPage } from '../pages/personal-info/personal-info';
import { CardsPage } from '../pages/cards/cards';
import { MyPointPage } from '../pages/my-point/my-point';
import { PersonalInfoPageModule } from '../pages/personal-info/personal-info.module';
import { ClassDynamicListPage } from '../pages/class-dynamic-list/class-dynamic-list';
import { SettingPageModule } from '../pages/setting/setting.module';
import { ModifiedPassworkPage } from '../pages/modified-passwork/modified-passwork';
import { ModifiedPassworkPageModule } from '../pages/modified-passwork/modified-passwork.module';
import { TrainPageModule } from '../pages/train/train.module';
import { NewsListPage } from '../pages/news-list/news-list';
import { NewsListPageModule } from '../pages/news-list/news-list.module';
import { CourseDetailPage } from '../pages/course-detail/course-detail';
import { CourseDetailPageModule } from '../pages/course-detail/course-detail.module';
import { LoginPage } from '../pages/login/login';
import { ChatPageModule } from '../pages/chat/chat.module';
import { MyChatPageModule } from '../pages/my-chat/my-chat.module';
import { ChatPage } from '../pages/chat/chat';
import { MyChatPage } from '../pages/my-chat/my-chat';

import { BaseService } from '../module/baseService.service';
import { UpLoadService } from '../module/uploadService.service';
import { MultipleUpLoadService } from '../module/multipleUpdate.service';
import { IMService } from '../module/imService.service';
import { AlertService } from '../module/alertService.service';

// NgModule
@NgModule({
  declarations: [ // 当前项目运行的组件 & 自定义的组件
    MyApp,
    MinePage,
    HomePage,
    // TabsPage,
    MyTaskPage,
    ClassDynamicListPage,
    LoginPage
  ],
  imports: [ // 当前的项目依赖哪些组件
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: 'true'
      //  mode: 'ios'
     }),
    HttpClientModule,
    MyPointPageModule,
    CoachInfoPageModule,
    PersonalInfoPageModule,
    CardsPageModule,
    SettingPageModule,
    TrainPageModule,
    ModifiedPassworkPageModule,
    EventsPageModule,
    NewsListPageModule,
    CourseDetailPageModule,
    TabsPageModule,
    ChatPageModule,
    MyChatPageModule
  ],
  bootstrap: [IonicApp], // 默认启动的组件
  entryComponents: [
    MyApp,
    EventsPage,
    MinePage,
    HomePage,
    TabsPage,
    TrainPage,
    SettingPage,
    MyTaskPage,
    CoachInfoPage,
    PersonalInfoPage,
    CardsPage,
    MyPointPage,
    ClassDynamicListPage,
    ModalPostPageComponent,
    ModifiedPassworkPage,
    CourseDetailPage,
    LoginPage,
    ChatPage,
    MyChatPage
  ],
  providers: [ // 定义的服务
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClientModule,
    JPush,
    JmessageChenyu,
    AndroidPermissions,
    BaseService,
    UpLoadService,
    MultipleUpLoadService,
    IMService,
    AlertService,
    Camera,
    FileTransferObject,
    FileTransfer,
    FilePath,
    File
  ]
})

export class AppModule {}
