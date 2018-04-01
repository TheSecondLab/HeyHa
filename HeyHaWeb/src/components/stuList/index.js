import React from 'react'

import * as style from './style.scss';

const StuList = (props) => (
  <div className={style[`stuList${props.alignment}n`]}>
    <div className={style.item}>
      <img src='http://www.qqzhi.com/uploadpic/2014-09-23/000247589.jpg'  alt=''/>
      <div className={style.msg}>
        <div className={style.name}>凯里</div>
        <div className={style.no}>ZTTY18A001</div>
      </div>
    </div>
    <div className={`${style.item} ${style.act}`}>
      <img src='http://www.qqzhi.com/uploadpic/2014-09-23/000247589.jpg'  alt=''/>
      <div className={style.msg}>
        <div className={style.name}>凯里</div>
        <div className={style.no}>ZTTY18A001</div>
      </div>
    </div>
    <div className={style.item}>
      <img src='http://www.qqzhi.com/uploadpic/2014-09-23/000247589.jpg'  alt=''/>
      <div className={style.msg}>
        <div className={style.name}>凯里</div>
        <div className={style.no}>ZTTY18A001</div>
      </div>
    </div>
    <div className={style.item}>
      <img src='http://www.qqzhi.com/uploadpic/2014-09-23/000247589.jpg'  alt=''/>
      <div className={style.msg}>
        <div className={style.name}>凯里</div>
        <div className={style.no}>ZTTY18A001</div>
      </div>
    </div>
    <div className={style.item}>
      <img src='http://www.qqzhi.com/uploadpic/2014-09-23/000247589.jpg'  alt=''/>
      <div className={style.msg}>
        <div className={style.name}>凯里</div>
        <div className={style.no}>ZTTY18A001</div>
      </div>
    </div>
  </div>
)

export default StuList