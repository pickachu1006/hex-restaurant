$(document).ready(function() {
   $('.fa-bars').on('click',  function(e){
      e.preventDefault();
      $('body').toggleClass('menu-show');
  });
  $('.foodlist li').on('click', function (e) {
    e.preventDefault();
    $(this).find('a').addClass('clicked');
    $(this).addClass('clicked-bg').siblings().removeClass('clicked-bg').find('a').removeClass('clicked');  
  });
});