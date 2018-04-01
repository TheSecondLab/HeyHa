import React from 'react'

import { HeaderBar, StuList } from '../components'
import * as style from './style.scss';

const HeaderOpa = () => (
  <div className={style.opaWrap}>
    <div className={style.lightBtn}><button>全选</button></div>
    <div className={style.darkBtn}><button>确定</button></div>
  </div>
)

const SearchComp = (props) => (
  <div className={style.wrap}>
    <div className={style.searchBar}>
      <div className={style.input}><input placeholder='跨班搜索' /></div>
      <span className={style.cancel}>取消</span>
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
    <HeaderBar title='搜索结果' hasBorder={false} component={HeaderOpa()} />
    <StuList alignment='4' />
  </div>
)

export default SearchComp