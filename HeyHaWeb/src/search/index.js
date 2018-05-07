import React, { Component as C } from 'react'

import { HeaderBar, StuList } from '../components'
import * as style from './style.scss';


class SearchComp extends C {
  constructor() {
    super();
    this.returnBack = this.returnBack.bind(this);
    this.sellectAll = this.sellectAll.bind(this);
    this.choseItem = this.choseItem.bind(this);
    this.state = {
      resList: Array.from(new Array(9), (val, index) => ({id: index})),
      selectedList: []
    }
  }

  returnBack() {
    // debugger
    this.props.history.goBack();
  }


  sellectAll() {
    const selectedList = [];
    const resList = this.state.resList.map((item) => {
      item.status = !item.status ? true : item.status;
      if(item.status) selectedList.push(item.id)
      return item;
    });

    this.setState({
      resList,
      selectedList
    });
  }

  choseItem(id) {
    const selectedList = [];
    const resList = this.state.resList.map((item) => {
      if(item.id === id) {
        item.status = !item.status;
      }
      if(item.status) selectedList.push(item.id)
      return item;
    });

    this.setState({
      resList,
      selectedList
    });
  }

  render() {
    const { resList } = this.state;
    return (
      <div className={style.wrap}>
        <div className={style.searchBar}>
          <div className={style.input}><input placeholder='跨班搜索' /></div>
          <span className={style.cancel} onClick={this.returnBack}>取消</span>
        </div>
        <HeaderBar title='搜索历史' hasBorder={false} />
        <div className={style.searchHistory}>
          <span>王大力</span>
          <span>王大力</span>
          <span>王大力</span>
          <span>王大力</span>
          <span>王大力</span>
          <span>王大力</span>
          <span>王大力</span>
        </div>
        <HeaderBar title='搜索结果' hasBorder={false} >
          <div className={style.opaWrap}>
            <div className={style.lightBtn} onClick={this.sellectAll}><button>全选</button></div>
            <div className={style.darkBtn}><button>确定</button></div>
          </div>
        </HeaderBar>
        <StuList alignment='4' data={resList} choseItem={this.choseItem} />
      </div>
    )
  }
}

export default SearchComp