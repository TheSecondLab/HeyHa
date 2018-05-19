import { NgModule } from '@angular/core';
import { DueToRemindListComponent } from './due-to-remind-list/due-to-remind-list';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';


// import { BrowserModule } from '@angular/platform-browser';
import { SubTitleComponent } from './sub-title/sub-title';
import { StSubTitleComponent } from './st-sub-title/sub-title';
// import { NewsListComponent } from './news-list/news-list';
// import { NewsDetailComponent } from './news-detail/news-detail';
import { NewsListThumbComponent } from './news-list-thumb/news-list-thumb';
import { ClassListComponent } from './class-list/class-list';
// import { RemindListAllComponent } from './remind-list-all/remind-list-all';
// import { StuListComponent } from './stu-list/stu-list';
import { TraceListComponent } from './trace-list/trace-list';
// import { ExerciseListComponent } from './exercise-list/exercise-list';
import { ModalPostPageComponent } from './modal-post-page/modal-post-page';
import { CourseListComponent } from './course-list/course-list';
import { PostClassMessageComponent } from './post-class-message/post-class-message';
// import { DropdownComponent } from './dropdown/dropdown';
import { MenuBarComponent } from './menu-bar/menu-bar';
import { ReminderComponent } from './reminder/reminder';
import { StNewsListThumbComponent } from './st-news-list-thumb/news-list-thumb';
import { PersonalInfoComponent } from './personal-info/personal-info';
import { MyInfoListComponent } from './my-info-list/my-info-list';


@NgModule({
	declarations: [DueToRemindListComponent,
    SubTitleComponent,
    StSubTitleComponent,
    // NewsListComponent,
    // NewsDetailComponent,
    NewsListThumbComponent,
    PersonalInfoComponent,
    ClassListComponent,
    MyInfoListComponent,
    // RemindListAllComponent,
    // StuListComponent,
    TraceListComponent,
    // ExerciseListComponent,
    ModalPostPageComponent,
    PostClassMessageComponent,
    // DropdownComponent
    MenuBarComponent,
    ReminderComponent,
    StNewsListThumbComponent,
    StSubTitleComponent
  ],
	imports: [CommonModule, IonicModule],
	exports: [DueToRemindListComponent,
    SubTitleComponent,
    StSubTitleComponent,
    MyInfoListComponent,
    // NewsListComponent,
    // NewsDetailComponent,
    NewsListThumbComponent,
    PersonalInfoComponent,
    ClassListComponent,
    // RemindListAllComponent,
    // StuListComponent,
    TraceListComponent,
    ModalPostPageComponent,
    PostClassMessageComponent,
    // DropdownComponent
    MenuBarComponent,
    ReminderComponent,
    StNewsListThumbComponent,
    StSubTitleComponent
  ]
})
export class ComponentsModule {}
