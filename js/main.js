$(function(){
  new WOW().init();

  // 상단 메뉴 클릭시 부드러운 이동 설정시작
  var menuItem = $('.side-header a, .side-menu a');
  var menuItem1 = $('#gnb a, h1 a');
  var bn = $('#banner a');

  menuItem.click(function(e){
    var el = $(this).attr('href');
    var elWrap = $(el);

    scrollMove(elWrap, 60);

    e.preventDefault();

  });

  menuItem1.click(function(e){
    var el = $(this).attr('href');
    var elWrap = $(el);

    scrollMove(elWrap, 60);

    e.preventDefault();

  });

  // BANNER 클릭
  bn.click(function(e){
    var el = $(this).attr('href');
    var elWrap = $(el);

    scrollMove(elWrap, 60);

    e.preventDefault();

  });

  // 부드러운 움직임 함수 만들기
  function scrollMove(el){

    var offset = el.offset().top;
    var totalPos = offset;

    $('html, body').animate({scrollTop : totalPos}, 800);

  }
   
  // Scrollspy Call
  $('body').scrollspy({
    offset: 61
  });

  // #home type-it
  $('.type-it').typeIt({
    strings: ['Web publisher','Developer'],
    loop: true,
    breakLines: false,
    cursor: false,
    speed: 150
  });

  // about
  $('#about a').click(function(e){
    e.preventDefault();
  });

  // #banner
  $('.jarallax').jarallax({
    speed:0.2,
  });

  // #skills progress
  // 1. 컨트롤러 생성
  var controller = new ScrollMagic.Controller();

  // 2. 애니메이션 설정
  var bar1 = $('#skills .coding li:nth-child(1) .p-bar');
  var bar2 = $('#skills .coding li:nth-child(2) .p-bar');
  var bar3 = $('#skills .coding li:nth-child(3) .p-bar');
  var bar4 = $('#skills .coding li:nth-child(4) .p-bar');
  var bar5 = $('#skills .design li:nth-child(1) .p-bar');
  var bar6 = $('#skills .design li:nth-child(2) .p-bar');
  var bar7 = $('#skills .design li:nth-child(3) .p-bar');
  var t1 = new TimelineMax();

  t1.fromTo(bar1, 1, {width: '0%'}, {width: '90%'}, 0.5)
    .fromTo(bar2, 1, {width: '0%'}, {width: '87%'}, 1)
    .fromTo(bar3, 1, {width: '0%'}, {width: '78%'}, 1.5)
    .fromTo(bar4, 1, {width: '0%'}, {width: '80%'}, 2)
    .fromTo(bar5, 1, {width: '0%'}, {width: '88%'}, 2.5)
    .fromTo(bar6, 1, {width: '0%'}, {width: '80%'}, 3)
    .fromTo(bar7, 1, {width: '0%'}, {width: '85%'}, 3.5)

    // 3. 장면 설정
    var scene = new ScrollMagic.Scene({
      triggerElement: '#skills',
      triggerHook: 0.5
    })
    .setTween(t1)
    .addTo(controller);

  // #portfolio 
  $(window).load(function(){
    $('.grid').isotope({
      itemSelector: '.grid-item',
      layoutMode: 'fitRows'
    });
  });

  // Isotope filter setting
  var grid = $('.grid');
  var m1 = $('#m1');
  var m2 = $('#m2');
  var m3 = $('#m3');
  var m4 = $('#m4');

  // 라이트박스 초기 설정
  $('.grid-item a').magnificPopup({
    type: 'inline',
    closeOnBgClick: false,
    closeBtnInside: true,
    gallery: {
      enabled: true
    }
  })

  // 정렬 후 설정시작
  m1.click(function(e){
    grid.isotope({
      itemSelector: '.grid-item',
      layoutMode: 'fitRows',
      filter: '.grid-item'
    });

    $('.grid-item a').magnificPopup({
      type: 'inline',
      closeOnBgClick: false,
      closeBtnInside: true,
      gallery: {
        enabled: true
      }
    });

    e.preventDefault();

  });

  m2.click(function(e){
    grid.isotope({
      itemSelector: '.grid-item',
      layoutMode: 'fitRows',
      filter: '.g1'
    });

    $('.g1 a').magnificPopup({
      type: 'inline',
      closeOnBgClick: false,
      closeBtnInside: true,
      gallery: {
        enabled: true
      }
    });

    e.preventDefault();
    
  });

  m3.click(function(e){
    grid.isotope({
      itemSelector: '.grid-item',
      layoutMode: 'fitRows',
      filter: '.g2'
    });

    $('.g2 a').magnificPopup({
      type: 'inline',
      closeOnBgClick: false,
      closeBtnInside: true,
      gallery: {
        enabled: true
      }
    });

    e.preventDefault();
    
  });

  m4.click(function(e){
    grid.isotope({
      itemSelector: '.grid-item',
      layoutMode: 'fitRows',
      filter: '.g3'
    });

    $('.g3 a').magnificPopup({
      type: 'inline',
      closeOnBgClick: false,
      closeBtnInside: true,
      gallery: {
        enabled: true
      }
    });

    e.preventDefault();
    
  });  

});

// portfolio 메뉴 활성화
$(document).ready(function(){
  $("#portfolio .g-menu li a").each(function(){
    $(this).click(function(){
      $(this).addClass('pf-active');
      $(this).parent().siblings().children().removeClass('pf-active');
    })
  })
});

// CONTACT
$(document).ready(function() {
 
    $('form').submit(function(){
      alert('이메일이 전송되었습니다!');
      setTimeout(function(){
        document.getElementById('send').reset();
      })
    });

  });

  $('#about a').click(function () {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
    return false;
  });

// 모바일 버전
var gnb = $('#gnb');

gnb.mouseleave(function(){
  $(this).animate({'height': 0}, 800, function(){
    $(this).removeClass('in');
  });
});
