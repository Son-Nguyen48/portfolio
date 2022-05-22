$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    //Scroll top btn
    if (this.scrollY > 500) {
      $(".btn-scroll-up").addClass("show");
    } else {
      $(".btn-scroll-up").removeClass("show");
    }
  });
  //Scroll top script
  $(".btn-scroll-up").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  // Typed script

  var typed = new Typed(".typing", {
    strings: ["Frontend Dev", "Coder", "Youtuber", "Streamer"],
    typedSpeed: 30,
    backSpeed: 30,
    loop: true
  });
  var typed = new Typed(".typing2", {
    strings: ["Frontend Dev", "Coder", "Youtuber", "Streamer"],
    typedSpeed: 30,
    backSpeed: 30,
    loop: true
  });

  //Click btn menu
  // $(".menu-btn").click(function () {
  //   $(".navbar .menu").removeClass("active");
  // });

  //   Toggle menu/navbar script
  $(".menu__btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu__btn i").toggleClass("active");
  });

  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });
});
