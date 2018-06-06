import React, { Component as C } from 'react'
import { HeaderBar, StuList, SideMenu, ClassInfo, SessionOut } from '../components/index';
import * as style from './style.scss';
import { post } from '../utils/service';
localStorage.setItem('IDRECORD', JSON.stringify({}))
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
      classInfo: {},
      unAddOtherClassStu: []
    };
  }

  componentWillMount() {
    const { id } = this.props.match.params;

    let otherClassStudent = [];
    if (this.props.location.query && this.props.location.query.otherClassStudent) {
      otherClassStudent = this.props.location.query.otherClassStudent;
    }
    
    if (otherClassStudent.length || !!+localStorage.getItem('flag')) {
      const IDRECORD = JSON.parse(localStorage.getItem('IDRECORD'));
      const noRepeatData = []

      // 处理搜索页面过来的重复数据 & 叠加之前选中但是尚未提价的跨班学员
      otherClassStudent.forEach(item => {
        
        if (!IDRECORD[item.id]) {
          IDRECORD[item.id] = item;
          localStorage.setItem('IDRECORD', JSON.stringify(IDRECORD));
          noRepeatData.push(item);
        }
        return;
      })
      const cacheOtherStu = window.localStorage.getItem('cacheOtherStu') ? JSON.parse(window.localStorage.getItem('cacheOtherStu')) : [];
      const handledData = Array.from(new Set(cacheOtherStu.concat(noRepeatData)));
      this.setState({
        unAddOtherClassStu: handledData,
        otherClassStudentList: handledData
      });
      window.localStorage.setItem('cacheOtherStu', JSON.stringify(handledData));
      localStorage.setItem('flag', 0)
    } else {
      window.localStorage.setItem('cacheOtherStu', '');
      window.localStorage.setItem('IDRECORD', JSON.stringify({}));
      this.loadOtherClassStudent(id);
    }

    this.loadClassInfo(id)
    this.loadClassStudent(id);
    
  }
  
  loadClassInfo(id) {
    post('/admin/clazz/getClazz', { clazzId: id }, () => { this.setState({show: true}) }).then((data) => {
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

  loadOtherClassStudent(id) {
    post('/admin/integralQuery/getOtherAttendanceMember', { clazzId: id }).then((data) => {
      this.setState({
        otherClassStudentList: data.concat(this.state.unAddOtherClassStu)
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
    const { unAddOtherClassStu, selectedList } = this.state;
    const otherClassStudentId = unAddOtherClassStu.map(item => item.id);
    const memberId = selectedList.concat(otherClassStudentId);
    if (!memberId.length) return;
    post('/admin/clazz/addAttendanceLog', { clazzId: id, memberId }, () => { this.setState({show: true}) }).then((data) => {
      this.setState({ selectedList: [], unAddOtherClassStu: [] })
      this.loadClassStudent(id);
      this.loadOtherClassStudent(id);
      window.localStorage.setItem('cacheOtherStu', '');
      window.localStorage.setItem('IDRECORD', JSON.stringify({}));
    }).catch((err) => {
      console.log(err);
    });
  }

  render() {
    const { stuList, otherClassStudentList, classInfo, show } = this.state;
    const { id } = this.props.match.params;
    return (
      <div>
        <SessionOut show={show} />
        <ClassInfo classInfo={classInfo} goOtherClass={this.goOtherClass} />
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
              <StuList alignment='3' data={stuList} choseItem={this.choseItem} diffOpa={true} />
              {
                otherClassStudentList.length
                  ? <div>
                      <HeaderBar title='跨班学员' />
                      <StuList alignment='3' data={otherClassStudentList} choseItem={this.choseItem}  diffOpa={true}/>
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