import { Component } from '@angular/core';

interface ItemObject {
  key: string,
  value: string,
}

interface SelectObject {
  titleKey: string
  key: string,
  value: string,
}

const calArrow = (data, key, index) => {
  const totalwidth = 375;
  const eachBlock = totalwidth / data.length;
  const padding = eachBlock/2-10;
  return `${padding + index * eachBlock}px`;
}

@Component({
  selector: 'dropdown',
  templateUrl: 'dropdown.html'
})
export class DropdownComponent {
  data = [{
    key: '1',
    list: [{
      key: '1',
      value: '所有课程'
    }, {
      key: '2',
      value: '黑带'
    }, {
      key: '3',
      value: '黑带'
    }, {
      key: '4',
      value: '黑带'
    }]
  }, {
    key: '2',
    list: [{
      key: '1',
      value: '组合技术'
    }, {
      key: '2',
      value: '蓝带'
    }, {
      key: '3',
      value: '蓝带'
    }, {
      key: '4',
      value: '蓝带'
    }]
  }];

  clickedTitleKey: string = '';
  selectedValues: SelectObject[];
  listItems: ItemObject[] = [];
  arrowPostion = {
    left: '0px'
  };
  selectedIndex: number = -1;

  constructor() {
    const array = this.data.map(item => ({...item.list[0], titleKey: item.key}));

    this.selectedValues = array;
  }

  reset() {
    this.listItems = [];
    this.clickedTitleKey = '';
  }

  changeTab(key) {
    if(key === this.clickedTitleKey) {
      this.reset();
      return;
    }

    this.clickedTitleKey = key;
    const selectedArray = this.data.filter(item => item.key === key);
    this.listItems = selectedArray[0].list;
    this.selectedIndex = this.data.findIndex(d => d.key === key);
    this.arrowPostion = {
      left: calArrow(this.data, key, this.selectedIndex)
    };
    console.log(this.clickedTitleKey)
  }

  selectItem(key, value) {
    const currentKey = this.selectedValues[this.selectedIndex].key;
    if(key === currentKey) {
      this.reset();
      return;
    }

    this.selectedValues[this.selectedIndex].key = key;
    this.selectedValues[this.selectedIndex].value = value;
    this.reset();
  }
}
