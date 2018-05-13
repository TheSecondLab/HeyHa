import React from 'react'
import * as style from './style.scss';
import logo from './images/logo.png';

import { post } from '../utils/service';

class Login extends React.Component {
  constructor() {
    super();
    this.login = this.login.bind(this);
  }

  login() {
    post('/admin/login', {
      username: 'zdl',
      password: '123456'
    }).then((data) => {
      // console.log(`then data: ${JSON.stringify(data)}`);
      var storage = window.localStorage;

      storage.setItem('userMsg', JSON.stringify(data)); 
      this.props.history.replace('/home');

      post('/admin/chart/relation', {}).then((data) => {
        console.log(data)
      }).catch(e=>{
        console.log('111',e)
      })

    }).catch((err) => {
      console.log(err)
    });
  }
  
  render() {
    return (
      <div className={style.wrap}>
        <div className={style.box}>
          <div className={style.logo}><img src={logo} alt='' /></div>
          <div>
            <div className={style.formItem}><input placeholder='请输入账号' /></div>
            <div  className={style.formItem}><input placeholder='请输入密码' /></div>
          </div>
          <div className={style.forget}>忘记密码</div>
          <div className={style.btn} onClick={this.login}>登   录</div>
        </div>
      </div>
    );
  }
}

export default Login;