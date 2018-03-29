import React from 'react'
import * as style from './style.scss';

const Header = () => (
  <div className={style.header}>
    <div className={style.logo}></div>
    <div className={style.info}>
      <div className={style.iphoto}><img src='http://www.qqzhi.com/uploadpic/2014-09-23/000247589.jpg' alt='' /></div>
      <div className={style.person}>
        <div className={style.name}>张大力</div>
        <div className={style.phone}>13222222222</div>
      </div>
    </div>
  </div>
)

export default Header;