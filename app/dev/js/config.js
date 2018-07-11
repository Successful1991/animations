var config = {
  // config here
  videoUrl: 'app/img/CROMA__MAIN.mp4',
  textUrl: 'data.json',
  rules: [
    {
      id: 'animate1__line1',
      animations: 'animate1__line1, animate-finish',
      times: '0, 4.3',
      target: 'text-line1',
      class: 'charlie',
      tag: 'div'
    },{
      id: 'animate1__line2',
      animations: 'animate1__line2, animate-finish',
      times: '0, 4.3',
      target: 'text-line2',
      class: 'charlie',
      tag: 'div'
    },{
      tag: 'div',
      class: 'charlie',
      animations: 'animate-image,animate-finish',
      times: '0,4.3',
      bgImg: 'image',
      id: 'animate__image'
    }
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

