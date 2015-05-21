var ready2 = function(){
	$("#designer").click(function(){
		$("#alldesigns").hide();
		$(".cases").hide();
		$("#designers").toggle();
	});
	$(".showcases").click(function(){
		$(".cases").hide();
		var rowtotoggle = "#cases" + $(this).attr("id");
		$(rowtotoggle).toggle();
	});
	$("#designs").click(function(){
		$("#alldesigns").toggle();
		$("#designers").hide();
		$(".designercases").hide();
	});

	$(".hoverforcase").click(function(){
		var caseImage = ($(this).attr("src")).replace("thumb","thumbBox");
		var DesignId = "#hovertry" + $(this).attr("design_id");
		$(DesignId).attr("src",caseImage);
	});

	// $("#device").click(function(){
	// 	$("#designers").hide();
	// 	$("#cases").hide();
	// 	$("#devices").toggle();
	// });
	// $(".showcases").click(function(){

	// 	$("#cases").show();
	// });

	// $(".hoverc").mouseover(function(){
	// 	if(this.id=== "i6"){
	// 		$("#hovertry").attr("src",iphone6)

	// 	}
	// 	else if (this.id === "i5"){
	// 		$("#hovertry").attr("src",iphone5)
	// 	}
	// 	else if (this.id === "gs5"){
	// 		$("#hovertry").attr("src",galaxys5)
	// 	}
	// 	else if (this.id==="mg"){
	// 		$("#hovertry").attr("src",motog)

	// 	}
	// });
};

$(document).ready(ready2);
$(document).on('page:load', ready2);
