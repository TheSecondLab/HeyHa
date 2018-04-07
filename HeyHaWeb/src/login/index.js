import React from 'react'
import * as style from './style.scss';
import logo from './images/logo.png';

const Login = (props) => {
  return(
    <div className={style.wrap}>
      <div className={style.box}>
        <div className={style.logo}><img src={logo} alt='' /></div>
        <div>
          <div className={style.formItem}><input placeholder='请输入账号' /></div>
          <div  className={style.formItem}><input placeholder='请输入密码' /></div>
        </div>
        <div className={style.forget}>忘记密码</div>
        <div className={style.btn}>登   录</div>
      </div>
    </div>
  )
}

export default Login;