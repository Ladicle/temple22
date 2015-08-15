$(function(){
	$(".imgs").click(function(){
		var page = $("#over").attr("class");
		var num = $("div").index(this) -4;
		$("body").css("overflow","hidden");
		$("#over").show().prepend("<img src='img/"+page+"/0"+num+".jpg' id='dispimg' />");
		var w = WIDTH/2 - ($("#dispimg").width())/2;
		var h = HEIGHT/2 - ($("#dispimg").height())/2;
		$("#dispimg").css({marginLeft:w+"px", marginTop:h+"px"});
		$("#dispimg").click(function(){
			$("body").css("overflow","auto");
			$("#over").hide().empty();
		});
	});
});