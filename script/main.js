'use strict';

// ハンバーガーメニュー
$('.openbtn').click(function(){
  $(this).toggleClass('active');
  $('#g-nav').toggleClass('panelactive');
});

$('#g-nav a').click(function(){
  $('.openbtn').removeClass('active');
  $('#g-nav').removeClass('panelactive');
});


// ヘッダーの色変換
$(function(){
  $(window).on('scroll', function(){
    if($('.top').height() < $(this).scrollTop() + 70){
      $('.js-header').addClass('change-color');
    } else {
      $('.js-header').removeClass('change-color');
    }
  });
});


// フェードインアニメーション
function fadeAnime(){
  $('.blurTrigger').each(function(){
    var elemPos = $(this).offset().top + 300;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).addClass('blur');
    } else {
      $(this).removeClass('blur');
    }
  });

  $('.zoomInTrigger').each(function(){
    var elemPos = $(this).offset().top + 200;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).addClass('zoomIn');
    } else {
      $(this).removeClass('zoomIn');
    }
  });

  $('.fadeUpTrigger').each(function(){
    var elemPos = $(this).offset().top + 200;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeUp');
    } else {
      $(this).removeClass('fadeUp');
    }
  });
}

$(window).scroll(function(){
  fadeAnime();
});


// スムーススクロール
$(function(){
  $('a[href^="#"]').click(function(){
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - 50;
    var speed = 500;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
});