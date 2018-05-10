import React, { Component as C } from 'react'
import { Panel, HeaderBar, StuList, PageTitle, List } from '../components';
import * as style from './style.scss';
import { post } from '../utils/service';

class CourseSetting extends C {
  constructor() {
    super();
    this.goBack = this.goBack.bind(this);
    this.selectLevel = this.selectLevel.bind(this);
    this.selectMaterial = this.selectMaterial.bind(this);
    this.loadAllCourse = this.loadAllCourse.bind(this);
    this.state = {
      courseList: [],
      materialList: [],
      levelList: [],
      levelId: '',
      materialId: ''
    };
  }

  componentWillMount() {
    this.loadAllCourse();
    this.loadMaterial();
    this.loadLevel();
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
      this.setState({
        courseList: data
      });

    }).catch((err) => {
      console.log(err)
    });
  }

  render() {
    const data = [
      {id: 1, name: '黄带'},
      {id: 2, name: '白带'},
      {id: 3, name: '红带'},
      {id: 4, name: '黑带'}
    ];
    const { courseList, levelList, materialList } = this.state;
    return(
      <div>
        <PageTitle title='课程设置' goBack={this.goBack} />
        <div className={style.wrap}>  
          <Panel>
            <div className={style.formBox}>
              <div className={style.formItem}>
                <label>课程名称</label>
                <div><input type='text' placeholder='课程名称' /></div>
              </div>
              <div className={style.formItem}>
                <label>上课日期</label>
                <div><input type='date' placeholder='上课日期' /></div>
                <div className={style.btnBox}>
                  <div className={style.lightbtn}>稍后发布</div>
                  <div className={style.darkbtn}>立即发布</div>
                </div>
              </div>
            </div>
            <div className={style.courseBox}>
              <div className={style.courseContent}>
                <div className={style.title}>课程内容</div>
                <div className={style.courseType}><span>白带（12）</span><span className={style.add}></span></div>
                <div className={style.courseList}>
                  <div className={style.img}><img src='https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2171885043,3211252209&fm=173&app=25&f=JPEG?w=218&h=146&s=49269F545F295C0370498CD1030080B3' alt='' /></div>
                  <div className={style.cont}>
                    <div className={style.name}>太极一行</div>
                    <div className={style.desc}>太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行</div>
                  </div>
                  <div className={style.lightbtn}>移除</div>
                </div>
              </div>
              <div className={style.typeWrap}>
                <div className={style.typeSelector}>
                  <List data={levelList} onChange={this.selectLevel} initialTitle='所有等级' />
                  <List data={materialList} onChange={this.selectMaterial} initialTitle='所有类型' />
                </div>
                {/* <div className={style.courseList}>
                  <div className={style.img}><img src='https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2171885043,3211252209&fm=173&app=25&f=JPEG?w=218&h=146&s=49269F545F295C0370498CD1030080B3' alt='' /></div>
                  <div className={style.cont}>
                    <div className={style.name}>太极一行</div>
                    <div className={style.desc}>太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行</div>
                  </div>
                  <div className={style.darkbtn}>已选</div>
                </div> */}
               
                {
                  courseList.map((item, idx) => (
                    <div className={style.courseList} key={`item-${idx}`}>
                      <div className={style.img}><img src={item.photoUrl} alt='' /></div>
                      <div className={style.cont}>
                        <div className={style.name}>{item.name}</div>
                        <div className={style.desc}>{item.claim}</div>
                      </div>
                      <div className={style.lightbtn}>选择</div>
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