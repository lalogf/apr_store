var ready = function (){
	var case_type;
	var design_title = $("#product_title").val();
	$("#product_phonetype_id").change(function(){
		case_type = ($("#product_phonetype_id option:selected").text());
		$("#product_title").val("Case "+ design_title +" " +case_type);
	});
};

$(document).ready(ready);
$(document).on('page:load',ready)