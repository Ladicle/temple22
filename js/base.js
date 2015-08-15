/* -----------------
		Base Script
	--------------- */

var HEIGHT, C_HEIGHT, sum, WIDTH;

$(function(){
	
	/*
	sum = $("article").height()+50;
	$("#summary").height(sum);
*/
	$(".openlink").click(function(){
		$("li:eq("+$("a").index(this)+") .non").slideToggle(300);
	});
	
	var scl = 0;
	var ck = true;
	
	WIDTH = $("#overwrap").width();
	HEIGHT = $("#overwrap").height();
	if(WIDTH<1526){
		$("#upp").hide().removeAttr("id");
		$("#goto").hide().removeAttr("id");
		$("#topp").hide().removeAttr("id");
	}
	

	$(window).scroll(function(){
		scl = $(this).scrollTop();
		
		if(scl > 400 && ck){
			$("#upp").animate({bottom:"0px"}, "slow", "swing");
			$("#goto").show();
			$("#topp").show();
			ck = false;
		}
		
		if(scl < 300 && !ck){
			$("#upp").animate({bottom:"-200px"}, 200, "swing");
			$("#goto").hide();
			$("#topp").hide();
			ck = true;
		}
	});
	
	$("#topp").click(function(){
			$("html,body").animate({scrollTop:$("#title_logo").offset().top-50 }, "slow", "swing");
	});
	$("#goto").click(function(){
			$("html,body").animate({scrollTop:$("#title_logo").offset().top-50 }, "slow", "swing");
	});
});

