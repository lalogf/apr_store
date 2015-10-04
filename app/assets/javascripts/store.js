var ready2 = function(){
	$("#designer").click(function(){
		// $("#alldesigns").hide();
		$(".cases").hide();
		$("#designers").toggle();
	});

	$(".showcases").click(function(){
		$(".cases").hide();
		// $(".designercases").hide();
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


};

$(document).ready(ready2);
$(document).on('page:load', ready2);
