$(document).ready(function() {
    $('#datepicker').datepicker();
    $('#datepickerImage').click(function() {
    $("#datepicker").focus();
  });
    $('.tog').hide();
    $('.check-in').click(function(){
        $('.tog').slideToggle();
    });
  $(".item").click(function() {
  $("h4.selected").text($(this).text());
});
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
});