import React from 'react'
import { Panel, HeaderBar, StuList } from '../components';
import * as style from './style.scss';

const HeaderOpa = () => (
  <div className={style.opaWrap}>
    <div className={style.input}><input placeholder='跨班搜索' /></div>
    <div className={style.lightBtn}><button>全选</button></div>
    <div className={style.darkBtn}><button>确定</button></div>
  </div>
)

const CourseSetting = (props) => {
  return(
    <div className={style.wrap}>
      <Panel>
        <div className={style.formBox}>
          <div className={style.formItem}>
            <label>课程名称</label>
            <div><input type='text' placeholder='课程名称' /></div>
          </div>
          <div className={style.formItem}>
            <label>上课日期</label>
            <div><input type='date' placeholder='上课日期' /></div>
            <div className={style.btnBox}>
              <div className={style.lightbtn}>稍后发布</div>
              <div className={style.darkbtn}>立即发布</div>
            </div>
          </div>
        </div>
        <div className={style.courseBox}>
          <div className={style.courseContent}>
            <div className={style.title}>课程内容</div>
            <div className={style.courseType}><span>白带（12）</span><span className={style.add}></span></div>
            <div className={style.courseList}>
              <div className={style.img}><img src='https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2171885043,3211252209&fm=173&app=25&f=JPEG?w=218&h=146&s=49269F545F295C0370498CD1030080B3' alt='' /></div>
              <div className={style.cont}>
                <div className={style.name}>太极一行</div>
                <div className={style.desc}>太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行</div>
              </div>
              <div className={style.lightbtn}>移除</div>
            </div>
          </div>
          <div className={style.typeWrap}>
            <div className={style.typeSelector}>
              <div>白黄</div>
              <div>选择类型</div>
            </div>
            <div className={style.courseList}>
              <div className={style.img}><img src='https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2171885043,3211252209&fm=173&app=25&f=JPEG?w=218&h=146&s=49269F545F295C0370498CD1030080B3' alt='' /></div>
              <div className={style.cont}>
                <div className={style.name}>太极一行</div>
                <div className={style.desc}>太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行</div>
              </div>
              <div className={style.darkbtn}>已选</div>
            </div>
            <div className={style.courseList}>
              <div className={style.img}><img src='https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2171885043,3211252209&fm=173&app=25&f=JPEG?w=218&h=146&s=49269F545F295C0370498CD1030080B3' alt='' /></div>
              <div className={style.cont}>
                <div className={style.name}>太极一行</div>
                <div className={style.desc}>太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行</div>
              </div>
            </div>
            <div className={style.courseList}>
              <div className={style.img}><img src='https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2171885043,3211252209&fm=173&app=25&f=JPEG?w=218&h=146&s=49269F545F295C0370498CD1030080B3' alt='' /></div>
              <div className={style.cont}>
                <div className={style.name}>太极一行</div>
                <div className={style.desc}>太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行</div>
              </div>
            </div>
            <div className={style.courseList}>
              <div className={style.img}><img src='https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2171885043,3211252209&fm=173&app=25&f=JPEG?w=218&h=146&s=49269F545F295C0370498CD1030080B3' alt='' /></div>
              <div className={style.cont}>
                <div className={style.name}>太极一行</div>
                <div className={style.desc}>太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行太极一行</div>
              </div>
            </div>
          </div>
        </div>
      </Panel>
    </div>
  )
}

export default CourseSetting