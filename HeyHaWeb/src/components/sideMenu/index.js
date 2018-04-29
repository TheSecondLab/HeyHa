
import React, { Component as C } from 'react'
import * as style from './style.scss';
import { Link } from 'react-router-dom'

class SideMenu extends C {
	render() {
		return(
			<div className={style.menuList}>
				<Link to='/classList' className={`${style.item}  ${style.act}`}><div>学员出勤</div></Link>
				<Link to='/point' className={style.item}><div>积分发放</div></Link>
				<Link to='/courseProgress' className={style.item}><div>课程进度</div></Link>
				<Link to='/task' className={style.item}><div>修炼任务</div></Link>
				<Link to='/classMoment' className={style.item}><div>班级动态</div></Link>
			</div>
		)
	}
}
export default SideMenu;