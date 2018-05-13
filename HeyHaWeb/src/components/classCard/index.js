import React, { Component as C } from 'react'
import * as style from './style.scss';



class ClassCard extends C {
  render () {
    // var result = [];
    // for(var i = 0,len = this.props.data.length; i<len; i += 3){
    //   result.push(this.props.data.slice(i, i + 3));
    // }
    var result = this.props.data || [];
    return (
      <div className={style.wrap}>
        {
          result.map((item, i) => (
            <div key={`itm-${i}`}>
              <div className={style.classList} key={`card-${i}`} onClick={() => this.props.goClass(item)} >
                <div className={style.name}>{item.name}</div>
                <div className={style.time}>{item.clazzTime}</div>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default ClassCard