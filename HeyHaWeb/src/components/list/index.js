import React, { Component as C } from 'react';
import * as style from './style.scss';

class List extends C {
  constructor() {
    super();
    this.select = this.select.bind(this);
    this.state = {
      bgStatus: false
    };
  }

  select(item) {
    this.setState({
      current: item.name,
      bgStatus: false
    });
    this.props.onChange(item)
  }

  render() {
    const { data, onChange, initialTitle } = this.props;
    return (
      <div style={{position: 'relative'}} >
        <div onClick={() => { this.setState({ bgStatus: true }) }} className={style.triangleDown}>{this.state.current || initialTitle }</div>
        <div style={{display: this.state.bgStatus ? 'block' : 'none'}}>

          <div style={{zIndex: '2', position: 'fixed', width: '100%', height: '100vh', background: 'rgba(0,0,0,0.2)', left: '0', top: '0'}}></div>
          
          <div className={style.listWrap}>
            {
              data.map((item) => (<div key={item.id} onClick={() => {this.select(item)}}>{item.name}</div>))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default List;