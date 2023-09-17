$(function(){
    
$('.image').slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
     autoplay:true,
    // arrows:true,
    // vertical:true,
    // verticalSwiping:true,
     prevArrow:'<i class="fa fa-angle-left  icon  left"></i>',
     nextArrow: '<i class="fa fa-angle-right icon  right"></i>',
  });

  $('.image-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay:true,
    arrows:false,
    centerMode:true,
    centerPadding: '0',
    
  });




})