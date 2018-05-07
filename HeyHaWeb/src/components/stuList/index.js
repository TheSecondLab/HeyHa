import React from 'react';
import { array, string, func } from 'prop-types';

import * as style from './style.scss';

const StuList = (props) => (
  <div className={style[`stuList${props.alignment}n`]}>
    {
      props.data.map((item, idx) => {
        // debugger
        return (
          <div className={item.status ? `${style.item} ${style.act}` : style.item} key={`stuList-${idx}`} onClick={() => {props.choseItem(item.id)}}>
            <img src='http://www.qqzhi.com/uploadpic/2014-09-23/000247589.jpg'  alt=''/>
            <div className={style.msg}>
              <div className={style.name}>凯里<span>· 已出勤</span></div>
              <div className={style.no}>ZTTY18A001</div>
            </div>
          </div>
        )
      })
    }
  </div>
)

StuList.defaultProps = {
  alignment: '3',
  data: [],
  choseItem: () => {}
};

StuList.propTypes = {
  alignment: string,
  data: array,
  choseItem: func
};
export default StuList;