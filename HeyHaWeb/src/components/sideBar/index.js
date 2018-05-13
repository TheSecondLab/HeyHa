import React from 'react'
import * as style from './style.scss';
import img1 from './images/class.png';
import img2 from './images/setting.png';
import img3 from './images/logout.png';

const SideBar = (props) => {
  const { location, history, logOut } = props;
  
  return (
    <div className={style.sideBar}>
      <div className={location.pathname !== '/mineInfo' ? `${style.item} ${style.act}` : style.item } onClick={() => {history.push('/home')}}>
        <div className={style.icon}><img src={img1} alt='' /></div>
        <span>我的班级</span>
      </div>
      <div className={location.pathname === '/mineInfo' ? `${style.item} ${style.act}` : style.item } onClick={() => {history.push('/mineInfo')}}>
        <div className={style.icon}><img src={img2} alt='' /></div>
        <span>我的信息</span>
      </div>
      <div className={style.item} onClick={logOut}>
        <div className={style.icon}><img src={img3} alt='' /></div>
        <span>退出登录</span>
      </div>
    </div>
  )
}

export default SideBar