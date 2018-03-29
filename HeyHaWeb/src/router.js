import React from 'react';
import { renderRoutes } from 'react-router-config';

import Root from './root';
import HomeComponent from './home';


const routes = [
  { component: Root,
    routes: [
      { path: '/',
        exact: true,
        component: HomeComponent
      }
    ]
  }
];

export default routes;