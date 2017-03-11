$(document).ready(function() {
    $('#datepicker').datepicker();
    $('#datepickerImage').click(function() {
    $("#datepicker").focus();
  });
    $('.check-in').click(function(){
        $('.pop-out').fadeIn();
        $('.content-tog').fadeIn();
    });
  $(".item").click(function() {
  $("h4.selected").text($(this).text());
  $('.pop-out').fadeOut();
      $('.content-tog').fadeOut();
});
    $('.next-arrow i').click(function(){
        $('.first-selection').hide();
        $('.second-selection').fadeIn(1000);
    });
    $('.prev-arrow i').click(function(){
        $('.second-selection').hide();
        $('.first-selection').fadeIn(1000);
    });
    $('.close-tog').click(function(){
        $('.pop-out').fadeOut();
        $('.content-tog').fadeOut();
    })
    $('#menu-hamburger').hide();
    
    $('.icon-burger').click(function(){
        $('#menu-hamburger').toggle("slide");
        console.log('menu open');
        $('body').css({
            'overflow':'hidden'
        })
    }); 
    $('.cross,.cross-line-t').click(function(){
        $('#menu-hamburger').toggle("slide");
        console.log('menu close');
        $('body').css({
            'overflow' : 'scroll'
        })
    })
    $('.pop-out').hide();
    $('.pop-up').hide();
    $('.pop-in').click(function(){
        $('.pop-out').fadeToggle();
        $('.pop-up').fadeToggle();
    })
    $('.register-with-mail').click(function(){
        $('.pop-end').fadeIn();
        $('.pop-up').hide();
    })
    $('.close-pop-end').click(function(){
        $('.pop-end').fadeOut();
        $('.pop-out').fadeOut();
    })
    $('.close-pop-up').click(function(){
         $('.pop-up').fadeOut();
        $('.pop-out').fadeOut();
    })
});