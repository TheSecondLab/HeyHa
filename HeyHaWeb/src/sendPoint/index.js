import React, { Component as C } from 'react';
import { Panel, HeaderBar, StuList, PageTitle } from '../components';
import * as style from './style.scss';

class SendPoint extends C {
  constructor() {
    super();
    this.goBack = this.goBack.bind(this);
    this.choseItem = this.choseItem.bind(this);
    this.sellectAll = this.sellectAll.bind(this);
    this.state = {
      stuList: Array.from(new Array(9), (val, index) => ({id: index})),
      selectedList: []
    };
  }

  goBack() {
    this.props.history.goBack();
  }

  sellectAll() {
    const selectedList = [];
    const stuList = this.state.stuList.map((item) => {
      item.status = !item.status ? true : item.status;
      if(item.status) selectedList.push(item.id)
      return item;
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

  render() {
    const {stuList} = this.state;
    return(
      <div style={{paddingTop: '20px'}}>
        <PageTitle title='积分发放' goBack={this.goBack} />
        <div className={style.wrap}>
          <Panel>
            <div className={style.formBox}>
              <div className={style.formItem}>
                <label>发放原因</label>
                <div>
                  <select>
                    <option>选择原因</option>
                    <option>其他</option>
                  </select>
                </div>
              </div>
              <div className={style.formItem}>
                <label></label>
                <div>
                  <div><input type='text' placeholder='我输入的原因' /></div>
                </div>
              </div>
              <div className={style.formItem}>
                <label>分值</label>
                <div><input type='text' placeholder='输入分值' /></div>
                <div className={style.btnBox}>
                  <div className={style.btn}>确定发放</div>
                </div>
              </div>
            </div>
            <HeaderBar title='本班学员' hasBorder={true}>
              <div className={style.opaWrap}>
                <div className={style.input}><input placeholder='跨班搜索' /></div>
                <div className={style.lightBtn} onClick={this.sellectAll}><button>全选</button></div>
                <div className={style.darkBtn}><button>确定</button></div>
              </div>
            </HeaderBar>
            <StuList alignment='4' data={stuList} choseItem={this.choseItem} />
          </Panel>
        </div>
      </div>
    )
  }
}

export default SendPoint