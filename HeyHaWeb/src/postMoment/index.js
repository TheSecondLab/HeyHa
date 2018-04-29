import React from 'react'
import { Panel, PageTitle } from '../components';
import * as style from './style.scss';
import cemera from './cemera.png';

const PostMoment = (props) => {
  return(
    <div classMoment={style.wrap}>
      <PageTitle title='发布动态' />
      <div className={style.panel}>
        <Panel>
          <div className={style.imgThumb}>
            <div><img src={cemera} alt='' /><span></span></div>
          </div>
          <div className={style.textarea}>
            <textarea rows='5' placeholder='说点什么吧...' >

            </textarea>
          </div>
          <div className={style.btnWrap}>
            <div className={style.light}>稍后再发</div>
            <div className={style.dark}>立即发布</div>
          </div>
        </Panel>
      </div>
    </div>
    
  )
}

export default PostMoment;