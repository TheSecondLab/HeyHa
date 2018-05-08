
import React, { Component as C } from 'react'
import * as style from './style.scss';
import { Link } from 'react-router-dom'

class SideMenu extends C {
	render() {
		const { active } = this.props;
		return(
			<div className={style.menuList}>
				<Link to='/classList' className={ active === 1 ? `${style.item}  ${style.act}` : style.item }><div>学员出勤</div></Link>
				<Link to='/point' className={ active === 2 ? `${style.item}  ${style.act}` : style.item }><div>积分发放</div></Link>
				<Link to='/courseProgress' className={ active === 3 ? `${style.item}  ${style.act}` : style.item }><div>课程进度</div></Link>
				<Link to='/task' className={ active === 4 ? `${style.item}  ${style.act}` : style.item }><div>修炼任务</div></Link>
				<Link to='/classMoment' className={ active === 5 ? `${style.item}  ${style.act}` : style.item }><div>班级动态</div></Link>
			</div>
		)
	}
}
export default SideMenu;