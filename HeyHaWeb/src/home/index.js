import React from 'react'
import * as style from './style.scss';
import Header from '../components/header';
import SideBar from '../components/sideBar';
import ClassCard from '../components/classCard';

export const HomeComponent = () => (
  <div>
    <Header />
    <div className={style.wrap}>
      <SideBar />
      <div className={style.content}>
        <ClassCard />
      </div>
      
    </div>
  </div>
)

export default HomeComponent;