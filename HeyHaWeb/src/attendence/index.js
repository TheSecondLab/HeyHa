import React, { Component as C } from 'react'

import { HeaderBar, StuList, SideMenu } from '../components/index';
import * as style from './style.scss';

const HeaderOpa = () => (
  <div className={style.opaWrap}>
    <div className={style.input}><input placeholder='跨班搜索' onFocus={() => {window.location.href = '/#/search'}} /></div>
    <div className={style.lightBtn}><button>全选</button></div>
    <div className={style.darkBtn}><button>确定</button></div>
  </div>
)


class AttendenceComp extends C {
  render() {
    return (
      <div>
        <div className={style.header}>
          <div>
            <div className={style.name}>红黑精英班</div>
            <div className={style.time}>每周六、日10：00-11：00</div>
          </div>
          <div>
            <span className={style.else}>其他班级</span>
          </div>
        </div>
        <div className={style.content}>
          <SideMenu />
          <div className={style.menuContent}>
            <div className={style.box}>
              <HeaderBar title='本班学员'>
                <HeaderOpa />
              </HeaderBar>
              <StuList alignment='3' />
            </div>
            <div className={style.box}>
              <HeaderBar title='本班学员'>
                <HeaderOpa />
              </HeaderBar>
              <StuList alignment='3' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AttendenceComp