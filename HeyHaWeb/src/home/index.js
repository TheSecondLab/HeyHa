import React, { Component as C } from 'react'
import ClassCard from '../components/classCard';

class HomeComponent extends C {
  constructor () {
    super();
    this.click = this.click.bind(this);
  }

  click(id) {
    this.props.history.push('/classList');
  }

  render() {
    const arr = [
      {
        name: '一般',
        date: '2019-2-2',
        id: 12
      },
      {
        name: '一般',
        date: '2019-2-2',
        id: 13
      },
      {
        name: '一般',
        date: '2019-2-2',
        id: 14
      },
      {
        name: '一般',
        date: '2019-2-2',
        id: 15
      }
    ];
    
    return (
      <div>
        <ClassCard goClass={this.click} data={arr} />
      </div>
    );
  }
}

export default HomeComponent;