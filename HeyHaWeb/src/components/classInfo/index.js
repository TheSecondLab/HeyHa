import React from 'react'
import { object, func } from 'prop-types';
import * as style from './style.scss';

const ClassInfo = (props) => {
  const { classInfo, goOtherClass } = props;
  return (
    <div className={style.header}>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <div className={style.name}>{classInfo.name}</div>
        <div className={style.time} style={{paddingLeft: '10px'}}>{classInfo.clazzTime}</div>
      </div>
      <div>
        <span className={style.else} onClick={goOtherClass}>其他班级</span>
      </div>
    </div>
  )
}

ClassInfo.defaultProps = {
  classInfo: {},
  goOtherClass: () => {}
};

ClassInfo.propTypes = {
  classInfo: object,
  goOtherClass: func
};
export default ClassInfo;