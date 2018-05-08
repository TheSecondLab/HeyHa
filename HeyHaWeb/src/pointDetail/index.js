import React, { Component as C } from 'react'
import { Panel, HeaderBar, StuList, PageTitle } from '../components';
import * as style from './style.scss';
import { post } from '../utils/service';

 class PointDetailComp extends C {
  constructor() {
    super();
    this.goBack = this.goBack.bind(this);
    this.loadStudentList = this.loadStudentList.bind(this);
    this.loadOtherStudentList = this.loadOtherStudentList.bind(this);
    this.state = {
      studentList: [],
      otherClassStudentList: []
    }
  }

  componentWillMount() {
    const { classId, recordId } = this.props.location.query;
    this.loadStudentList(classId);
    this.loadOtherStudentList(classId)

  }

  loadStudentList(id) {
    post('/admin/integralQuery/getAttendanceMember', { clazzId: id }).then((data) => {
      this.setState({
        studentList: data
      });

    }).catch((err) => {
      console.log(err)
    });
  }
  loadOtherStudentList(id) {
    post('/admin/integralQuery/getOtherAttendanceMember', { clazzId: id }).then((data) => {
      this.setState({
        otherClassStudentList: data
      });

    }).catch((err) => {
      console.log(err)
    });
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {
    const { studentList, otherClassStudentList } = this.state;
    return(
      <div style={{paddingTop: '20px'}}>
        <PageTitle title='积分详情' goBack={this.goBack} />
        <div className={style.wrap}>
          <div className={style.record}>
            <div className={style.item}>
              <div className={style.desc}>分值</div>
              <div className={style.value}><span>100</span>分</div>
            </div>
            <div className={style.item}>
              <div className={style.desc}>发放原因</div>
              <div className={style.value}>刻苦练习</div>
            </div>
            <div className={style.item}>
              <div className={style.desc}>发放日期</div>
              <div className={style.value}>2018/12/1</div>
            </div>
            <div className={style.item}>
              <span className={style.del}>删除</span>
            </div>
          </div>
          <Panel>
            <HeaderBar title='本班学员' hasBorder={true}/>
            <StuList alignment='4' data={studentList} />
          </Panel>
          <Panel>
            <HeaderBar title='跨班学员' hasBorder={true}/>
            <StuList alignment='4' data={otherClassStudentList} />
          </Panel>
        </div>
      </div>
      )
  }
 }

export default PointDetailComp