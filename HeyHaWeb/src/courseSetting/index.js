import React, { Component as C } from 'react'
import { Toast } from 'react-weui';

import { Panel, HeaderBar, StuList, PageTitle, List, Message, SessionOut } from '../components';
import * as style from './style.scss';
import { post, $post } from '../utils/service';
// import $ from 'jquery';
class CourseSetting extends C {
  constructor() {
    super();
    this.goBack = this.goBack.bind(this);
    this.selectLevel = this.selectLevel.bind(this);
    this.selectMaterial = this.selectMaterial.bind(this);
    this.loadAllCourse = this.loadAllCourse.bind(this);
    this.mapAddCourse = this.mapAddCourse.bind(this);
    this.getStudentLevel = this.getStudentLevel.bind(this);
    this.choseCourse2List = this.choseCourse2List.bind(this);
    this.showToast = this.showToast.bind(this);
    this.sendCourse = this.sendCourse.bind(this);
    this.setCourseName = this.setCourseName.bind(this);
    this.setDate = this.setDate.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.addLelvelCourse = this.addLelvelCourse.bind(this);

    this.state = {
      courseList: [],
      materialList: [],
      levelList: [],
      levelId: '',
      materialId: '',
      studentLevel: [],
      currentLevel: '',
      toastTimer: null,
      showToast: false
    };
  }

  componentWillMount() {
    const { id } = this.props.match.params;
    
    this.loadAllCourse();
    this.loadMaterial();
    this.loadLevel();
    this.getStudentLevel(id);
    if (this.props.location.query) {
      const { name, date, courseId } = this.props.location.query;
      this.setState({
        courseName: name,
        date,
        courseId
      });
    }


  }

  goBack() {
    this.props.history.goBack();
  }

  selectLevel(item) {
    const levelId =  item.id === 'all' ? '' : item.id;
    this.setState({
      levelId
    });
    this.loadAllCourse(levelId, this.state.materialId);
  }

  selectMaterial(item) {
    const materialId = item.id === 'all' ? '' : item.id;
    this.setState({
      materialId 
    });
    this.loadAllCourse(this.state.levelId, materialId);
  }
  
  getStudentLevel(id) {
    let courseDetail = [];
    if (this.props.location.query) {
      courseDetail = this.props.location.query.courseDetail;
    }
    post('/admin/clazzSource/getClazzStudentLevel', { clazzId: id }).then((data) => {
      data.forEach((item) => {
        // debugger
        if (courseDetail.length) {
          // 编辑
          courseDetail.forEach(obj => {
            const kk = this.state[`level-${item.levelId}`] || [];
            if (item.levelId === obj.levelId) {
              this.setState({
                [`level-${item.levelId}`]: kk.concat(obj)
              });
            } else {
              this.setState({
                [`level-${item.levelId}`]: kk
              });
            }
          })
        } else {
          // 新增
          this.setState({
            [`level-${item.levelId}`]: []
          })

        }
      });
      

      this.setState({
        studentLevel: data
      });

    }).catch((err) => {
      console.log(err)
    });
  }

  loadMaterial() {
    post('/admin/capital/getMaterial', {}).then((data) => {
      this.setState({
        materialList: [{id: 'all', name: '所有类型'}].concat(data)
      });
    }).catch((err) => {
      console.log(err)
    });
  }

  loadLevel() {
    post('/admin/level/getLevel', {}).then((data) => {
      this.setState({
        levelList: [{id: 'all', name: '所有级别'}].concat(data)
      });
    }).catch((err) => {
      console.log(err)
    });
  }

  loadAllCourse(levelId, materialId) {
    const { id } = this.props.match.params;

    post('/admin/clazzSource/getClazzCapital', { types: 'COURSE', levelId, materialId, clazzId: id }, () => { this.setState({show: true}) }).then((data) => {
     
      let courseList = [];
      const { currentLevel } = this.state;
      if (currentLevel) {
        courseList = data.map((item) => {
          this.state[`level-${currentLevel}`].forEach((obj) => {
            if (item.capitalId === obj.capitalId) {
              item.status = true;
            }
          });
          return item;
        })
      }
      this.setState({
        courseList: courseList.length ? courseList: data
      });

    }).catch((err) => {
      console.log(err)
    });
  }

  removeItem(levelId, capitalId) {
    const stateName = `level-${levelId}`;
    const { courseList } = this.state;
    courseList.some((item) => { if(item.capitalId === capitalId) {item.status = false; return true} });

    this.setState({
      [stateName]: this.state[stateName].filter((item) => item.capitalId != capitalId ),
      courseList
    });
  }

  mapAddCourse(id) {
    return this.state[`level-${id}`].map((item, idx) => (
      <div className={style.courseList} key={`ITEM-${idx}`}>
        <div className={style.img}><img src={item.photoUrl} alt='' /></div>
        <div className={style.cont}>
          <div className={style.name}>{item.name}</div>
          <div className={style.desc}>{item.claim}</div>
        </div>
        <div className={style.lightbtn} onClick={() => this.removeItem(id, item.capitalId)}>移除</div>
      </div>
    ))
  }

  sendCourse(postType) {
    const { id } = this.props.match.params;
    const { courseName, date, studentLevel, courseId } = this.state;
    this.setState({
      showLoading: true
    });
    const arr = [];
    Object.keys(this.state).forEach((item) => {
      if(item.indexOf('level-') > -1) {
        if(this.state[item].length) {
          this.state[item].map((o) => {
            arr.push({levelId: +item.split('-').pop(), capitalId: o.capitalId})
          });
        }
      }
    })


    var obj = {
      publish: postType,
      clazzId: id,
      name: courseName,
      date,
      types: 'COURSE',
      capital: arr
    }
    if (courseId) obj.id = courseId;
    
    if (courseName && date && arr.length) {
      $post('/admin/clazzSource/addOrEditCapital', JSON.stringify(obj), () => {this.setState({show: true})}).then((data) => {
         this.showToast('添加成功~');
         this.props.history.goBack();
      }).catch((err) => {
        console.log(err)
      });
      return;
    }
    this.showToast('请补全课程信息');
  
  }

  choseCourse2List(item) {
    const key = `level-${this.state.currentLevel}`;
    
    const handleCourseList = this.state.courseList.map((obj) => {
      if(obj.capitalId === item.capitalId) {
        obj.status = true;
      }
      return obj;
    });
    this.setState({
      [key]: this.state[key].concat(item),
      courseList: handleCourseList
    });
  }

  showToast(msg) {
    this.setState({showToast: true, toastMsg: msg});
    setTimeout(()=> {
      this.setState({showToast: false});
    }, 2000);
  }

  setCourseName(e) {
    this.setState({
      courseName: e.target.value
    });
  }

  setDate(e) {
    this.setState({
      date: e.target.value
    });
  }

  addLelvelCourse(item) {
    this.loadAllCourse(item.levelId);
    this.setState({
      currentLevel: item.levelId
    })
  }
  render() {

    const { courseList, levelList, materialList, studentLevel, currentLevel, showToast, courseName, date, toastMsg, showLoading, show } = this.state;
    return(
      <div>
        <SessionOut show={show} />
        <Toast icon="loading" show={showLoading}>发布中</Toast>
        <Message title={toastMsg} visible={showToast} />
        <PageTitle title='课程设置' goBack={this.goBack} />
        <div className={style.wrap}>  
          <Panel>
            <div className={style.formBox}>
              <div className={style.formItem}>
                <label>课程名称</label>
                <div><input type='text' placeholder='课程名称' value={courseName} onChange={this.setCourseName} /></div>
              </div>
              <div className={style.formItem}>
                <label>上课日期</label>
                <div><input type='date' placeholder='上课日期' value={date} onChange={this.setDate} /></div>
                <div className={style.btnBox}>
                  <div className={style.lightbtn} onClick={() => this.sendCourse('INACTIVE')}>稍后发布</div>
                  <div className={style.darkbtn} onClick={() => this.sendCourse('ACTIVE')}>立即发布</div>
                </div>
              </div>
            </div>
            <div className={style.courseBox}>
              <div className={style.courseContent}>
                <div className={style.title}>课程内容</div>
                {
                  studentLevel.map((item, idx) => {
                    return (
                      <div key={`item-${idx}`}>
                        <div className={style.courseType}>
                          <span>{item.name}（{item.num}）</span>
                          <span className={style.add} onClick={
                            () => this.addLelvelCourse(item)
                            }></span>
                        </div>
                        { this.mapAddCourse(item.levelId) }
                      </div>
                    )
                  })
                }
              </div>
              <div className={style.typeWrap}>
                <div className={style.typeSelector}>
                  <List data={levelList} onChange={this.selectLevel} initialTitle='所有等级' />
                  <List data={materialList} onChange={this.selectMaterial} initialTitle='所有类型' />
                </div>
               
                {
                  courseList.map((item, idx) => (
                    <div className={style.courseList} key={`item-${idx}`}>
                      <div className={style.img}><img src={item.photoUrl} alt='' /></div>
                      <div className={style.cont}>
                        <div className={style.name}>{item.name}</div>
                        <div className={style.desc}>{item.claim}</div>
                      </div>
                      <div
                        className={ item.status ? `${style.darkbtn}` : `${style.lightbtn}` }
                        onClick={() => {
                          if(!currentLevel) {
                            this.showToast('请选择段位~');
                            return;
                          };
                          if(item.status) return;
                          this.choseCourse2List(item)
                        }}
                      >
                        { item.status ? '已选' : '选择' }
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </Panel>
        </div>
      </div>
    )
  }
}

export default CourseSetting