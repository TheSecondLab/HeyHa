
import React from 'react';
import { Dialog } from 'react-weui';


const SessionOut = (props) => {
  const buttons = [
    {
        label: '好的',
        onClick: () => window.location.hash = '/login'
        
    }
  ];
  return (
    <Dialog type="ios"
      title='提示'
      buttons={buttons}
      show={props.show}>
      登录过期
    </Dialog>
  )
};

export default SessionOut;
