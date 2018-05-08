import React from 'react';
import { array, string, func } from 'prop-types';

const Message = (props) => (
  <div style={{
    position: 'fixed',
    top: '50%',
    left: '50%',
    width: '200px',
    lineHeight: '80px',
    borderRadius: '13px',
    background: 'rgba(0,0,0, 0.7)',
    color: '#fff',
    zIndex: '999',
    textAlign: 'center'}}>
    {props.title}
  </div>
);

Message.defaultProps = {
  title: ''
};

Message.propTypes = {
  title: string
};
export default Message;