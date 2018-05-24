import React, { Component as C } from 'react'
import { Panel, PageTitle, SessionOut } from '../components';
import * as style from './style.scss';
import { post } from '../utils/service';


class PasswordComp extends C {
  constructor() {
    super();
    this.goBack = this.goBack.bind(this);
    this.getPwd = this.getPwd.bind(this);
    this.modifiedPwd = this.modifiedPwd.bind(this);
    this.state = {
      password: '',
      newPassword: '',
      confirmPassword: '',
      isSame: true
    }
  }

  getPwd(attr) {
  
    return (e) => {
      this.setState({
        [attr]: e.target.value
      })
    }
  }

  modifiedPwd() {
    const { password, newPassword, confirmPassword } = this.state; 
    if (newPassword !== confirmPassword) {

      this.setState({
        isSame: false
      });
      return ;

    } else {

      this.setState({
        isSame: true
      });

      post('/admin/updatePwd', { password, newPassword }, () => { this.setState({show: true}) }).then((data) => {
        localStorage.setItem('password', newPassword)
        this.props.history.push('/mineInfo');
  
      }).catch((err) => {
        console.log(err)
      });
    }
  }

  goBack() {
    this.props.history.goBack();
  }
  render() {
    const { password, newPassword, confirmPassword, isSame, show } = this.state;
    return(
      <div style={{paddingTop: '20px'}}>
        <SessionOut show={show} />
        <PageTitle title='修改密码' goBack={this.goBack} />
        <div className={style.wrap}>
          <Panel>
            <div className={style.formWrap}>
              <div className={style.formItem}>
                <label>原密码</label><input type='password' value={password} placeholder='请输入原密码' className={style.input} onChange={this.getPwd('password')}/>
              </div>
              <div className={style.formItem}>
                <label>新密码</label><input type='password' value={newPassword} placeholder='请输入新密码' className={style.input} onChange={this.getPwd('newPassword')}/>
              </div>
              { !isSame ? <div className={style.tips}><div>两次密码不一致哦~请重新确认两次密码输入一致</div></div> : null}
              <div className={style.formItem}>
                <label>确认密码</label><input type='password' value={confirmPassword} placeholder='再次输入新密码' className={style.input} onChange={this.getPwd('confirmPassword')}/>
              </div>
              <div className={style.btnWrap}>
                <div className={style.light} onClick={this.goBack}>取消修改</div>
                <div className={style.dark} onClick={this.modifiedPwd}>确认修改</div>
              </div>
            </div>
          </Panel>
        </div>
      </div>
    )
  }
}

export default PasswordComp