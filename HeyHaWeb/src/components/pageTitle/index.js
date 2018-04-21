import React from 'react';
import * as style from './style.scss';

const PageTitle = (props) => {
  return(
    <div className={style.header}>
      <div className={style.return}>返回</div>
      <div className={style.title}>{props.title}</div>
      <div className={style.action}></div>
    </div>
  )
}

export default PageTitle;