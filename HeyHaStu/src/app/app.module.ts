import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule } from "@angular/common/http";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyApp } from './app.component';

// 自定义组件
import { ComponentsModule } from '../components/components.module';
import { ModalPostPageComponent } from '../components/modal-post-page/modal-post-page';

import { MyPointPageModule } from '../pages/my-point/my-point.module';
import { CoachInfoPageModule } from '../pages/coach-info/coach-info.module';
import { CardsPageModule } from '../pages/cards/cards.module';
import { EventsPage } from '../pages/events/events';
import { MinePage } from '../pages/mine/mine';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
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
import { TrainPageModule } from '../pages/train/train.module';

// NgModule
@NgModule({
  declarations: [ // 当前项目运行的组件 & 自定义的组件
    MyApp,
    EventsPage,
    MinePage,
    HomePage,
    TabsPage,
    // TrainPage,
    MyTaskPage,
    ClassDynamicListPage,
    ModifiedPassworkPage
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
    TrainPageModule
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
    ModifiedPassworkPage
  ],
  providers: [ // 定义的服务
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClientModule
  ]
})
export class AppModule {}
