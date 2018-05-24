import React, { Component as C } from 'react'
import { Dialog, Toast } from 'react-weui';

import { Panel, HeaderBar, StuList, PageTitle, SessionOut } from '../components';
import * as style from './style.scss';
import { post } from '../utils/service';

 class PointDetailComp extends C {
  constructor() {
    super();
    this.goBack = this.goBack.bind(this);
    // this.loadStudentList = this.loadStudentList.bind(this);
    this.hideDialog = this.hideDialog.bind(this);
    this.deletePoint = this.deletePoint.bind(this);
    this.loadPointDetail = this.loadPointDetail.bind(this);
    this.loadPointPeople = this.loadPointPeople.bind(this);
    // this.loadOtherStudentList = this.loadOtherStudentList.bind(this);
    this.state = {
      studentList: [],
      otherClassStudentList: [],
      pointDetail: {},
      confirm: false,
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
    }
  }

  componentWillMount() {
    const { classId, addIntegralId } = this.props.location.query;
    // this.loadStudentList(classId);
    // this.loadOtherStudentList(classId);
    this.loadPointDetail(addIntegralId);

  }

  // loadStudentList(id) {
  //   post('/admin/integralQuery/getAttendanceMember', { clazzId: id }).then((data) => {
  //     this.setState({
  //       studentList: data
  //     });

  //   }).catch((err) => {
  //     console.log(err)
  //   });
  // }

  loadPointPeople(id) {
    post('/admin/integralQuery/getIntegralMember', { addIntegralId: id }).then((data) => {
      const studentList = [];
      const otherClassStudentList = [];
      data.forEach((item) => {
        if (item.clazzType) {
          studentList.push(item)
        } else {
          otherClassStudentList.push(item)
        }
      })
      this.setState({
        studentList,
        otherClassStudentList
      });

    }).catch((err) => {
      console.log(err)
    });
  }

  loadPointDetail(id) {
    post('/admin/integralQuery/getIntegralDetails', { addIntegralId: id }, () => { this.setState({show: true}) }).then((data) => {
      this.setState({
        pointDetail: data
      });

      this.loadPointPeople(id)

    }).catch((err) => {
      console.log(err)
    });
  }

  // loadOtherStudentList(id) {
  //   post('/admin/integralQuery/getOtherAttendanceMember', { clazzId: id }).then((data) => {
  //     this.setState({
  //       otherClassStudentList: data
  //     });

  //   }).catch((err) => {
  //     console.log(err)
  //   });
  // }

  deletePoint(id) {
    post('/admin/integralQuery/deleteAddIntegral', { addIntegralId: id }).then((data) => {
      this.hideDialog();
      this.props.history.goBack();

    }).catch((err) => {
      this.props.history.goBack();
      console.log(err);
    });
  }

  hideDialog() {
    this.setState({
      confirm: false
    });
  }
  

  goBack() {
    this.props.history.goBack();
  }

  render() {
    const { studentList, otherClassStudentList, pointDetail, dialogBtn, confirm, show } = this.state;
    return(
      <div style={{paddingTop: '20px'}}>
        <SessionOut show={show} />
        <PageTitle title='积分详情' goBack={this.goBack} />
        <div className={style.wrap}>
          <div className={style.record}>
            <div className={style.item}>
              <div className={style.desc}>分值</div>
              <div className={style.value}><span>{pointDetail.score}</span>分</div>
            </div>
            <div className={style.item}>
              <div className={style.desc}>发放原因</div>
              <div className={style.value}>{pointDetail.reason}</div>
            </div>
            <div className={style.item}>
              <div className={style.desc}>发放日期</div>
              <div className={style.value}>{pointDetail.integralTimeStr}</div>
            </div>
            <div className={style.item}>
              <span className={style.del} onClick={() => { this.setState({confirm: true, addIntegralId: pointDetail.addIntegralId}) }}>删除</span>
            </div>
          </div>
          {
            studentList.length ? 
            <Panel>
              <HeaderBar title='本班学员' hasBorder={true}/>
              <StuList alignment='4' data={studentList}  diffOpa={true} />
            </Panel> : null
          }
          {
            otherClassStudentList.length ?
            <Panel>
              <HeaderBar title='跨班学员' hasBorder={true}/>
              <StuList alignment='4' data={otherClassStudentList}  diffOpa={true} />
            </Panel> : null
          }
        </div>
        <Dialog type="ios" title='提示' buttons={dialogBtn} show={confirm}>
          确定要删除么？
        </Dialog>
      </div>
      )
  }
 }

export default PointDetailComp