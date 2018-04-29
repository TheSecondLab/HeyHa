import React, { Component as C } from 'react';

import * as style from './style.scss';
import { HeaderBar, SideMenu } from '../components/index';

const HeaderOpa = (props) => (
  <div className={style.opaWrap}>
    <div className={style.darkBtn}><button onClick={props.pagePush}>添加</button></div>
  </div>
)

class DestribuyePointComp extends C {
  constructor() {
    super();
    this.addStu = this.addStu.bind(this);
    this.deleteStu = this.deleteStu.bind(this);
  }

  addStu(id) {
    this.props.history.push('/sendPoint');
  }

  deleteStu(id) {
    this.props.history.push('/pointDetail');
  }
  render() {
    return (
      <div className={style.content}>
        <SideMenu />
        <div className={style.menuContent}>
        <div className={style.wrap}>
          <div className={style.header}>
            <HeaderBar title='积分发放' hasBorder={true}>
              <HeaderOpa pagePush={this.addStu} />
            </HeaderBar>
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
                <td><span className={style.del} onClick={this.deleteStu}>删除</span></td>
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
  }
}

export default DestribuyePointComp