import React, { Component as C } from 'react';
import { Panel, HeaderBar, StuList, PageTitle, Message, List } from '../components';
import * as style from './style.scss';
import { post, $post } from '../utils/service';

class TaskSetting extends C {
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
    post('/admin/clazzSource/getClazzStudentLevel', { clazzId: id }).then((data) => {
      data.forEach((item) => {
        this.setState({
          [`level-${item.levelId}`]: []
        })
      })
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
    post('/admin/clazzSource/getCapital', { types: 'FODDER', levelId, materialId }).then((data) => {
     
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
    const { courseName, date, studentLevel } = this.state;

    const arr = [];
    Object.keys(this.state).forEach((item) => {
      if(item.indexOf('level-') > -1) {
        if(this.state[item].length) {
          this.state[item].map((o) => {
            arr.push({levelId: +item.split('-').pop(), capitalId: o.capitalId})
          });
        }
      }
    });
    var obj = {
      publish: postType,
      clazzId: id,
      name: courseName,
      date,
      types: 'HOMEWORK',
      capital: arr
    };
    
    if (courseName && date && arr.length) {
      $post('/admin/clazzSource/addOrEditCapital', JSON.stringify(obj)).then((data) => {
          this.showToast('添加成功');
          this.props.history.goBack();
      }).catch((err) => {
        console.log(err)
      });
      return;
    }
    this.showToast('请补全课程信息')

  }

  choseCourse2List(item) {
    const key = `level-${this.state.currentLevel}`;
    
    const handleCourseList = this.state.courseList.map((obj) => {
      if(obj.capitalId === item.capitalId) {
        obj.status = true;
        // return obj;
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

  addLelvelCourse(item){
    this.loadAllCourse(item.levelId);
    this.setState({
      currentLevel: item.levelId
    })
  }
  render() {

    const { courseList, levelList, materialList, studentLevel, currentLevel, showToast, courseName, date, toastMsg } = this.state;
    return(
      <div>
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

export default TaskSetting