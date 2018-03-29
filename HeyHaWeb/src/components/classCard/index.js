import React from 'react'
import * as style from './style.scss';

const ClassCard = () => (
  <div className={style.wrap}>
    <div>
      <div className={style.classList}>
        <div className={style.name}>一班</div>
        <div className={style.time}>2012-2-2</div>
      </div>
      <div className={style.classList}>
        <div className={style.name}>一班</div>
        <div className={style.time}>2012-2-2</div>
      </div>
      <div className={style.classList}>
        <div className={style.name}>一班</div>
        <div className={style.time}>2012-2-2</div>
      </div>
    </div>
    <div>
      <div className={style.classList}>
        <div className={style.name}>一班</div>
        <div className={style.time}>2012-2-2</div>
      </div>
      <div className={style.classList}>
        <div className={style.name}>一班</div>
        <div className={style.time}>2012-2-2</div>
      </div>
    </div>
  </div>
)

export default ClassCard