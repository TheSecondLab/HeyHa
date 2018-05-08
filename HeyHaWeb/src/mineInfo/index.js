import React, { Component as C } from 'react';
import { Panel } from '../components';
import * as style from './style.scss';
import { post } from '../utils/service';

class MineInfo extends C {
  constructor() {
    super();
    this.changePassword = this.changePassword.bind(this);
    this.state = {
      coachMsg: []
    }
  }
  componentWillMount() {
    this.loadCoachMessage();
  }

  changePassword() {
    this.props.history.push('/password');
  }

  loadCoachMessage(id) {
    post('/admin/coached', {}).then((data) => {
      const coachMsg = [{
        label: '性别',
        value: data.sexStr
      },{
        label: '入职时间',
        value: data.inTimeStr
      },{
        label: '联系电话',
        value: data.tel
      },{
        label: '身份证号',
        value: data.userId
      },{
        label: '详细住址',
        value: data.address
      },{
        label: '职级',
        value: data.jobLevel
      },{
        label: '段位',
        value: data.levelName
      }]
      this.setState({
        coachMsg
      });

    }).catch((err) => {
      console.log(err)
    });
  }

  render() {
    const { coachMsg } = this.state;
    return (
      <div>
        <div className={style.title}>
          <span className={style.text}>我的信息</span>
          <div className={style.btn} onClick={this.changePassword}>修改密码</div>
        </div>
        <Panel>
          <div className={style.info}>
          {
            coachMsg.map((item, idx) => (<div key={`item-${idx}`}><label>{item.label}</label><span>{item.value}</span></div>))
          }
          </div>
        </Panel>
      </div>
    )
  }
}

export default MineInfo