import React from 'react'
import * as style from './style.scss';

const Header = (props) => {
  const userMsg = props.userMsg ? JSON.parse(props.userMsg) : {};
  return (
    <div className={style.header}>
      <div className={style.logo}></div>
      <div className={style.info}>
        <div className={style.iphoto}><img src={userMsg.photoUrl} alt='' /></div>
        <div className={style.person}>
          <div className={style.name}>{userMsg.name}</div>
          <div className={style.phone}>{userMsg.tel}</div>
        </div>
      </div>
    </div>
  )
}

export default Header;