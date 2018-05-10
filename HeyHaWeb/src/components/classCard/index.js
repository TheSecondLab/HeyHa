import React, { Component as C } from 'react'
import * as style from './style.scss';



class ClassCard extends C {
  render () {
    var result = [];
    for(var i = 0,len = this.props.data.length; i<len; i += 3){
      result.push(this.props.data.slice(i, i + 3));
    }
    return (
      <div className={style.wrap}>
        {
          result.map((item, idx) => {
            return (
              <div key={`idx-${idx}`}>
                {item.map((o, i) => {
                  return (
                    <div className={style.classList} key={`card-${i}`} onClick={() => this.props.goClass(o)} >
                      <div className={style.name}>{o.name}</div>
                      <div className={style.time}>{o.clazzTime}</div>
                    </div>
                  );
                })}
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default ClassCard