
import React, { Component as C } from 'react'
import * as style from './style.scss';
import { Link } from 'react-router-dom'

class SideMenu extends C {
	render() {
		const { active, id } = this.props;
		return(
			<div className={style.menuList}>
				<Link to={`/classList/${id}`} className={ active === 1 ? `${style.item}  ${style.act}` : style.item }><div>学员出勤</div></Link>
				<Link to={`/point/${id}`} className={ active === 2 ? `${style.item}  ${style.act}` : style.item }><div>积分发放</div></Link>
				<Link to={`/courseProgress/${id}`} className={ active === 3 ? `${style.item}  ${style.act}` : style.item }><div>课程进度</div></Link>
				<Link to={`/task/${id}`} className={ active === 4 ? `${style.item}  ${style.act}` : style.item }><div>修炼任务</div></Link>
				<Link to={`/classMoment/${id}`} className={ active === 5 ? `${style.item}  ${style.act}` : style.item }><div>班级动态</div></Link>
			</div>
		)
	}
}
export default SideMenu;