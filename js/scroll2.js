$(function(){
  var $menu = $('#side-nav .side-menu li a'),
        $contents = $('#page .scroll'),
        $doc      = $('html, body');
    $(function () {
        // 해당 섹션으로 스크롤 이동
      $menu.on('click','a', function(e){
        var $target = $(this).parent(),
          idx     = $target.index(),
          section = $contents.eq(idx),
          offsetTop = section.offset().top;
        $doc.stop()
          .animate({
              scrollTop :offsetTop
          }, 800);
        return false;
      });
    });

    // menu class 추가
    $(window).scroll(function(){
        var scltop = $(window).scrollTop();
        $.each($contents, function(idx, item){
            var $target = $contents.eq(idx),
                i = $target.index(),
                targetTop = $target.offset().top;

            if (targetTop <= scltop) {
                $menu.removeClass('on');
                $menu.eq(idx).addClass('on');
            }
            if (!(200 <= scltop)) {
                $menu.removeClass('on');
            }
        })

    });
});


// Move Scroll
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  const topSet = document.querySelector(selector).offsetTop;
  const menu = document.querySelector("#navbar").offsetHeight;
  window.scrollTo({
    top: topSet - menu,
    behavior: "smooth",
  });
}

// 1. 모든 색션 요소들을 가지고 온다.
// 2. IntersectionObserver를 이용해서 모든 섹션들을 관찰한다.
// 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다.about__majors

const sectionIds = ['#home', '#about', '#skills', '#work', '#testimonials', '#contact'];

const sections = sectionIds.map(id => document.querySelector(id));
const navItem = sectionIds.map(id => document.querySelector(`[data-link="${id}"]`));

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3,
};

const observerCallback = (entries, observer) => {
  entries.forEach(entry => { 
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach(section => observer.observe(section));

$(function(){
  var $menu = $('#side-nav .side-menu ul li'),
      $contents = $('#page .scroll');

  $menu.click(function(e){
    e.preventDefault();
    var idx = $(this).index();
    var section = $contents.eq(idx);
    var sectionDistance = section.offset().top+1;

    // a.scrollTop() 스크롤양 확인
    $('html,body').stop().animate({scrollTop:sectionDistance}, 800);
  });

  // 윈도우 스크롤이 생기면
  // $contents마다 할 일- 각각의 화면 상단에서의 거리 sectionDistance 보다 스크롤양이 많은지 적은지
  // 많다는 조건이 참이면 각 요소마다 순번 변수명 idx 저장 그 순번에 해당하는 메뉴에만 클래스명 on추가

  // $(window).scroll(function(){
  //   $contents.each(function(){
  //     if($(this).offset().top <= $(window).scrollTop
  //     ()){
  //       var idx = $(this).index();
  //       $menu.removeClass('on');
  //       $menu.eq(idx-1).addClass('on');
  //     }
  //   });
  // });

  $(window).scroll(function(){
    var scltop = $(window).scrollTop();
    $.each($contents, function(idx, item){
      var $target = $contents.eq(idx),
          i = $target.index(),
          targetTop = $target.offset().top;

      if (targetTop <= scltop) {
        $menu.removeClass('on');
        $menu.eq(idx).addClass('on');
      }
    })

});
  // $(window).scroll(function(){
  //   var scrT = $(window).scrollTop();
  //   if((scrT == $(document).height() - $(window).height())){
  //     $menu.removeClass('on');
  //     $menu.eq(5).addClass('on');
  //   }
  // });
});