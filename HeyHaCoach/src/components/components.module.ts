import { NgModule } from '@angular/core';
import { DueToRemindListComponent } from './due-to-remind-list/due-to-remind-list';
import { IonicModule } from 'ionic-angular';

import { BrowserModule } from '@angular/platform-browser';
import { SubTitleComponent } from './sub-title/sub-title';
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
// import { DropdownComponent } from './dropdown/dropdown';

@NgModule({
	declarations: [DueToRemindListComponent,
    SubTitleComponent,
    // NewsListComponent,
    // NewsDetailComponent,
    NewsListThumbComponent,
    ClassListComponent,
    // RemindListAllComponent,
    // StuListComponent,
    TraceListComponent,
    // ExerciseListComponent,
    ModalPostPageComponent,
    // DropdownComponent
  ],
	imports: [BrowserModule, IonicModule],
	exports: [DueToRemindListComponent,
    SubTitleComponent,
    // NewsListComponent,
    // NewsDetailComponent,
    NewsListThumbComponent,
    ClassListComponent,
    // RemindListAllComponent,
    // StuListComponent,
    TraceListComponent,
    ModalPostPageComponent,
    // DropdownComponent
  ]
})
export class ComponentsModule {}
