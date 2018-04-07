import React from 'react'
import { Panel, HeaderBar, StuList } from '../components';
import * as style from './style.scss';

const HeaderOpa = () => (
  <div className={style.opaWrap}>
    <div className={style.input}><input placeholder='跨班搜索' /></div>
    <div className={style.lightBtn}><button>全选</button></div>
    <div className={style.darkBtn}><button>确定</button></div>
  </div>
)

const SendPoint = (props) => {
  return(
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
          <HeaderBar title='本班学员' component={HeaderOpa()}  hasBorder={true}/>
          <StuList alignment='4' />
      </Panel>
    </div>
  )
}

export default SendPoint