    $(".animsition").animsition({
        inClass: 'fade-in-right-lg',
        outClass: 'fade-out-right-lg',
        linkElement: 'header a',
        inDuration: 1000,
        outDuration: 500
    });


    $(".header").sticky({
      getWidthFrom: '.container',
      responsiveWidth: true
    });

    $(".header").on("sticky-start", function(){
      $(".description").html("We build <strong>great</strong> apps");
    });

    $(".header").on("sticky-end", function(){
      $(".description").html("We build apps");
    });

    $(".work").sticky({
      topSpacing: 60,
      getWidthFrom: '.container',
      responsiveWidth: true
    });
    $(".work").on("sticky-start", function(){
      $(this).append(" <a href='#' class='email'><strong>Email&nbsp;us</strong></a>");
    });

    $(".work").on("sticky-end", function(){
      $(".email").remove();
    });



$('.teams').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: true,
  // responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 3,
  //       infinite: true,
  //       dots: true
  //     }
  //   },
  //   {
  //     breakpoint: 600,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2
  //     }
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1
  //     }
  //   }
  //   // You can unslick at a given breakpoint now by adding:
  //   // settings: "unslick"
  //   // instead of a settings object
  // ]
});
