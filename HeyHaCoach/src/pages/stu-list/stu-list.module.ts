import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StuListPage } from './stu-list';
import { StuListComponent } from '../../components/stu-list/stu-list'
import { RemindListAllComponent } from '../../components/remind-list-all/remind-list-all'
@NgModule({
  declarations: [
    StuListPage,
    StuListComponent,
    RemindListAllComponent
  ],
  imports: [
    IonicPageModule.forChild(StuListPage),
  ],
})
export class StuListPageModule {}
