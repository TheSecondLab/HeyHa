import { Injectable } from '@angular/core';

@Injectable()
export class Utils {
  constructor() {
  }
  
  normalizeDate(date) {
    if (typeof date === 'string') {
      date = date.replace(/-/g, '/');
      date = new Date(date);
    }
    if (!(date instanceof Date)) {
      date = new Date(date);
    }
    if (date.toString() === 'Invalid Date') {
      return ''
    }
    return date;
  }

  formatDate(date, fmt): void {
    const _date = this.normalizeDate(date);
    var o = {
      "M+": _date.getMonth() + 1, //月份 
      "d+": _date.getDate(), //日 
      "h+": _date.getHours(), //小时 
      "m+": _date.getMinutes(), //分 
      "s+": _date.getSeconds(), //秒 
      "q+": Math.floor((_date.getMonth() + 3) / 3), //季度 
      "S": _date.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (_date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  }

}