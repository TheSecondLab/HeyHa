import React from 'react';
import { renderRoutes } from 'react-router-config';

import Root from './root';
import HomeComponent from './home';
import AttendenceComp from './attendence';
import DestribuyePointComp from './distributePoint';
import SearchComp from './search';
import PointDetailComp from './pointDetail';
import SendPoint from './sendPoint';
import MineInfo from './mineInfo';
import PasswordComp from './password';
import Login from './login';
import CourseProgress from './courseProgress';
import CourseSetting from './courseSetting';
import ClassMoment from './classMoment';
import PostMoment from './postMoment';
import Task from './task';
import TaskSetting from './taskSetting';


const routes = [
  { path: '/pointDetail',
    exact: true,
    component: PointDetailComp
  }, { path: '/sendPoint/:id',
    exact: true,
    component: SendPoint
  }, { path: '/password',
    exact: true,
    component: PasswordComp
  }, { path: '/login',
    exact: true,
    component: Login
  }, { path: '/courseSetting/:id',
    exact: true,
    component: CourseSetting
  }, { path: '/taskSetting/:id',
    exact: true,
    component: TaskSetting
  }, { path: '/postMoment',
    exact: true,
    component: PostMoment
  }, { path: '/search',
    exact: true,
    component: SearchComp
  }, { 
    component: Root,
    path: '/',
    routes: [
      { path: '/home',
        exact: true,
        component: HomeComponent
      }, { path: '/classList/:id',
        exact: true,
        component: AttendenceComp
      }, { path: '/point/:id',
        exact: true,
        component: DestribuyePointComp
      }, { path: '/mineInfo',
        exact: true,
        component: MineInfo
      }, { path: '/courseProgress/:id',
        exact: true,
        component: CourseProgress
      }, { path: '/classMoment/:id',
        exact: true,
        component: ClassMoment
      }, { path: '/task/:id',
        exact: true,
        component: Task
      }
    ]
  }
];
 

export default routes;