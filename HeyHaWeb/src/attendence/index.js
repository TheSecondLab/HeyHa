import React, { Component as C } from 'react'

import { HeaderBar, StuList, SideMenu } from '../components/index';
import * as style from './style.scss';

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
    this.state = {
      stuList: Array.from(new Array(9), (val, index) => ({id: index})),
      selectedList: []
    };
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
    const { stuList } = this.state;

    return (
      <div>
        <div className={style.header}>
          <div>
            <div className={style.name}>红黑精英班</div>
            <div className={style.time}>每周六、日10：00-11：00</div>
          </div>
          <div>
            <span className={style.else}>其他班级</span>
          </div>
        </div>
        <div className={style.content}>
          <SideMenu active={1} />
          <div className={style.menuContent}>
            <div className={style.box}>
              <HeaderBar title='本班学员'>
              <div className={style.opaWrap}>
                <div className={style.input}><span onClick={() => { window.location.href = '/#/search' }}>跨班搜索</span></div>
                <div className={style.lightBtn} onClick={this.sellectAll}><button>全选</button></div>
                <div className={style.darkBtn}><button>确定</button></div>
              </div>
              </HeaderBar>
              <StuList alignment='3' data={stuList} choseItem={this.choseItem} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AttendenceComp