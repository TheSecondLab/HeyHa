import React, { Component as C } from 'react';

import * as style from './style.scss';
import { HeaderBar, SideMenu } from '../components/index';
import { post } from '../utils/service';

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
    this.loadPointList = this.loadPointList.bind(this);
    this.state = {
      pointList: []
    }
  }

  componentWillMount() {
    const { id } = this.props.match.params;
    this.loadPointList(id);
  }

  loadPointList(id) {
    post('/admin/integralQuery/getAddIntegral', { clazzId: id }).then((data) => {
      this.setState({
        pointList: data
      });

    }).catch((err) => {
      console.log(err)
    });
  }

  addStu(id) {
    this.props.history.push('/sendPoint');
  }

  deleteStu(recordId) {
    const { id } = this.props.match.params;
    this.props.history.push({
      pathname: '/pointDetail',
      query: {
        recordId,
        classId: id
      }
    });
  }
  render() {
    const { id } = this.props.match.params;
    const { pointList } = this.state;
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
          <SideMenu active={2} id={id} />
          <div className={style.menuContent}>
            <div className={style.wrap}>
              <div className={style.headerBar}>
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
                  {
                    pointList.map((item) => {
                      return (
                        <tr>
                          <td>{item.integralTimeStr}</td>
                          <td>{item.reason}</td>
                          <td><div>{item.memberName}</div></td>
                          <td>{item.score}</td>
                          <td><span className={style.del} onClick={() => { this.deleteStu(item.id) }}>删除</span></td>
                        </tr>
                      );
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DestribuyePointComp