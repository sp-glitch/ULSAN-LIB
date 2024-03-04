$(function () {
  $(window).on("scroll", function () {
    const sct = $(window).scrollTop();
    if (sct > 300) {
      $("#header").addClass("on");
    } else {
      $("#header").removeClass("on");
    }
  });

  var fistSwiper = new Swiper(".main_slide_wrap", {
    spaceBetween: 30,
    effect: "fade",

    loop: true,
    speed: 1000,

    navigation: {
      nextEl: ".swiper-button-n",
      prevEl: ".swiper-button-p",
    },

    autoplay: {
      disableOnInteraction: false,
    },
  });

  const tabBtn = $(".info_btn_box .info_btn");
  const tabCont = $(".info_table_wrap table");
  tabCont.hide().eq(0).show();

  tabBtn.on("click", function (e) {
    e.preventDefault();
    const index = $(this).index();

    $(this).addClass("on").siblings().removeClass("on");
    tabCont.eq(index).show().siblings().hide();
  });

  var secondSwiper = new Swiper(".best_slide_wrap", {
    slidesPerView: 2,
    spaceBetween: 16,
    centeredSlides: false,
    loop: true,

    navigation: {
      prevEl: ".swiper-button-pp",
      nextEl: ".swiper-button-nn",
    },

    breakpoints: {
      520: {
        slidesPerView: 3, //브라우저가 768보다 클 때
        spaceBetween: 16,
      },

      700: {
        slidesPerView: 4, //브라우저가 768보다 클 때
        spaceBetween: 16,
      },

      1200: {
        slidesPerView: 4, //브라우저가 1024보다 클 때
        spaceBetween: 16,
      },
    },
  });

  $(window).on("scroll", function () {
    let SCT = $(window).scrollTop();
    console.log(SCT);

    if (SCT > 400) {
      $(".to_top").addClass("on");
    } else {
      $(".to_top").removeClass("on");
    }
  });

  $(".to_top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 400);
  });

  $(".mopen").on("click", function () {
    $(".gnb").toggleClass("on");
    $(this).toggleClass("on");
  });

  $(".fopen").on("click", function () {
    $(".f_gnb").slideToggle("on");
    $(this).toggleClass("on");
  });
});
