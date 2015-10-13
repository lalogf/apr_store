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
	$(".navbar-default").hide();
	var scroll_start = 0;
	var startchange = $('#startchange');
	var offset = startchange.offset();
	if (startchange.length){
		$(document).scroll(function() { 
			scroll_start = $(this).scrollTop();
			// if(scroll_start > offset.top) {
			// 	$(".navbar-default").css('background-color', 'rgba(255,255,255,0.8)');
			// } else {
			// 	$('.navbar-default').css('background-color', 'transparent');
			// }
			if(scroll_start > offset.top) {
				$(".navbar-default").show().css('background-color','rgba(255,255,255,1)');
			} else {
				$('.navbar-default').hide();
			}
		});
	}


};

$(document).ready(ready2);
$(document).on('page:load', ready2);
