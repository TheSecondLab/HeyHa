import React from 'react'
import { Panel, HeaderBar, StuList } from '../components';
import * as style from './style.scss';

const PointDetailComp = (props) => (
  <div className={style.wrap}>
    <div className={style.record}>
      <div className={style.item}>
        <div className={style.desc}>分值</div>
        <div className={style.value}><span>100</span>分</div>
      </div>
      <div className={style.item}>
        <div className={style.desc}>发放原因</div>
        <div className={style.value}>刻苦练习</div>
      </div>
      <div className={style.item}>
        <div className={style.desc}>发放日期</div>
        <div className={style.value}>2018/12/1</div>
      </div>
      <div className={style.item}>
        <span className={style.del}>删除</span>
      </div>
    </div>
    <Panel>
      <HeaderBar title='本班学员' hasBorder={true}/>
      <StuList alignment='4' />
    </Panel>
    <Panel>
      <HeaderBar title='跨班学员' hasBorder={true}/>
      <StuList alignment='4' />
    </Panel>
  </div>
)

export default PointDetailComp