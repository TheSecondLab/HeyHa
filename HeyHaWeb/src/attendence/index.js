import React, { Component as C } from 'react'

import { HeaderBar, StuList, SideMenu } from '../components/index';
import * as style from './style.scss';
import { post } from '../utils/service';


const HeaderOpa = () => (
  <div className={style.opaWrap}>
    <div className={style.input}><span onClick={() => { window.location.href = '/#/search' }}>跨班搜索</span></div>
    <div className={style.lightBtn}><button>全选</button></div>
    <div className={style.darkBtn}><button>确定</button></div>
  </div>
)


class AttendenceComp extends C {
  constructor() {
    super();
    this.choseItem = this.choseItem.bind(this);
    this.sellectAll = this.sellectAll.bind(this);
    this.goSearch = this.goSearch.bind(this);
    this.goOtherClass = this.goOtherClass.bind(this);
    this.loadClassInfo = this.loadClassInfo.bind(this);
    this.checkAttendence = this.checkAttendence.bind(this);
    this.state = {
      stuList: [{}],
      selectedList: [],
      otherClassStudentList: [],
      classInfo: {}
    };
  }

  componentWillMount() {
    const { id } = this.props.match.params;

    let otherClassStudent = [];
    if (this.props.location.query && this.props.location.query.otherClassStudent) {
      otherClassStudent = this.props.location.query.otherClassStudent;
    }
    if (otherClassStudent.length) {
      this.setState({
        otherClassStudentList: otherClassStudent
      });
    }
    this.loadClassInfo(id)
    this.loadClassStudent(id);
    
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

  loadClassStudent(id) {
    post('/admin/integralQuery/getAttendanceMember', { clazzId: id }).then((data) => {
      this.setState({
        stuList: data
      });

    }).catch((err) => {
      console.log(err)
    });
  }

  sellectAll() {
    const selectedList = [];
    const stuList = [];
    this.state.stuList.forEach((item) => {
      item.status = !item.status ? true : item.status;
      if(item.attendanceType) item.status = false;
      if(item.status) selectedList.push(item.id)
      stuList.push(item);
    });

    this.setState({
      stuList,
      selectedList
    });
  }

  choseItem(id) {
    const selectedList = [];
    const stuList = this.state.stuList.map((item) => {
      if(item.id === id) {
        item.status = !item.status;
      }
      if(item.status) selectedList.push(item.id)
      return item;
    });

    this.setState({
      stuList,
      selectedList
    });
  }

  goSearch() {
    const { id } = this.props.match.params;
    this.props.history.push({
      pathname:'/search',
      query: { id, page: '/classList' },
    })
  }

  goOtherClass() {
    this.props.history.push('/home')
  }

  checkAttendence() {
    const { id } = this.props.match.params;
    const { otherClassStudentList, selectedList } = this.state;
    const otherClassStudentId = otherClassStudentList.map(item => item.id);
    const memberId = selectedList.concat(otherClassStudentId);
    if (!memberId.length) return;
    post('/admin/clazz/addAttendanceLog', { clazzId: id, memberId }).then((data) => {
      this.setState({ selectedList: [], otherClassStudentList: [] })
      this.loadClassStudent(id);
    }).catch((err) => {
      console.log(err);
    });
  }

  render() {
    const { stuList, otherClassStudentList, classInfo } = this.state;
    const { id } = this.props.match.params;

    return (
      <div>
        <div className={style.header}>
          <div>
            <div className={style.name}>{classInfo.name}</div>
            <div className={style.time}>{classInfo.clazzTime}</div>
          </div>
          <div>
            <span className={style.else} onClick={this.goOtherClass}>其他班级</span>
          </div>
        </div>
        <div className={style.content}>
          <SideMenu active={1} id={id} classInfo={classInfo} />
          <div className={style.menuContent}>
            <div className={style.box}>
              <HeaderBar title='本班学员'>
              <div className={style.opaWrap}>
                <div className={style.input}><span onClick={this.goSearch}>跨班搜索</span></div>
                <div className={style.lightBtn} onClick={this.sellectAll}><button>全选</button></div>
                <div className={style.darkBtn} onClick={this.checkAttendence}><button>确定</button></div>
              </div>
              </HeaderBar>
              <StuList alignment='3' data={stuList} choseItem={this.choseItem} />
              {
                otherClassStudentList.length
                  ? <div>
                      <HeaderBar title='跨班学员' />
                      <StuList alignment='3' data={otherClassStudentList} choseItem={this.choseItem} />
                    </div>
                  : null
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AttendenceComp