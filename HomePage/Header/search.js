$(document).ready(function() {
    $('#datepicker').datepicker();
    $(function(){
    $('#datepicker').datepicker({
      inline: true,
      showOtherMonths: true,
      dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    });
  });
});