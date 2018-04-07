import React from 'react'
import * as style from './style.scss'

const Panel = (props) => {
  return(
    <div className={style.wrap}>
      {props.children}
    </div>
  )
}

export default Panel