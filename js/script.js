$(function () {
  $('a[href^="#"]').click(function () {
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    let speed = 500;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
});

// ハンバーガーなど
$(function(){
  $('.hamburger').click(function(){
    $('.hamburger span').toggleClass('on');
      $('.sp-nav-menu').fadeToggle();
  });
});

// スライダー
const swiper = new Swiper(".swiper", {
  loop: true, // ループ指定
  effect: "fade", //フェード指定
  autoplay: {
    delay: 5000, //5秒後に次のスライドへ
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination"
  },
});