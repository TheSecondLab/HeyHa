import React, { Component as C } from 'react'
import ClassCard from '../components/classCard';
import { post } from '../utils/service';

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
    post('/admin/clazz/getAllClass', {}).then((data) => {
      this.setState({
        classList: data
      });

    }).catch((err) => {
      console.log(err)
    });
  }

  click(id) {
    this.props.history.push(`/classList/${id}`);
  }

  render() {
    // debugger
    const { classList } = this.state;
    
    return (
      <div>
        <ClassCard goClass={this.click} data={classList} />
      </div>
    );
  }
}

export default HomeComponent;