import React, { Component as C } from 'react'

import { HeaderBar, StuList, SideMenu } from '../components/index';
import * as style from './style.scss';
import { post } from '../utils/service';

const HeaderOpa = (props) => (
  <div className={style.opaWrap}>
    <div className={style.darkBtn}><button onClick={props.pagePush}>添加</button></div>
  </div>
)

class ClassMoment extends C {
  constructor() {
    super();
    this.postMoment = this.postMoment.bind(this);
    this.loadClassInfo = this.loadClassInfo.bind(this);
    this.loadClassInfo = this.loadClassInfo.bind(this);
    this.goOtherClass = this.goOtherClass.bind(this);
    this.state = {
      classInfo: {}
    };
  }

  componentWillMount() {
    const { id } = this.props.match.params;
    this.loadClassInfo(id);
  }

  postMoment() {
    this.props.history.push('/postMoment')
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

  goOtherClass() {
    this.props.history.push('/home')
  }
  render(){
    const { id } = this.props.match.params;
    const { classInfo } = this.state;

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
          <SideMenu active={5} id={id} />
          <div className={style.menuContent}>
            <div className={style.box}>
              <HeaderBar title='班级动态'  hasBorder={true}>
                <HeaderOpa pagePush={this.postMoment} />
              </HeaderBar>
              <div className={style.courseWrap}>
                <div className={style.dateTit}>2018/2/2</div>
                <div className={style.courseList}>
                  <div className={style.img}><img src='https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2171885043,3211252209&fm=173&app=25&f=JPEG?w=218&h=146&s=49269F545F295C0370498CD1030080B3' alt='' /></div>
                  <div className={style.cont}>
                    <div className={style.name}>太极一行</div>
                    <div className={style.desc}>
                      <span>共三张图</span> 
                      <div className={style.btn}>
                        <span className={style.dark}>发布</span>
                        <span className={style.light}>删除</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ClassMoment