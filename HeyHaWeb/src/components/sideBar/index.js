import React from 'react'
import * as style from './style.scss';
import img1 from './images/class.png';
import img2 from './images/setting.png';
import img3 from './images/logout.png';

const SideBar = () => (
  <div className={style.sideBar}>
    <div className={`${style.item} ${style.act}`}>
      <div className={style.icon}><img src={img1} alt='' /></div>
      <span>我的班级</span>
    </div>
    <div className={style.item}>
      <div className={style.icon}><img src={img2} alt='' /></div>
      <span>我的信息</span>
    </div>
    <div className={style.item}>
      <div className={style.icon}><img src={img3} alt='' /></div>
      <span>退出登录</span>
    </div>
  </div>
)

export default SideBar