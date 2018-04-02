import React from 'react'

import * as style from './style.scss';

const HeaderBar = (props) => (
  <div className={style.header} style={{borderBottom: props.hasBorder ? '1px solid #F2F2F2' : 'none'}}>
    <span className={style.icon}></span>
    <span className={style.tit}>{props.title}</span>
    <div className={style.opa}>
      {props.component}
    </div>
  </div>
)

export default HeaderBar;