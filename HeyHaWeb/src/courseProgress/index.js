import React from 'react'

import { HeaderBar, StuList} from '../components/index';
import * as style from './style.scss';

const HeaderOpa = () => (
  <div className={style.opaWrap}>
    <div className={style.darkBtn}><button>确定</button></div>
  </div>
)

const CourseProgress = (props) => (
  <div>
    <div className={style.header}>
      <div>
        <div className={style.name}>红黑精英班</div>
        <div className={style.time}>每周六、日10：00-11：00</div>
      </div>
      <div>
        <span className={style.else}>其他班级</span>
      </div>
    </div>
    <div className={style.content}>
      <div className={style.menuList}>
        <div className={style.item}>学员出勤</div>
        <div className={style.item}>积分发放</div>
        <div className={style.item}>课程进度</div>
        <div className={style.item}>修炼任务</div>
        <div className={style.item}>班级动态</div>
      </div>
      <div className={style.menuContent}>
        <div className={style.box}>
          <HeaderBar title='本班学员' component={HeaderOpa()} hasBorder={true}/>
          <section className={style.tab}>
            <div className={style.tabTit}>
              <div className={`${style.progressList} ${style.act} ${style.done}`}>
                <div className={style.name}>第六节课</div>
                <div className={style.date}>1024/2/2</div>
              </div>
              <div className={style.progressList}>
                <div className={style.name}>第六节课</div>
                <div className={style.date}>1024/2/2</div>
              </div>
              <div className={style.progressList}>
                <div className={style.name}>第六节课</div>
                <div className={style.date}>1024/2/2</div>
              </div>
              <div className={style.progressList}>
                <div className={style.name}>第六节课</div>
                <div className={style.date}>1024/2/2</div>
                <div className={style.edit}>编辑</div>
              </div>
              
            </div>
            <div className={style.tabPane}>
              <div className={style.title}>白带（15人）</div>
              <div className={style.taskInfo}>
                <div className={style.img}><img src='https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2171885043,3211252209&fm=173&app=25&f=JPEG?w=218&h=146&s=49269F545F295C0370498CD1030080B3' alt='' /></div>
                <div className={style.cont}>
                  <div className={style.name}>太极一行</div>
                  <div className={style.desc}>太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行</div>
                </div>
              </div>
              <div className={style.taskInfo}>
                <div className={style.img}><img src='https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2171885043,3211252209&fm=173&app=25&f=JPEG?w=218&h=146&s=49269F545F295C0370498CD1030080B3' alt='' /></div>
                <div className={style.cont}>
                  <div className={style.name}>太极一行</div>
                  <div className={style.desc}>太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行</div>
                </div>
              </div>
              <div className={style.taskInfo}>
                <div className={style.img}><img src='https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2171885043,3211252209&fm=173&app=25&f=JPEG?w=218&h=146&s=49269F545F295C0370498CD1030080B3' alt='' /></div>
                <div className={style.cont}>
                  <div className={style.name}>太极一行</div>
                  <div className={style.desc}>太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
)

export default CourseProgress