$(document).ready(function(){

	$("a").mouseenter(function(){
		$(".underbar").stop().animate({
			"left":"51%","right":"51%",
			"transition":"all 0.3s linear"
				
		});
	});
	
	$("a").mouseleave(function(){
		$(".underbar").stop().animate({
			"left":"0%","right":"0%",
			"transition":"all 0.3s linear"
		});
	});
})