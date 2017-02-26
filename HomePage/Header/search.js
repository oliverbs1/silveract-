$(document).ready(function() {
    $('#datepicker').datepicker();
    $('.check-in').click(function(){
        $('.tog').toggle();
    })
  $(".item").click(function() {
  $("h4.selected").text($(this).text());
});
});