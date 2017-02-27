$(document).ready(function() {
    $('#datepicker').datepicker();
    $('.tog').hide();
    $('.check-in').click(function(){
        $('.tog').slideToggle();
    })
  $(".item").click(function() {
  $("h4.selected").text($(this).text());
});
    
    $('.barre').click(function(){
        $('.burger-menu').toggle("slide");
        $('.logo-resp').toggle();
        $('section').toggleClass("active");
    })
});
