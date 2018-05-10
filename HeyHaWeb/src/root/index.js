import React, { Component as C } from 'react';
import { renderRoutes } from 'react-router-config';
import './reset.scss';

import * as style from './style.scss';
import Header from '../components/header';
import SideBar from '../components/sideBar';
import ClassCard from '../components/classCard';


class Root extends C {
  constructor(){
    super();
    this.pagePush = this.pagePush.bind(this);
  }

  componentWillMount() {
    if (this.props.location.pathname === '/')
      this.props.history.push('/login');
  }

  pagePush(page) {
    return () => {
      this.props.history.push(page);
    }
  }
  render() {
    return (
      <div style={{paddingTop: '20px'}}>
        <Header />
        <div className={style.wrap}>
          <SideBar pagePush={this.pagePush} location={this.props.location} history={this.props.history} />
          <div className={style.content}>
            {renderRoutes(this.props.route.routes)}
          </div>
          
        </div>
      </div>
    )
  }
}

export default Root;