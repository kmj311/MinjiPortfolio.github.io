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
});