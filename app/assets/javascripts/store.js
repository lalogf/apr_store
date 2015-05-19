var ready2 = function(){
	$("#designer").click(function(){
		console.log("working");
		$("#devices").hide();
		$("#cases").hide();
		$("#designers").toggle();
	});
	$("#device").click(function(){
		$("#designers").hide();
		$("#cases").hide();
		$("#devices").toggle();
	});
	$(".showcases").click(function(){

		$("#cases").show();
	});
	$(".hoverc").mouseover(function(){
		if(this.id=== "i6"){
			$("#hovertry").attr("src",iphone6)

		}
		else if (this.id === "i5"){
			$("#hovertry").attr("src",iphone5)
		}
		else if (this.id === "gs5"){
			$("#hovertry").attr("src",galaxys5)
		}
		else if (this.id==="mg"){
			$("#hovertry").attr("src",motog)

		}
	});
};

$(document).ready(ready2);
$(document).on('page:load', ready2);
