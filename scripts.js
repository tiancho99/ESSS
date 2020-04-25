$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


$('.container a').click(function(){

var $target = $($(this).data('target'));

if(!$target.hasClass('in'))

$('.container .in').removeClass('in').height(0);

});
