var ready2 = function(){
	$(".item").each(function(){
		console.log("lalo");
	});
}

$(document).ready(ready2);
$(document).on('page:load', ready2);