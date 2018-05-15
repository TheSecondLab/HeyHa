import React, { Component as C } from 'react'

import { HeaderBar, StuList, SideMenu, ClassInfo } from '../components/index';
import * as style from './style.scss';
import { post } from '../utils/service';

const HeaderOpa = (props) => (
  <div className={style.opaWrap}>
    <div className={style.darkBtn}><button onClick={props.pagePush}>添加</button></div>
  </div>
)

class Task extends C {
  constructor() {
    super();
    this.addCourse = this.addCourse.bind(this);
    this.loadCourseDetail = this.loadCourseDetail.bind(this);
    this.loadClassCourse = this.loadClassCourse.bind(this);
    this.loadClassInfo = this.loadClassInfo.bind(this);
    this.changeCourse = this.changeCourse.bind(this);
    this.setCouseStyle = this.setCouseStyle.bind(this);
    this.editCourse = this.editCourse.bind(this);
    this.state = {
      classInfo: {},
      classCourse: [],
      courseDetail: [],
      levelList: []
    };

  }
  componentWillMount() {
    const { id } = this.props.match.params;
    this.loadClassInfo(id);
    this.loadClassCourse(id);
  }


  loadClassCourse(id) {
    post('/admin/clazzSource/getEmployeeClazzSource', { clazzId: id, type: 'HOMEWORK' }).then((data) => {
      data[0].status = true;
      this.setState({
        classCourse: data
      });
      this.loadCourseDetail(data[0].id)

    }).catch((err) => {
      console.log(err)
    });
  }

  addCourse() {
    const { id } = this.props.match.params;
    this.props.history.push(`/taskSetting/${id}`);
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

  loadCourseDetail(id) {
    post('/admin/clazzSource/getEmployeeClazzSourceDetail', { id}).then((data) => {
      this.setState({
        courseDetail: data
      });

    }).catch((err) => {
      console.log(err)
    });
  }

  goOtherClass() {
    this.props.history.push('/home')
  }

  changeCourse(id) {
    this.loadCourseDetail(id);
    const classCourse = this.state.classCourse.map((item) => {
      if (item.id === id) {
        item.status = true;
        return item
      } else {
        item.status = false;
        return item
      }
    });
    this.setState({
      classCourse
    });
  }

  setCouseStyle(item) {
    
    if (item.status) {
      return item.publish === 'ACTIVE' ? `${style.progressList} ${style.act} ${style.done}` :  `${style.act} ${style.progressList}`
    }
    return item.publish === 'ACTIVE' ? `${style.progressList} ${style.done}` :  ` ${style.progressList}`;
  }

  editCourse(item) {
    const classId = this.props.match.params.id;

    post('/admin/clazzSource/getEmployeeClazzSourceDetail', { id: item.id }).then((data) => {
      this.props.history.push({
        pathname: `/taskSetting/${classId}`,
        query: {
          courseDetail: data,
          name: item.name,
          date: item.dateStr,
          courseId: item.id
        }
      })

    }).catch((err) => {
      console.log(err)
    });
  }

  render() {
    const { id } = this.props.match.params;
    const { classInfo, classCourse, courseDetail } = this.state;

    return (
      <div>
        <ClassInfo classInfo={classInfo} goOtherClass={this.goOtherClass} />
        <div className={style.content}>
          <SideMenu active={4} id={id} />
          <div className={style.menuContent}>
            <div className={style.box}>
              <HeaderBar title='课程进度' hasBorder={true}>
                <HeaderOpa pagePush={this.addCourse} />
              </HeaderBar>
              <section className={style.tab}>
                <div className={style.tabTit}>
                  {
                    classCourse.map((item, idx) => (
                      <div key={`item-${idx}`} className={this.setCouseStyle(item)} onClick={() => {this.changeCourse(item.id)}}>
                        <div className={style.name}>{item.name}</div>
                        <div className={style.date}>{item.dateStr}</div>
                        {
                          item.status ?
                            <div className={style.edit} onClick={() => {this.editCourse(item)}}>编辑</div> :
                            null
                        }
                        
                      </div>
                    ))
                  }
                </div>
                <div className={style.tabPane}>
                  {
                    courseDetail.map((item, idx) => (
                      <div className={style.taskInfo} key={`item-${idx}`}>
                        <div className={style.img}><img src={item.photoUrl} alt='' /></div>
                        <div className={style.cont}>
                          <div className={style.name}>{item.name}</div>
                          <div className={style.desc}>{item.claim}</div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Task;