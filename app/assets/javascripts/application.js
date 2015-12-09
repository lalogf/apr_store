// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery.turbolinks
//= require turbolinks
//= require jquery.emojipicker.js
//= require jquery.emojipicker.a.js
//= require masonry/jquery.masonry
//= require fabric
//= require snap.svg.js
//= require preview
//= require front_store
//= require svgs.js
//= require_self



var ready = function (){
	// if ($("form#new_collection .form-group").attr("class") == "form-group has-error has-feedback"){
	// 	$("#crearColeccion").modal("show");
	// }
	if ((($("form#new_collection .has-error")).length > 0)) {
		$("#crearColeccion").modal("show");
		console.log("hello error coleccion");
	}
	else if (($("form#new_designer .has-error").length) > 0) {
		$("#crearDisenador").modal("show");
	};
$(".banner").hover(function(){
	$(this).addClass('bannerHover');
	$(".marca", this).css('color','white');
	$(".ver", this).toggle();
}, function(){
	$(this).removeClass('bannerHover');
	$(".marca",this).css('color','black');
	$(".ver", this).toggle();
});


};

$(document).ready(ready)
$(document).on('page:load',ready)