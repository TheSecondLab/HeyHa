import { Component } from '@angular/core';

/**
 * Generated class for the NewsDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'news-detail',
  templateUrl: 'news-detail.html'
})
export class NewsDetailComponent {

  articleData: object;

  constructor() {
    // console.log('Hello NewsDetailComponent Component');
    this.articleData = {
      title: '挑战最强身体，挑战更好的自己',
      times: '12',
      date: '2912-1-2',
      imgUrl: 'https://tac-cdn.zhongan.com/care/user_image/iphoto.JPG',
      content: '      1955年以前，韩国是没有跆拳道一词的，韩国的武术也以空手道、唐手道和民间少数的跆跟等为主，日治时期，大量韩国青年学生赴日留学，在日本接受了系统的松涛馆空手道训练，回国后他们开始创立道馆教授学生。日本战败后，韩国获得民族独立，大批空手道、唐手道道馆兴起，韩国早期空手道传播者们将民族传统武术跆跟与空手道相结合，称为唐手道。并出现了最早的一批韩国道馆，这就是后来的九大道馆。'
    };
  }

}
