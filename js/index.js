$('.go-btn').click(function() {
  var tgt = $(this).data("scroll-target");
  $('html,body').animate({
    scrollTop: $(tgt).offset().top
  }, 1000);
});
$('.nav a').on('click', function() {
  $('.collapse').collapse('hide');
});
var myPresentation = 'https://docs.google.com/presentation/d/1E8nSI94E1YkSa5QC8efpCMMAQ43B-SF59l6cVp6JXhw/edit?usp=sharing';
