import React, { Component as C } from 'react'
import ClassCard from '../components/classCard';
import { post } from '../utils/service';
import { SessionOut } from '../components/index';

class HomeComponent extends C {
  constructor () {
    super();
    this.click = this.click.bind(this);
    this.loadClassList = this.loadClassList.bind(this);
    this.state = {
      classList: [{}]
    }
  }
  componentWillMount() {
    this.loadClassList();
  }

  loadClassList() {
    post('/admin/clazz/getAllClass', {}, () => { this.setState({show: true}) }).then((data) => {
      this.setState({
        classList: data
      });

    }).catch((err) => {
      console.log(err)
    });
  }

  click(item) {
    this.props.history.push(`/classList/${item.id}`);
  }

  render() {
    // debugger
    const { classList, show } = this.state;
    
    if (window.device && window.device.platform === 'iOS') {
      document.body.style.paddingTop = '20px';
    }
    
    return (
      <div>
        <SessionOut show={show} />
        <ClassCard goClass={this.click} data={classList} />
      </div>
    );
  }
}

export default HomeComponent;