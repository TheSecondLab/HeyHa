import React from 'react'
import { Panel, PageTitle } from '../components';
import * as style from './style.scss';

const PasswordComp = (props) => {
  return(
    <div>
      <PageTitle title='积分发放' />
      <div className={style.wrap}>
        <Panel>
          <div className={style.formWrap}>
            <div className={style.formItem}>
              <label>原密码</label><input type='passward' placeholder='请输入原密码'  className={style.input}/>
            </div>
            <div className={style.tips}><div>当前密码输入有误，请输入正确的密码</div></div>
            <div className={style.formItem}>
              <label>新密码</label><input type='passward' placeholder='请输入新密码' className={style.input}/>
            </div>
            <div className={style.tips}><div>当前密码输入有误，请输入正确的密码</div></div>
            <div className={style.formItem}>
              <label>确认密码</label><input type='passward' placeholder='再次输入新密码' className={style.input}/>
            </div>
            <div className={style.btnWrap}>
              <div className={style.light}>取消修改</div>
              <div className={style.dark}>确认修改</div>
            </div>
          </div>
        </Panel>
      </div>
    </div>
  )
}

export default PasswordComp