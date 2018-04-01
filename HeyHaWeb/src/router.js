import React from 'react';
import { renderRoutes } from 'react-router-config';

import Root from './root';
import HomeComponent from './home';
import AttendenceComp from './attendence';
import SearchComp from './search';


const routes = [
  { component: SearchComp,
    path: '/'
    // routes: [
    //   { path: '/',
    //     exact: true,
    //     component: AttendenceComp
    //   }
    // ]
  }
];

export default routes;