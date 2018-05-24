import React, { Component as C } from 'react'
import { HeaderBar, StuList, SideMenu, Message, ClassInfo, SessionOut } from '../components/index';
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
    this.deleteMoment = this.deleteMoment.bind(this);
    this.showToast = this.showToast.bind(this);
    this.postTempMoment = this.postTempMoment.bind(this);
    this.state = {
      classInfo: {},
      momentList: [],
      showToast: false
    };
  }

  componentWillMount() {
    const { id } = this.props.match.params;
    this.loadClassInfo(id);
    this.loadClassMoment(id);
  }

  loadClassMoment(id) {
    post('/admin/dynamic/getDynamicListByClazz', { clazzId: id }, () => { this.setState({show: true}) }).then((data) => {
      this.setState({
        momentList: data
      });

    }).catch((err) => {
      console.log(err)
    });
  }

  postMoment() {
    if(window.device) {
      this.props.history.push(`/postMoment/${this.props.match.params.id}`);
      return;
    }
    this.showToast('请至App内打开~');
    
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
    this.props.history.push('/home');
  }

  deleteMoment(id) {
    post('/admin/dynamic/deleteDynamic', { id }, () => {this.setState({show: true})}).then((data) => {
     this.showToast('删除成功');
     this.setState({
       momentList: this.state.momentList.filter((item) => item.id !== id)
     })

    }).catch((err) => {
      console.log(err)
    });
  }

  showToast(msg) {
    this.setState({showToast: true, toastMsg: msg});
    setTimeout(()=> {
      this.setState({showToast: false});
    }, 2000);
  }

  callbackMoment(id) {
    post('/admin/dynamic/cancelDynamic', { id }, () => {this.setState({show: true})}).then((data) => {
      this.showToast('撤回状态成功！');
      const classId = this.props.match.params.id;

      this.loadClassMoment(classId)
     }).catch((err) => {
       console.log(err)
     });
  }

  postTempMoment(id) {
    post('/admin/dynamic/changeOneDynamic', { id }, () => {this.setState({show: true})}).then((data) => {
      this.showToast('发布成功');
      const classId = this.props.match.params.id;
      this.loadClassMoment(classId)

     }).catch((err) => {
       console.log(err)
     });
  }

  render(){
    const { id } = this.props.match.params;
    const { classInfo, momentList, showToast, toastMsg, show } = this.state;

    return (
      <div>
        <SessionOut show={show} />
        <Message title={toastMsg} visible={showToast} />
        <ClassInfo classInfo={classInfo} goOtherClass={this.goOtherClass} />
        <div className={style.content}>
          <SideMenu active={5} id={id} />
          <div className={style.menuContent}>
            <div className={style.box}>
              <HeaderBar title='班级动态'  hasBorder={true}>
                <HeaderOpa pagePush={this.postMoment} />
              </HeaderBar>
              <div className={style.courseWrap}>
                {/* <div className={style.dateTit}>2018/2/2</div> */}
                {
                  momentList.map((item) => (
                    <div className={style.courseList} key={item.id}>
                      <div className={style.img}><img src={item.firstImg} alt='' /></div>
                      <div className={style.cont}>
                        <div className={style.name}>{item.content}</div>
                        <div className={style.desc}>
                          <span>共{item.imageUrl.length}张图</span> 
                          <div className={style.btn}>
                            {
                              item.dataStatus === 'ACTIVE'
                                ? <span className={style.dark} onClick={() => this.callbackMoment(item.id)}>撤回</span>
                                : <span className={style.dark} onClick={() => this.postTempMoment(item.id)}>发布</span>
                            }
                            
                            <span className={style.light} onClick={() => this.deleteMoment(item.id)}>删除</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
                
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ClassMoment