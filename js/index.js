function dropMenu() {
  $('#navbar').toggleClass('drop-menu');
}

$('a').click(function() {
  if ($('#navbar').hasClass('drop-menu')) {
    $('#navbar').removeClass('drop-menu');
  }
});

$('.go-btn').click(function() {
  var tgt = $(this).data("scroll-target");
  $('html,body').animate({
    scrollTop: $(tgt).offset().top
  }, 1000);
})
/*
function scrollTo(tgt) {
  console.log('click');
  $('html,body').animate({
    scrollTop: $(tgt).offset().top
  }, 1000);
};
*/
$(window).scroll(function() {
	if (($(window).scrollTop() < $('#portfolio').position().top - 10) || ($(window).scrollTop() >= $('#contact').position().top -10)) {
   // $('#navbar').children().css('color', 'white');
    $('#navbar').children().removeClass('nav-over-portfolio').addClass('nav-over-profile');
  } else {
 //   $('#navbar').children().css('color', 'black');
    $('#navbar').children().removeClass('nav-over-profile').addClass('nav-over-portfolio');
  };
});
