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


// slick
$(function(){
  var $slider = $('#js-slider')

  $slider.slick({
    speed: 2000,
    arrows: false,
    dots: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 8000,
    slidesToShow: 1,
  });

  var
    time = 8,
    $bar = $('#js-progressBar'),
    isPause,
    tick,
    percentTime;
  function startProgressbar(){
    resetProgressbar();
    percentTime = 0;
    isPause = false;
    tick = setInterval(interval, 10);
  }
  function interval(){
    if(isPause === false){
      percentTime += 1/ (time + 0.1);
      $bar.css({
        width: percentTime + "%"
      });
      if(percentTime >= 100){
        $slider.slick('slickNext');
        startProgressbar();
      }
    }
  }
  function resetProgressbar(){
    $bar.css({
      width: 0 + '%'
    });
    clearTimeout(tick);
  }
  startProgressbar();
})


// フェードインアニメーション
function fadeAnime(){
  // $('.zoomInTrigger').each(function(){
  //   var elemPos = $(this).offset().top + 200;
  //   var scroll = $(window).scrollTop();
  //   var windowHeight = $(window).height();
  //   if (scroll >= elemPos - windowHeight){
  //     $(this).addClass('zoomIn');
  //   } else {
  //     $(this).removeClass('zoomIn');
  //   }
  // });

  $('.fadeUpTrigger').each(function(){
    var elemPos = $(this).offset().top + 100;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeUp');
    } else {
      $(this).removeClass('fadeUp');
    }
  });

  $('.fadeRightTrigger').each(function(){
    var elemPos = $(this).offset().top + 400;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeRight');
    } else {
      $(this).removeClass('fadeRight');
    }
  });
}

$(window).scroll(function(){
  fadeAnime();
});

function blurAnime(){
  $('.blurTrigger').each(function(){
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).addClass('blur');
    } else {
      $(this).removeClass('blur');
    }
  });
}

$(window).on('load',function(){
  blurAnime();
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

// アコーディオンメニュー
$('.accordion_title').on('click',function(){
  $('.accordion_box').slideUp(500);

  let findElm = $(this).next('.accordion_box');

  if($(this).hasClass('close')){
    $(this).removeClass('close');
  }else{
    $('.close').removeClass('close');
    $(this).addClass('close');
    $(findElm).slideDown(500);
  }
});

