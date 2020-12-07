/*global Vue*/
Vue.config.devtools = true;
'use strict';
new Vue({
  el: '#app',
  data:{
    jumbotronImage: ['01.jpg','02.jpg','03.jpg','04.jpg'],
    menus: [{
      name: 'about us',
      url: '#'
    },{
      name: 'our product',
      url: '#'
    },{
      name: 'why us?',
      url: '#'
    },{
      name: 'gallery',
      url: '#'
    },{
      name: 'articles',
      url: '#'
    },{
      name: 'contact us',
      url: '#'
    }],
    openMenu: false
  },
  methods:{
    initSwiper(){
      var _self = this;
      swiper = new Swiper('.swiper--jumbotron', {
          effect: 'fade',
          followFinger: false,
          centeredSlides: true,
          loop: true,
          slidesPerView: 1,
          spaceBetween: 0,
          speed: 1000,
          navigation: {
            nextEl: '.jumbotron--next',
            prevEl: '.jumbotron--prev',
          },
          pagination: {
            el: '.jumbotron--pagination',
            clickable: true
          },
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          }
      });
    },
  },
  mounted(){
    this.$nextTick(function(){
      this.initSwiper();
    });
  }
});