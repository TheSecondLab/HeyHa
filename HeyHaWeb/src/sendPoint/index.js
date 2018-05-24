import React, { Component as C } from 'react';
import { Panel, HeaderBar, StuList, PageTitle, Message, SessionOut } from '../components';
import * as style from './style.scss';
import { post } from '../utils/service';

class SendPoint extends C {
  constructor() {
    super();
    this.goBack = this.goBack.bind(this);
    this.choseItem = this.choseItem.bind(this);
    this.goSearch = this.goSearch.bind(this);
    this.loadClassStudent = this.loadClassStudent.bind(this);
    this.sellectAll = this.sellectAll.bind(this);
    this.choseCause = this.choseCause.bind(this);
    this.inputReason = this.inputReason.bind(this);
    this.addPoint = this.addPoint.bind(this);
    this.showToast = this.showToast.bind(this);
    this.changeScore = this.changeScore.bind(this);
    this.choseAttendenceStu = this.choseAttendenceStu.bind(this);
    this.state = {
      stuList: [],
      selectedList: [],
      reasonList: [],
      otherClassStudentList: [],
      reason: '',
      toastShow: false
    };
  }

  componentWillMount() {
    const { id } = this.props.match.params;
    this.loadClassStudent(id);

    let otherClassStudent = [];
    if (this.props.location.query && this.props.location.query.otherClassStudent) {
      otherClassStudent = this.props.location.query.otherClassStudent;
    }
    if (otherClassStudent.length) {
      this.setState({
        otherClassStudentList: otherClassStudent
      });
    }

    // 发放积分原因列表
    post('/admin/integralQuery/getIntegral', { clazzId: id }).then((data) => {
      this.setState({
        reasonList: data
      });

    }).catch((err) => {
      console.log(err)
    });
  }

  loadClassStudent(id) {
    post('/admin/integralQuery/getAttendanceMember', { clazzId: id }, () => { this.setState({show: true}) }).then((data) => {
      this.setState({
        stuList: data
      });

    }).catch((err) => {
      console.log(err)
    });
  }

  goBack() {
    this.props.history.goBack();
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
      query: { id, page: '/sendPoint' },
    })
  }

  choseCause(e) {
    const { value } = e.target;
    this.setState({
      integralId: value.split('-')[0],
      score: value.split('-')[1]
    })
  }

  inputReason(e) {
    this.setState({
      reason: e.target.value
    })
  }

  showToast(msg) {
    this.setState({showToast: true, toastMsg: msg});
    setTimeout(()=> {
      this.setState({showToast: false});
    }, 2000);
  }

  addPoint() {
    const { id } = this.props.match.params;
    const { integralId, score, reason, selectedList, otherClassStudentList } = this.state;
    
    const otherClassStudentId = otherClassStudentList.map((item) => item.id );
    const memberId = selectedList.concat(otherClassStudentId);
    // console.log(memberId);
    if (integralId && score && memberId && id ) {
      post('/admin/integralQuery/addIntegral',
        { integralId, score, clazzId: id, memberId  }, () => {this.setState({show: true})}).then((data) => {
          
          this.props.history.push(`/point/${id}`)
      }).catch((err) => {
        console.log(err)
      });
      return;
    }
    this.showToast('请补全信息');
    
  }

  choseAttendenceStu() {    
   
    this.setState({
      stuList: this.state.stuList.map((item) => {
        item.attendanceType &&( item.status = true);
        return item;
      }),
      selectedList: this.state.stuList.filter(item => item.attendanceType).map(item => item.id)
    });
  }

  changeScore(e) {
    this.setState({
      score: e.target.value
    })
  }

  render() {
    const { stuList, reasonList, otherClassStudentList, reason, score, showToast, toastMsg, show } = this.state;
    return(
      <div style={{paddingTop: '20px'}}>
        <SessionOut show={show}/>
        <Message title={toastMsg} visible={showToast} />
        <PageTitle title='积分发放' goBack={this.goBack} />
        <div className={style.wrap}>
          <Panel>
            <div className={style.formBox}>
              <div className={style.formItem}>
                <label>发放原因</label>
                <div>
                  <select onChange={this.choseCause}>
                    <option disabled selected>请选择发放原因</option>
                    {
                      reasonList.map((item, idx) => (<option key={`item-${idx}`} value={`${item.id}-${item.score}`}>{item.name}</option>))
                    }
                  </select>
                </div>
              </div>
              <div className={style.formItem}>
                <label></label>
                <div>
                  <div><input type='text' placeholder='我输入的原因' value={reason} onChange={this.inputReason} /></div>
                </div>
              </div>
              <div className={style.formItem}>
                <label>分值</label>
                <div><input type='text' placeholder='输入分值' value={score} onChange={this.changeScore} /></div>
                <div className={style.btnBox}>
                  <div className={style.btn} onClick={this.addPoint}>确定发放</div>
                </div>
              </div>
            </div>
            <HeaderBar title='本班学员' hasBorder={true}>
              <div className={style.opaWrap}>
              <div className={style.input}><span onClick={this.goSearch}>跨班搜索</span></div>
                <div className={style.lightBtn} onClick={this.sellectAll}><button>全选</button></div>
                <div className={style.darkBtn} onClick={this.choseAttendenceStu}><button>出勤人员</button></div>
                
              </div>
            </HeaderBar>
            <StuList alignment='4' data={stuList} choseItem={this.choseItem} diffOpa={false} />
            {
              otherClassStudentList.length
                ? <div>
                    <HeaderBar title='跨班学员' />
                    <StuList alignment='3' data={otherClassStudentList} choseItem={this.choseItem} diffOpa={false} />
                  </div>
                : null
            }
          </Panel>
        </div>
      </div>
    )
  }
}

export default SendPoint