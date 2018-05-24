import React, { Component as C } from 'react';
import { Dialog, Toast } from 'react-weui';

import * as style from './style.scss';
import { HeaderBar, SideMenu, ClassInfo, SessionOut } from '../components/index';
import { post } from '../utils/service';

const HeaderOpa = (props) => (
  <div className={style.opaWrap}>
    <div className={style.darkBtn}><button onClick={props.pagePush}>添加</button></div>
  </div>
)

class DestribuyePointComp extends C {
  constructor() {
    super();
    this.goSendPoint = this.goSendPoint.bind(this);
    this.loadPointList = this.loadPointList.bind(this);
    this.deletePoint = this.deletePoint.bind(this);
    this.hideDialog = this.hideDialog.bind(this);
    this.loadClassInfo = this.loadClassInfo.bind(this);
    this.detailPointCont = this.detailPointCont.bind(this);
    this.state = {
      pointList: [],
      confirm: false,
      addIntegralId: 0,
      classInfo: {},
      dialogBtn: [
        {
          type: 'default',
          label: 'Cancel',
          onClick: this.hideDialog
        },
        {
          type: 'primary',
          label: 'Ok',
          onClick: () => this.deletePoint(this.state.addIntegralId)
        }
    ]
    };
  }

  componentWillMount() {
    const { id } = this.props.match.params;
    this.loadPointList(id);
    this.loadClassInfo(id)
  }

  loadPointList(id) {
    post('/admin/integralQuery/getAddIntegral', { clazzId: id }, () => { this.setState({show: true}) }).then((data) => {
      this.setState({
        pointList: data
      });

    }).catch((err) => {
      console.log(err);
    });
  }

  goSendPoint(id) {
    return () => { this.props.history.push(`/sendPoint/${id}`); }
  }

  detailPointCont(addIntegralId) {
    const { id } = this.props.match.params;
    this.props.history.push({
      pathname: '/pointDetail',
      query: {
        addIntegralId,
        classId: id
      }
    });
  }

  loadClassInfo(id) {
    post('/admin/clazz/getClazz', { clazzId: id }).then((data) => {
      this.setState({
        classInfo: data
      });

    }).catch((err) => {
      console.log(err)
    });
  }

  deletePoint(id) {
   
    post('/admin/integralQuery/deleteAddIntegral', { addIntegralId: id }).then((data) => {
      this.hideDialog();
      this.setState({
        pointList: this.state.pointList.filter((item) => (item.addIntegralId != id))
      });

    }).catch((err) => {
      this.hideDialog();
      console.log(err);
    });
  }

  goOtherClass() {
    this.props.history.push('/home')
  }

  hideDialog() {
    this.setState({
      confirm: false
    });
  }

  render() {
    const { id } = this.props.match.params;
    const { pointList, confirm, dialogBtn, classInfo, show } = this.state;
    return (
      <div>
        <SessionOut show={show} />
        <ClassInfo classInfo={classInfo} goOtherClass={this.goOtherClass} />
        <div className={style.content}>
          <SideMenu active={2} id={id} />
          <div className={style.menuContent}>
            <div className={style.wrap}>
              <div className={style.headerBar}>
                <HeaderBar title='积分发放' hasBorder={true}>
                  <HeaderOpa pagePush={this.goSendPoint(id)} />
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
                    pointList.map((item, idx) => {
                      return (
                        <tr key={`item-${idx}`}>
                          <td onClick={() => { this.detailPointCont(item.addIntegralId) }}>{item.integralTimeStr}</td>
                          <td>{item.reason}</td>
                          <td><div>{item.memberName}</div></td>
                          <td>{item.score}</td>
                          <td><span className={style.del} onClick={() => { this.setState({confirm: true, addIntegralId: item.addIntegralId}) }}>删除</span></td>
                        </tr>
                      );
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Dialog type="ios" title='提示' buttons={dialogBtn} show={confirm}>
          确定要删除么？
        </Dialog>
      </div>
    )
  }
}

export default DestribuyePointComp