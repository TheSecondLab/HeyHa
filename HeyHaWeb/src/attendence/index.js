import React from 'react'

import { HeaderBar, StuList} from '../components/index';
import * as style from './style.scss';

const HeaderOpa = () => (
  <div className={style.opaWrap}>
    <div className={style.input}><input placeholder='跨班搜索' /></div>
    <div className={style.lightBtn}><button>全选</button></div>
    <div className={style.darkBtn}><button>确定</button></div>
  </div>
)

const AttendenceComp = (props) => (
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
      <div className={style.menuList}>
        <div className={style.item}>学员出勤</div>
        <div className={style.item}>积分发放</div>
        <div className={style.item}>课程进度</div>
        <div className={style.item}>修炼任务</div>
        <div className={style.item}>班级动态</div>
      </div>
      <div className={style.menuContent}>
        <HeaderBar title='本班学员' component={HeaderOpa()}/>
        <StuList alignment='3' />
      </div>
    </div>
  </div>
)

export default AttendenceComp