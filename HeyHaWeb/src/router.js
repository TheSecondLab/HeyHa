import React from 'react';
import { renderRoutes } from 'react-router-config';

import Root from './root';
import HomeComponent from './home';
import AttendenceComp from './attendence';
import DestribuyePointComp from './distributePoint';
import SearchComp from './search';
import PointDetailComp from './pointDetail';


const routes = [
  { 
    component: Root,
    exact: true,
    routes: [
      { path: '/',
        exact: true,
        component: HomeComponent
      },
      { path: '/classList',
        exact: true,
        component: AttendenceComp
      },
      // { path: '/search',
      //   exact: true,
      //   component: SearchComp
      // },
      { path: '/point',
        exact: true,
        component: DestribuyePointComp
      },
      
    ]
  },
  { path: '/pointDetail',
    exact: true,
    component: PointDetailComp
  }
];

export default routes;