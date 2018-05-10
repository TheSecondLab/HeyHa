import React from 'react';
import * as style from './style.scss';
import { array, string, bool } from 'prop-types';

const Message = (props) => (
  <div className={props.visible ? `${style.message} ${style.show}` : `${style.message} ${style.hide}`}>
    {props.title}
  </div>
);

Message.defaultProps = {
  title: '',
  visible: false
};

Message.propTypes = {
  title: string,
  visible: bool
};
export default Message;