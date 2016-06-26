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
	$(".home4").hover(function(){
		$(".hideButton").toggle();
	})

	var uploading = function (){
		var widget = uploadcare.Widget('[role=uploadcare-uploader]');
		widget.onUploadComplete(function(info) {
			var imageForCaseId = "my-image-" + ($(".designtocase").length + 1)
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
