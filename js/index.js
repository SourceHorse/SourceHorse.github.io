$('.go-btn').click(function() {
  var tgt = $(this).data("scroll-target");
  $('html,body').animate({
    scrollTop: $(tgt).offset().top
  }, 1000);
});
$('.nav a').on('click', function() {
  $('.collapse').collapse('hide');
});
