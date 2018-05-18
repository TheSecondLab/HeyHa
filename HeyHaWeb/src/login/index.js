import React from 'react'
import * as style from './style.scss';
import logo from './images/logo.png';

import { post } from '../utils/service';

class Login extends React.Component {
  constructor() {
    super();
    this.login = this.login.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    this.state = {
      username,
      password
    }
  }

  login() {
    const { username, password } = this.state;

    post('/admin/login', {
      username,
      password
    }).then((data) => {
      // console.log(`then data: ${JSON.stringify(data)}`);
      var storage = window.localStorage;

      storage.setItem('userMsg', JSON.stringify(data)); 
      storage.setItem('username', username); 
      storage.setItem('password', password); 
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

  changeUsername(e) {
    this.setState({username: e.target.value})
  }

  changePassword(e) {
    this.setState({password: e.target.value})
  }
  
  render() {
    const { username, password } = this.state;
    document.body.style.paddingTop = '0';

    return (
      <div className={style.wrap}>
        <div className={style.box}>
          <div className={style.logo}><img src={logo} alt='' /></div>
          <div>
            <div className={style.formItem}><input placeholder='请输入账号' value={username} onChange={this.changeUsername} /></div>
            <div  className={style.formItem}><input placeholder='请输入密码' type='password' value={password} onChange={this.changePassword} /></div>
          </div>
          {/* <div className={style.forget}>忘记密码</div> */}
          <div className={style.btn} onClick={this.login}>登   录</div>
        </div>
      </div>
    );
  }
}

export default Login;