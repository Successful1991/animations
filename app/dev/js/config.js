var config = {
  // config here
  videoUrl: 'app/img/CROMA__MAIN.mp4',
  //videoUrl: 'app/img/Croma_Fb1_v2.mp4',
  textUrl: 'data.json',
  rules: [
    {
      id: 'animate1__line1',
      animations: 'animate1__line1, animate-finish',
      times: '0, 4.3',
      target: 'animate1-line1',
      class: 'charlie',
      tag: 'div'
    },{
      id: 'animate1__line2',
      animations: 'animate1__line2, animate-finish',
      times: '0, 4.3',
      target: 'animate1-line2',
      class: 'charlie',
      tag: 'div'
    },{
      tag: 'div',
      class: 'charlie',
      animations: 'animate-image,animate-finish',
      times: '0,4.2',
      bgImg: 'image',
      id: 'animate__image'
    }
    // ,
    // {
    //   id: 'animate2__line1',
    //   animations: 'animate2__line1, animate-finish',
    //   times: '4.4, 7.2',
    //   target: 'animate2-line1',
    //   class: 'charlie',
    //   tag: 'div'
    // },{
    //   id: 'animate2__line2',
    //   animations: 'animate2__line2, animate-finish',
    //   times: '4.4, 7.2',
    //   target: 'animate2-line2',
    //   class: 'charlie',
    //   tag: 'div'
    // }
    // ,{
    //   tag: 'div',
    //   class: 'photo',
    //   parent: '#animate__image',
    //   bgImg: 'image'
    // }
  ]
};
var pictor = new Pictor(config);

pictor.init();

