var ready2 = function(){
	$(".hoverforcase").click(function(){
		var caseImage = ($(this).attr("src")).replace("thumb","thumbBox");
		var DesignId = "#hovertry" + $(this).attr("design_id");
		$(DesignId).attr("src",caseImage);
	});
	if(window.location.href !== "http://localhost:3000"){
			$(".navbar-default").hide();
	} else {
		$(".navbar-default").removeClass("navbar-fixed-top");
	}
	// var scroll_start = 0;
	// var startchange = $('#scroll');
	// var offset = startchange.offset();
	// if (startchange.length){
	// 	$(document).scroll(function() { 
	// 		scroll_start = $(this).scrollTop();
	// 		if(scroll_start > offset.top) {
	// 			$(".navbar-default").show().css('background-color','rgba(255,255,255,1)');
	// 		} else {
	// 			$('.navbar-default').hide();
	// 		}
	// 	});
	// }
	// var measure = $($(".left-side")[0]).css("height").split("px")[0];
	// var line_padding_top = measure/100*12.5
	// var line_height = measure - (line_padding_top*2)
	// // $(".captionBox").height(measure + "px")
	// $(".caption").css("margin-top", + line_padding_top + "px")

	// // console.log(line_padding_top);
	// // console.log(line_height);
	// $(".productosBox").hover(function(){
	// 	var imageForHover = $(this).attr("diseno");
	// 	$(this).children("img").toggle();
	// });
	$(".home4").hover(function(){
		$(".hideButton").toggle();
	})
	$("#card-2").flip({
		axis: 'x',
		trigger: 'hover'
	});

	var tHeight = $(".caption").height();
	$(".artists").height(tHeight).width(tHeight);
	$(".divider").height(tHeight);
	var altura = (($(".caption").height() - $(".title").height())/2);
	// $(".bannerHover").height($(".caption").height());
	// $(".bannerHover").width($(".thumbnail").width());

	// $(".thumbnail").hover(function(){
	// 	$(this).addClass('bannerHover');
	// 	$(".marca", this).css('color','white');
	// 	$(".ver", this).toggle();
	// }, function(){
	// 	$(this).removeClass('bannerHover');
	// 	$(".marca",this).css('color','black');
	// 	$(".ver", this).toggle();
	// });
	var firstBg;
	$(".artists").hover(function(){
		firstBg = $(this).css("background-image");
		console.log(firstBg);
		// $(this).parent().append("<a class='btn btn-default'>Ver</a>");
		$(this).parent().attr("style","background-image: url('http://orig14.deviantart.net/405b/f/2012/180/b/f/pattern_variation_by_absurdwordpreferred-d55auet.jpg')");
		$(this).siblings().hide();
		// $(this).parent().append("<a class='btn btn-default century supercenter uppercase'>ver</a>")
		$(this).css("background-image","none");
	},function(){
		$(this).parent().attr("style","background:none");
		$(this).siblings().show();
		$(this).css("background-image",firstBg);
	})

	var uploading = function (){
		var widget = uploadcare.Widget('[role=uploadcare-uploader]');
		widget.onUploadComplete(function(info) {
			var imageForCaseId = "my-image-" + ($(".designtocase").length + 1)
			console.log(info.cdnUrl);
			$("#wuju").append('<img class="designtocase" id="'+ imageForCaseId +'" src="'+ info.cdnUrl +'">');
			makeDesignsClickable();
		});
	};
	uploading();
};

var makeDesignsClickable = function () {
	$(".designtocase").click(function(e){
		imgData = e.target.src;
		fabric.Image.fromURL(imgData,  function (img) {
			canvas.add(img.set({
				left: 0,
				top: 0,
			}));
			canvas.controlsAboveOverlay = true;
			canvas.item(0).set({
				borderColor: 'black',
				cornerColor: 'black',
				cornerSize: 20,
				transparentCorners: false
			});
			canvas.setActiveObject(canvas.item(0)); 
		} , { crossOrigin: 'anonymous' });
	})
};

$(document).ready(ready2);
$(document).on('page:load', ready2);
