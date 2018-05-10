import React from 'react';
import { array, string, func } from 'prop-types';

import * as style from './style.scss';

const StuList = (props) => (
  <div className={style[`stuList${props.alignment}n`]}>
    {
      props.data.map((item, idx) => {
        return (
          <div className={item.status ? `${style.item} ${style.act}` : style.item} key={`stuList-${idx}`}
            onClick={() => {
              if (item.attendanceType) return;
              props.choseItem(item.id)
            }}>
            <img src={item.photoUrl}  alt=''/>
            <div className={style.msg}>
              <div className={style.name}>{item.name}
              {
                item.attendanceType ? 
                  <span>· 已出勤</span> :
                  null
              }
            </div>
              <div className={style.no}>{item.code}</div>
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