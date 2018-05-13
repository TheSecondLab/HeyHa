import React, { Component as C } from 'react';
import { renderRoutes } from 'react-router-config';
import { Dialog, Toast } from 'react-weui';

import './reset.scss';

import * as style from './style.scss';
import Header from '../components/header';
import SideBar from '../components/sideBar';
import ClassCard from '../components/classCard';
import { post } from '../utils/service';


class Root extends C {
  constructor(){
    super();
    this.pagePush = this.pagePush.bind(this);
    this.logout = this.logout.bind(this);
    this.hideDialog = this.hideDialog.bind(this);
    this.state = {
      dialogBtn: [
        {
          type: 'default',
          label: '取消',
          onClick: this.hideDialog
        },
        {
          type: 'primary',
          label: '确定',
          onClick: () => this.logout()
        }
      ]
    };
  }

  componentWillMount() {
    // console.log(`isapp:${typeof cordova}`)
    // if(window.isApp) {
      // const permissions = cordova.plugins.permissions;
      // permissions.requestpermissions(permissions.WRITE_EXTERNAL_STORAGE);
      // permissions.requestPermissions(permissions.CAMERA);
    // }

    if (this.props.location.pathname === '/' || !localStorage.getItem('userMsg'))
      this.props.history.replace('/login');
  
  }

  pagePush(page) {
    return () => {
      this.props.history.push(page);
    }
  }

  hideDialog() {
    this.setState({
      confirm: false
    });
  }

  logout() {
    post('/admin/logout', {}).then((data) => {
      localStorage.removeItem('userMsg');
      this.props.history.replace('/login');
    }).catch((err) => {
      console.log(err)
    });;
  }

  render() {
    const { userMsg } = localStorage;
    const { confirm, dialogBtn } = this.state;
    return (
      <div style={{paddingTop: '20px'}}>
        <Header userMsg={userMsg} />
        <div className={style.wrap}>
          <SideBar pagePush={this.pagePush} location={this.props.location} history={this.props.history} logOut={() => {this.setState({confirm: true})}} />
          <div className={style.content}>
            {renderRoutes(this.props.route.routes)}
          </div>
          
        </div>
        <Dialog type="ios" title='提示' buttons={dialogBtn} show={confirm}>
          确定要退出么？
        </Dialog>
      </div>
    )
  }
}

export default Root;