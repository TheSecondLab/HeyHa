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


const routes = [
  { 
    component: Root,
    exact: true,
    // path: '/',
    routes: [
      { path: '/',
        exact: true,
        component: HomeComponent
      },
      { path: '/classList',
        exact: true,
        component: AttendenceComp
      },
      { path: '/search',
        exact: true,
        component: SearchComp
      },
      { path: '/point',
        exact: true,
        component: DestribuyePointComp
      },
      { path: '/mineInfo',
        exact: true,
        component: MineInfo
      },
      { path: '/courseProgress',
        exact: true,
        component: CourseProgress
      },
      { path: '/classMoment',
        exact: true,
        component: ClassMoment
      },
      
    ]
  },
  // { path: '/pointDetail',
  //   exact: true,
  //   component: PointDetailComp
  // },
  // { path: '/sendPoint',
  //   exact: true,
  //   component: SendPoint
  // },
  // { path: '/password',
  //   exact: true,
  //   component: PasswordComp
  // },
  // { path: '/login',
  //   exact: true,
  //   component: Login
  // },
  // { path: '/courseSetting',
  //   exact: true,
  //   component: CourseSetting
  // },
  // { path: '/postMoment',
  //   exact: true,
  //   component: PostMoment
  // },
];





// const Root = (props) => (
//   <div>
//     Root
//   </div>
// )
// const Home = (props) => (
//   <div>
//     Home
//   </div>
// )
// const Child = (props) => (
//   <div>
//     Child
//   </div>
// )
// const GrandChild = (props) => (
//   <div>
//     GrandChild
//   </div>
// )


// const routes = [
//   { component: Root,
//     routes: [
//       { path: '/',
//         exact: true,
//         component: Home
//       },
//       { path: '/child/:id',
//         component: Child,
//         routes: [
//           { path: '/child/:id/grand-child',
//             component: GrandChild
//           }
//         ]
//       }
//     ]
//   }
// ]
export default routes;