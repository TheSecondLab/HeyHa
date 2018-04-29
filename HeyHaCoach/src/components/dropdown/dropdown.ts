import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AlertController } from 'ionic-angular';

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
      key: 'all',
      value: '所有级别'
    }]
  }, {
    key: '2',
    list: [{
      key: 'all',
      value: '所有组合'
    }]
  }];

  clickedTitleKey: string = '';
  selectedValues: SelectObject[];
  listItems: ItemObject[] = [];
  arrowPostion = {
    left: '0px'
  };
  selectedIndex: number = -1;
  @Input() typeList;
  @Input() levelList;
  @Output() private childOuter = new EventEmitter();
  constructor(public alertCtrl: AlertController) {
    const array = this.data.map(item => ({...item.list[0], titleKey: item.key}));

    this.selectedValues = array;
  }

  reset() {
    this.listItems = [];
    this.clickedTitleKey = '';
  }

  ngOnChanges(changes) {
    if (changes.typeList.currentValue.length) {
      this.data[1].list = changes.typeList.currentValue;
    }
    if (changes.levelList.currentValue.length) {
      this.data[0].list = changes.levelList.currentValue;
    }
    
   
    
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
    //  let alert = this.alertCtrl.create({
    //   message: JSON.stringify(this.selectedValues)
    // });
    // alert.present()
    this.childOuter.emit(this.selectedValues);
    this.reset();
  }
}
