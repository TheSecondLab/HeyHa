import React from 'react'

import * as style from './style.scss';
import { HeaderBar} from '../components/index';

const HeaderOpa = () => (
  <div className={style.opaWrap}>
    <div className={style.darkBtn}><button>添加</button></div>
  </div>
)

const DestribuyePointComp = (props) => (
  <div className={style.content}>
    <div className={style.menuList}>
      <div className={style.item}>学员出勤</div>
      <div className={style.item}>积分发放</div>
      <div className={style.item}>课程进度</div>
      <div className={style.item}>修炼任务</div>
      <div className={style.item}>班级动态</div>
    </div>
    <div className={style.menuContent}>
    <div className={style.wrap}>
      <div className={style.header}>
        <HeaderBar title='积分发放' component={HeaderOpa()} hasBorder={true}/>
      </div>
      <table className={style.pointTable}>
        <thead>
          <tr>
            <td>发放日期</td>
            <td>原因</td>
            <td>对象</td>
            <td>分值</td>
            <td>操作</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>18/2/1</td>
            <td>课堂纪律差</td>
            <td><div>约翰列侬，约翰列侬，约翰列侬，约翰列侬，约翰列侬，约翰列侬，</div></td>
            <td>100</td>
            <td><span className={style.del}>删除</span></td>
          </tr>
          <tr>
            <td>18/2/1</td>
            <td>课堂纪律差</td>
            <td><div>约翰列侬，约翰列侬，约翰列侬，约翰列侬，约翰列侬，约翰列侬，</div></td>
            <td>100</td>
            <td><span className={style.del}>删除</span></td>
          </tr>
          <tr>
            <td>18/2/1</td>
            <td>课堂纪律差</td>
            <td><div>约翰列侬，约翰列侬，约翰列侬，约翰列侬，约翰列侬，约翰列侬，</div></td>
            <td>100</td>
            <td><span className={style.del}>删除</span></td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  </div>
)

export default DestribuyePointComp