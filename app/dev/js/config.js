var config = {
  // config here
  videoUrl: 'app/img/IMPERIA.mp4',
  textUrl: 'data.json',
  rules: [
    {
      id: '#myElement',
      animations: 'animation1, animation2',
      times: '12, 14',
      target: 'nameFromJSON',
      class: 'charlie name',
      parent: '#parentElement',
      tag: 'a',
      href: 'http://domain.com/link',
      text: 'text inside',
      newWindow: true
    },
    {
      tag: 'div',
      class: 'animate1',
      parent: '#textAnimationBlock'
    },
    {
      tag: 'span',
      class: 'charlie',
      parent: '.animate1',
      animations: 'animate1-text,animate1-finish',
      times: '0.4,5',
      target: 'name'
    },{
      tag: 'div',
      class: 'animate2__text',
      parent: '#textAnimationBlock'
    },{
      tag: 'div',
      id: '#animate2__text-line1',
      class: 'charlie',
      parent: '.animate2__text',
      animations: 'animate-start,animate-finish',
      times: '5,8.6',
      target: 'animate2__line1'
    },{
      tag: 'div',
      id: '#animate2__text-line2',
      class: 'charlie',
      parent: '.animate2__text',
      animations: 'animate-start,animate-finish',
      times: '5.2,8.6',
      target: 'animate2__line2'
    },{
      tag: 'div',
      id: '#animate2__text-line3',
      class: 'charlie',
      parent: '.animate2__text',
      animations: 'animate-start,animate-finish',
      times: '5.4,8.6',
      target: 'animate2__line3'
    },{
      tag: 'div',
      id: 'animate2__text-line4',
      class: 'charlie',
      parent: '.animate2__text',
      animations: 'animate-start,animate-finish',
      times: '5.6,8.6',
      target: 'animate2__line4'
    },

    {
      tag: 'div',
      class: 'animate3',
      parent: '#textAnimationBlock'
    },{
      tag: 'div',
      class: 'charlie',
      parent: '.animate3',
      animations: 'animate3__card1,animate3__card2 ,animate3-finish',
      id: 'animate3__card',
      times: '9.6,11,17.5'
    },{
      tag: 'div',
      class: 'card__info',
      parent: '#animate3__card'
    },{
      tag: 'div',
      class: 'info__name',
      parent: '.card__info',
      target: 'card__name'
    },{
      tag: 'div',
      class: 'info__position',
      parent: '.card__info',
      target: 'card__position'
    },{
      tag: 'div',
      class: 'info__number',
      parent: '.card__info',
      target: 'card____number'
    },{
      tag: 'div',
      class: 'info__mail',
      parent: '.card__info',
      target: 'card__mail'
    },{
      tag: 'div',
      class: 'card__photo',
      parent: '#animate3__card',
      bgImg:'user__photo'
    },{
      tag: 'div',
      class: 'animate4',
      parent: '#textAnimationBlock'
    },{
      tag: 'div',
      id: 'animate4__name',
      class: 'charlie',
      parent: '.animate4',
      animations: 'animate-start,animate-finish',
      times: '18.7,22.1',
      target:'animate4__name'
    },{
      tag: 'div',
      id: 'animate4__position',
      class: 'charlie',
      parent: '.animate4',
      animations: 'animate-start,animate-finish',
      times: '19,22.1',
      target:'animate4__position'
    },{
      tag: 'div',
      id: 'animate4__number',
      class: 'charlie',
      parent: '.animate4',
      animations: 'animate-start,animate-finish',
      times: '19.3,22.1',
      target:'animate4__number'
    },{
      tag: 'a',
      class: 'button charlie',
      parent: '#textAnimationBlock',
      animations: 'animate-start',
      times: '22.5',
      hrefTarget:'link',
      newWindow: true
    }
  ]
};
var pictor = new Pictor(config);

pictor.init();

