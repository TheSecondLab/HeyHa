// import React from 'react';
import { renderRoutes } from 'react-router-config';
import './reset.scss';

// const Root = ({ route }) => (
//   <div>
//     {renderRoutes(route.routes)}
//   </div>
// )

// export default Root;


import React from 'react'
import * as style from './style.scss';
import Header from '../components/header';
import SideBar from '../components/sideBar';
import ClassCard from '../components/classCard';

export const Root = ({ route }) => {
  return (
    <div>
      <Header />
      <div className={style.wrap}>
        <SideBar />
        <div className={style.content}>
          {renderRoutes(route.routes)}
        </div>
        
      </div>
    </div>
  )
}

export default Root;