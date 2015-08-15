$(function(){
	pointcolor = ["#81101a", "#944910", "#906b14", "#8e8516", "#5b8340", "#216877", "#21457c", "#3e2c72", "#612753"];
	$("#toctitle a:eq(0)").hover(function(){
		$("#toctitle a:eq(0) span").css("background", pointcolor[0]);
	},function(){
		$("#toctitle a:eq(0) span").css("background", "#999");
	});
	$("#toctitle a:eq(1)").hover(function(){
		$("#toctitle a:eq(1) span").css("background", pointcolor[1]);
	},function(){
		$("#toctitle a:eq(1) span").css("background", "#999");
	});
	$("#toctitle a:eq(2)").hover(function(){
		$("#toctitle a:eq(2) span").css("background", pointcolor[2]);
		$("#bubble").show(300);
	},function(){
		$("#toctitle a:eq(2) span").css("background", "#999");
		$("#bubble").hide();
	});
	$("#toctitle a:eq(6)").hover(function(){
		$("#toctitle a:eq(6) span").css("background", pointcolor[3]);
	},function(){
		$("#toctitle a:eq(6) span").css("background", "#999");
	});
	$("#toctitle a:eq(7)").hover(function(){
		$("#toctitle a:eq(7) span").css("background", pointcolor[4]);
	},function(){
		$("#toctitle a:eq(7) span").css("background", "#999");
	});
	$("#toctitle a:eq(8)").hover(function(){
		$("#toctitle a:eq(8) span").css("background", pointcolor[5]);
	},function(){
		$("#toctitle a:eq(8) span").css("background", "#999");
	});
	$("#toctitle a:eq(9)").hover(function(){
		$("#toctitle a:eq(9) span").css("background", pointcolor[6]);
	},function(){
		$("#toctitle a:eq(9) span").css("background", "#999");
	});
	$("#toctitle a:eq(10)").hover(function(){
		$("#toctitle a:eq(10) span").css("background", pointcolor[7]);
	},function(){
		$("#toctitle a:eq(10) span").css("background", "#999");
	});
	$("#toctitle a:eq(11)").hover(function(){
		$("#toctitle a:eq(11) span").css("background", pointcolor[8]);
	},function(){
		$("#toctitle a:eq(11) span").css("background", "#999");
	});
	$("#toctitle a:eq(12)").hover(function(){
		$("#toctitle a:eq(12) span").css("background", pointcolor[9]);
	},function(){
		$("#toctitle a:eq(12) span").css("background", "#999");
	});
	

	$("#toctitle a[href='#bunka']").click(function(){
		$("ol ol").slideToggle("slow");
		return false;
	});
});