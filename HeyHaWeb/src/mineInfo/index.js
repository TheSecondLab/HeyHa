import React, { Component as C } from 'react';
import { Panel } from '../components';
import * as style from './style.scss';

class MineInfo extends C {
  constructor() {
    super();
    this.changePassword = this.changePassword.bind(this);
  }

  changePassword() {
    this.props.history.push('/password');
  }

  render() {
    return (
      <div>
        <div className={style.title}>
          <span className={style.text}>我的信息</span>
          <div className={style.btn} onClick={this.changePassword}>修改密码</div>
        </div>
        <Panel>
          <div className={style.info}>
            <div><label>姓名</label><span>张大力</span></div>
            <div><label>性别</label><span>男</span></div>
            <div><label>姓名</label><span>张大力</span></div>
            <div><label>姓名</label><span>张大力</span></div>
            <div><label>姓名</label><span>张大力</span></div>
            <div><label>姓名</label><span>张大力</span></div>
          </div>
        </Panel>
      </div>
    )
  }
}

export default MineInfo