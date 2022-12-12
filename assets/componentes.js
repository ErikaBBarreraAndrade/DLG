$('.content-slider-products').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1104,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
        {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]

});

$('.slider-motos-seminuevas').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
  dots: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        arrows: false
      }
    }

  ]

});
$('.slider-brands-home').slick({
    speed: 3000,
    slidesToShow: 6,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
    draggable: true,
    pauseOnHover: true,
    swipe:true,
  responsive: [
    {
      breakpoint: 1104,
      settings: {
        slidesToShow: 4
      }
    },
        {
      breakpoint: 900,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2
      }
    }

  ]

});
$('.product-recommendations .slider-recommendations-a').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});
$('.for-carousel-image').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.nav-carousel-image'
});
$('.nav-carousel-image').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.for-carousel-image',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
       slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
         slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
       slidesToScroll: 1
      }
    }

  ]
});

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});
$('.slider-for-tabs').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav-tabs').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});
$('.content-slider-videos-small').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  centerMode: false,
  focusOnSelect: false,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        arrows: true,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: true,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        slidesToShow: 1
      }
    }

  ]
});
(function ($) {
  $('.nobuyable-color-picker').hover(function(){
    $(this).find(".content-hover-type-color").addClass("color-active-square");
  },function(){
    $(this).find(".content-hover-type-color").removeClass("color-active-square");
  });
  $('.nobuyable-color-picker').on('click',function(){
    $('.nobuyable-color-picker').removeClass('active');
  	let vPrice = $(this).addClass('active').data('price');
    let vNameColor= $(this).find(".label-txt-color").text();
    $('.nobuyable-price').html(vPrice);
    $(this).parent().parent().parent().find(".label-nameColor").text("Color:" + vNameColor)
  });
  $('.sub-dropdown-switch').on('mouseenter',function(){
    let listImg = $(this).data('switch');
    let brandImg = $(this).parents( "li.site-nav__deep-dropdown-trigger" ).find('.dropdown-switch').data('switch');
      if (brandImg){
	    $('.brand-image-container .brand-logo').empty().html("<img src='"+brandImg+"'>");
      }
      if (listImg){
	    $('.brand-image-container .brand-item-list').empty().html('<img src="'+listImg+'">');
      }
  	});
    $('.dropdown-switch').on('mouseenter',function(){
  //console.log(this);
    let brandImg = $(this).data('switch');
    let listImg = $(this).parent().find('.sub-dropdown-switch').first().data('switch');
      if (brandImg){
	    $('.brand-image-container .brand-logo').empty().html("<img src='"+brandImg+"'>");
        $('.brand-image-container .brand-item-list').empty();
      }
      if (listImg){
	    $('.brand-image-container .brand-item-list').html('<img src="'+listImg+'">');
      }
  	});
  $('.new-navigation .site-nav--has-dropdown').on('mouseenter',function(){
    let fBrand = $(this).find('.dropdown-switch').first();
     //console.log(fBrand);
      if (fBrand){
	    $('.brand-image-container .brand-logo').empty().html("<img src='"+$(fBrand).data('switch')+"'>");
        $('.brand-image-container .brand-item-list').empty();
            let listImg = $(fBrand).parent().find('.sub-dropdown-switch').first().data('switch');
      if (listImg){
	    $('.brand-image-container .brand-item-list').html('<img src="'+listImg+'" class="img-fluid">');
      }
      }
  });

  $('.new-navigation .parent_first_link').on('click',function(){
    if($(this).parent().find('.collapsed-menu').first().hasClass("expanded"))
    {
      $(this).parent().find('.collapsed-menu').first().removeClass('expanded');
      $(this).parent().find('svg.icon').first().removeClass('opened');
    }else
    {
      $(this).parent().parent().find('svg.icon').removeClass('opened');
      $(this).parent().parent().find('.collapsed-menu').removeClass('expanded');
      $(this).parent().find('.collapsed-menu').first().addClass('expanded');
      $(this).parent().find('svg.icon').first().addClass('opened');
    }
  });
  $('.new-navigation .parent_second_link').on('click',function(){
    if($(this).parent().find('.collapsed-menu').first().hasClass("expanded"))
    {
      $(this).parent().find('.collapsed-menu').first().removeClass('expanded');
      $(this).parent().find('svg.icon').first().removeClass('opened');
    }else
    {
      $(this).parent().parent().find('svg.icon').removeClass('opened');
      $(this).parent().parent().find('.collapsed-menu').removeClass('expanded');
      $(this).parent().find('.collapsed-menu').first().addClass('expanded');
      $(this).parent().find('svg.icon').first().addClass('opened');
    }
  });

  /******************OLD**************
$('.new-navigation svg.icon').on('click',function(){
    let listImg = $(this).parent().find('.parent_second_link').first().data('switch');
    let brandImg = $(this).parent().find('.parent_first_link').data('switch');
    if (brandImg){
      $('.brand-image-container .brand-logo').empty().html("<img src='"+brandImg+"'>");
    }
    if (listImg){
      $('.brand-image-container .brand-item-list').empty().html('<img src="'+listImg+'">');
    }
    $(this).parent().parent().find('svg.icon').removeClass('opened');
    $(this).parent().parent().find('.collapsed-menu').removeClass('expanded');
  	$(this).toggleClass('opened').parent().find('.collapsed-menu').first().toggleClass('expanded');
  });
*/


  /*$('.mobile-nav svg.icon').on('click',function(){
  	$(this).toggleClass('opened').parents().eq(4).toggleClass('opened-menu-mobile');
  });*/
  /*  $(".mobile-nav .appear-animation").mouseover(function(){
        $(this).addClass('opened-menu-mobile');
    });
    $('.mobile-nav .appear-animation').mouseout(function(){
        $(this).removeClass('opened-menu-mobile');
    });
    $(".menu-linklist-global-1 .mobile-nav__item").mouseover(function(){
        $(this).addClass('opened-menu-mobile_second');
    });
  $('.menu-linklist-global-1 .mobile-nav__item').mouseout(function(){
    $(this).removeClass('opened-menu-mobile_second');
  });
  $(".menu-linklist-2-inside .mobile-nav__item").mouseover(function(){
    $(this).addClass('opened-menu-mobile_third');
  });
  $('.menu-linklist-2-inside .mobile-nav__item').mouseout(function(){
    $(this).removeClass('opened-menu-mobile_third');
  });*/

})(jQuery);
  /*$('.new-navigation svg.icon').on('mouseenter',function(){
    $(this).toggleClass('opened').parent().find('.collapsed-menu').first().toggleClass('expanded');
  });
  $('.link-parent-global').mouseover(function(){
    $(this).addClass('opened-menu');
  });
  $('.link-parent-global').mouseout(function(){
    $(this).removeClass('opened-menu');
  });
  $('.site-nav__collapsible').mouseover(function(){
    $(this).addClass('opened-menu-child');
  });
  $('.site-nav__collapsible').mouseout(function(){
    $(this).removeClass('opened-menu-child');
  });
  $('.new-navigation .link_item_block').find(".site-nav__dropdown").on('mouseleave',function(){
    $(this).fadeOut("fast");
  });
    $('.new-navigation .link_item_block').on('mouseenter',function(){
        $(this).find(".site-nav__dropdown").fadeIn("fast");
    });
    */
/*$('.collapse').on('shown.bs.collapse', function(e) {
  var $card = $(this).closest('.accordion-item');
  $('html,body').animate({
    scrollTop: $card.offset().top
  }, 500);
});*/


