import React, { Component as C } from 'react'

import { HeaderBar, StuList } from '../components'
import * as style from './style.scss';
import { post } from '../utils/service';


class SearchComp extends C {
  constructor() {
    super();
    this.returnBack = this.returnBack.bind(this);
    this.sellectAll = this.sellectAll.bind(this);
    this.choseItem = this.choseItem.bind(this);
    this.setInputValue = this.setInputValue.bind(this);
    this.searchStu = this.searchStu.bind(this);
    this.confirm = this.confirm.bind(this);
    this.state = {
      resList: [],
      selectedList: [],
      inputValue: ''
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
      if(item.status) selectedList.push(item)
      return item;
    });

    this.setState({
      resList,
      selectedList
    });
  }

  setInputValue(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  searchStu(e) {
    const { inputValue } = this.state;
    if (e.keyCode !== 13) return;
    post('/admin/spanperson', { nameorcode: inputValue }).then((data) => {
      this.setState({
        resList: data
      });

    }).catch((err) => {
      console.log(err)
    });
  }

  confirm() {
    const { id, page } = this.props.location.query;
    const { selectedList } = this.state;
    // debugger
    this.props.history.push({
      pathname: `${page}/${id}`,
      query: {
        otherClassStudent: selectedList
      }
    })
  }

  render() {
    const { resList, inputValue } = this.state;
    return (
      <div className={style.wrap}>
        <div className={style.searchBar}>
          <div className={style.input}><input placeholder='跨班搜索' value={inputValue} onChange={this.setInputValue} onKeyUp={this.searchStu} /></div>
          <span className={style.cancel} onClick={this.returnBack}>取消</span>
        </div>
        <div className={style.content}>
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
          {
            resList.length ?
              <div>
                <HeaderBar title='搜索结果' hasBorder={false} >
                <div className={style.opaWrap}>
                  <div className={style.lightBtn} onClick={this.sellectAll}><button>全选</button></div>
                  <div className={style.darkBtn} onClick={this.confirm}><button>确定</button></div>
                </div>
              </HeaderBar>
              <StuList alignment='4' data={resList} choseItem={this.choseItem} />
              </div> :
              null
          }
        </div>
        
      </div>
    )
  }
}

export default SearchComp