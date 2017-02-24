$(document).ready(function(){
		$("#when").click(function(){
			$(".calendar").css("display", "block");
            $("#red_arrow2").css("display", "block");
            
		});
    
        $(".calendar").hover(function(){
			$(".calendar").css("display", "block");
            $("#red_arrow2").css("display", "block");
		}, function() {
            $(".calendar").css("display", "none");
            $("#red_arrow2").css("display", "none");
        });
    
    
    $("#experience").click(function(){
			$("#choisir_board").css("display", "block");
            $("#red_arrow1").css("display", "block");
            
		});
    
        $("#choisir_board").hover(function(){
			$("#choisir_board").css("display", "block");
            $("#red_arrow1").css("display", "block");
		}, function() {
            $("#choisir_board").css("display", "none");
            $("#red_arrow1").css("display", "none");
        });
});



$(function() {
    $('.calendar').pignoseCalendar({
			disabledWeekdays: [0, 6] // SUN (0), SAT (6) 
        ,
            buttons: true,
	});
});