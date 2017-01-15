var canvas; 
var imgElement; 
var imgInstance;
var butn;
var cod;
var line_for_print;
var caseImage;
var overIm;
var preOverIm;
var imgData;
// var overlay = '/assets/cases/i6t_500.png';
var overlay = '/assets/cases/i6t.png';
// var overlay_line = '/assets/cases/i6t_l_500.png';
var overlay_line = '/assets/cases/i6t_l.png';
var overlay_mobile;
var text;



var ready = function(){
  if (window.matchMedia('(max-width: 767px)').matches) {
    overlay = '/assets/cases/i6t_mobile.png'
    overlay_line = '/assets/cases/i6t_l_mobile.png'
  };
  uploading();
  createCanvas();
  deletedItem();
  changedCanvas(); 
  $('#product_phonetype_id').change(function(){
    if(($(this).val()) == 2 || ($(this).val()) == 3){
      canvas.setOverlayImage('/assets/cases/i5.png', canvas.renderAll.bind(canvas));
    } else if (($(this).val()) == 7) {
      canvas.setOverlayImage('/assets/cases/gs5t.png', canvas.renderAll.bind(canvas))
    } else if (($(this).val()) == 9) {
      canvas.setOverlayImage('/assets/cases/gs6t.png', canvas.renderAll.bind(canvas))
    } else if (($(this).val()) == 8) {
      canvas.setOverlayImage('/assets/cases/motog.png', canvas.renderAll.bind(canvas))
    } else if (($(this).val()) == 4){
      canvas.setOverlayImage('/assets/cases/i6.png', canvas.renderAll.bind(canvas))
    } else if  (($(this).val()) == 5 ){
      canvas.setOverlayImage('/assets/cases/i6t_500.png', canvas.renderAll.bind(canvas))
    } else if  (($(this).val()) == 6) {
      canvas.setOverlayImage('/assets/cases/i6pt.png', canvas.renderAll.bind(canvas))
    } else if(($(this).val()) == 1) {
      canvas.setOverlayImage('/assets/cases/i4t.png', canvas.renderAll.bind(canvas))
    }
  });

if (window.location.pathname.split("/")[1] !== "admin"){
  $(".dropdown .phonetype a").click(function(e){
    // var clickedValue = $(e.target).text();
    // $("#dropdownMenu3 p").html(clickedValue);
    if(e.target.id === "2"){
      overlay = '/assets/cases/i5.png';
      overlay_line = '/assets/cases/i5_l.png';
      overlay_mobile = '/assets/cases/mobile/i5.png';
      $("#phone_type_name").val("2");
    } else if (e.target.id === "3") {
      overlay = '/assets/cases/i5t.png';
      overlay_line = '/assets/cases/i5t_l.png';
      overlay_mobile = '/assets/cases/mobile/i5t.png';
      $("#phone_type_name").val("3");
    } else if (e.target.id === "7") {
      overlay = '/assets/cases/gs5t.png';
      overlay_line = '/assets/cases/gs5t_l.png';
      overlay_mobile = '/assets/cases/mobile/gs5t.png';
      $("#phone_type_name").val("7");
    } else if (e.target.id === "9") {
      overlay = '/assets/cases/gs6t.png';
      overlay_line = '/assets/cases/gs6t_l.png';
      overlay_mobile = '/assets/cases/mobile/gs6t.png';
      $("#phone_type_name").val("9");
    } else if (e.target.id === "8") {
      overlay = '/assets/cases/motog.png';
      overlay_line = '/assets/cases/motog_l.png';
      overlay_mobile = '/assets/cases/mobile/motog.png';
      $("#phone_type_name").val("8");
    } else if (e.target.id === "4") {
      overlay = '/assets/cases/i6.png';
      overlay_line = '/assets/cases/i6_l.png';
      overlay_mobile = '/assets/cases/mobile/i6.png';
      $("#phone_type_name").val("4");
    } else if (e.target.id === "5") {
      overlay = '/assets/cases/i6t.png';
      overlay_line = '/assets/cases/i6t_l.png';
      overlay_mobile = '/assets/cases/mobile/i6t.png';
      $("#phone_type_name").val("5");
    } else if (e.target.id === "6") {
      overlay = '/assets/cases/i6pt.png';
      overlay_line = '/assets/cases/i6pt_l.png';
      overlay_mobile = '/assets/cases/mobile/i6pt.png';
      $("#phone_type_name").val("6");
    } else if (e.target.id === "1") {
      overlay = '/assets/cases/i4t.png';
      overlay_line = '/assets/cases/i4t_l.png';
      overlay_mobile = '/assets/cases/mobile/i4t.png';
      $("#phone_type_name").val("1")
    };
    if (!(window.matchMedia('(max-width: 767px)').matches)){
      canvas.setOverlayImage(overlay, canvas.renderAll.bind(canvas));
    } else {
      canvas.setOverlayImage(overlay_mobile, canvas.renderAll.bind(canvas));
    };
  });


  if (!(window.matchMedia('(max-width: 767px)').matches)){
    $("canvas").mouseover(function(){
      canvas.setOverlayImage(null, canvas.renderAll.bind(canvas));
      canvas.setOverlayImage(overlay_line, canvas.renderAll.bind(canvas));
    });
  }

  if (!(window.matchMedia('(max-width: 767px)').matches)){
    $("canvas").mouseout(function(){
      canvas.setOverlayImage(overlay, canvas.renderAll.bind(canvas));
      canvas.deactivateAll().renderAll();
    })};

$(".color-button").click(function(){
  var color = $(this).css("background-color");
  var hexColor = rgb2hex(color);
  $("#back_color").attr("value",hexColor);
  canvas.setBackgroundColor(color,canvas.renderAll.bind(canvas));
});

$("#back_color").change(function(){
  var color = $(this).val();
  canvas.setBackgroundColor(color,canvas.renderAll.bind(canvas));
});

// var cont_width = $(".tab-content").width();
// var cont_margin = $(".tab-content").css("margin-left");

// $("#newtext").emojiPicker({
//   width: (cont_width- cont_margin)
// });


$(".emoji").click(function(e){
  var emojiUnicode = $(e.target).text();
  if (window.matchMedia('(max-width: 767px)').matches){
    var text = new fabric.Text(emojiUnicode, {fontSize: '50', top:110, left:125, selectable:true});
  } else{
    var text = new fabric.Text(emojiUnicode, {fontSize: '70', top:212, left:212, selectable:true});
  }
  canvas.add(text);
});

// $('#scale-control').change(function() {
//   var scaleThisImage = canvas.getActiveObject();
//   scaleThisImage.scale(parseFloat(this.value)).setCoords();
//   canvas.renderAll();
// });

// $('#angle-control').change(function() {
//   var rotateThisImage = canvas.getActiveObject();
//   rotateThisImage.setAngle(parseInt(this.value, 10)).setCoords();
//   canvas.renderAll();
// });

$("#fontSizeDropDown li a").click(function(e){
  var clickedValue = $(e.target).text();
  $("#dropdownMenu1").html(clickedValue)
  .width(40)
  .append("<span class='caret'></span>");
});

$("#fontFamilyDropDown li a").click(function(e){
  var clickedValue = $(e.target).text();
  $("#dropdownMenu2").html(clickedValue)
  .width(300)
  .append("<span class='caret'></span>");
});


$("#text_to_canvas").click(function(){
  var newtext = "Editar texto"
  var font_size = "30"
  var font_family = "Century Gothic Stb Bold"
  var text_color = "black"
  text = new fabric.IText(newtext, {fontFamily: font_family,top:150, left:180,fill: text_color, fontSize: font_size});
  canvas.add(text);
  canvas.setActiveObject(text);
  // text.on("change",$("#text_to_canvas").val(text.text));
  // $("#text_to_canvas").val(text.);
  // $("#text_to_canvas").on('input',function(e){
  //   text.text = $(this).val();
  //   canvas.renderAll();
  // });
  $(".color_button2").click(function(){
    var color = $(this).css("background-color");
    var hexColor = rgb2hex(color);
    text.setColor(hexColor);
    canvas.renderAll();
  });
  $("#dropdownMenu2").bind("DOMSubtreeModified",function(){
    font_family = $(this).html().split("<")[0];
    text.fontFamily = font_family;
    canvas.renderAll();
  });
  $("#_tamano").change(function(){
    font_size = $(this).val();
    text.fontSize = font_size;
    canvas.renderAll();
    text.setActiveObject();
  });
});

$('#generar').click(function(e){
      // canvas.overlayImage = null;
      // canvas.renderAll.bind(canvas);
      var overlay = canvas.overlayImage;
      canvas.overlayImage = null;
      canvas.deactivateAll().renderAll();
      $('#image_to_print').val(canvas.toDataURL({
        format: 'png',
        left:90,
        width:277,
        multiplier:2
      }));

      canvas.overlayImage = overlay;
      canvas.deactivateAll().renderAll();
      $('#picture_url').val(canvas.toDataURL('image/png'));

    });    
} 
//else {
//   $(".designtocase").click(function(e){
//     imgData = e.target.src;
//     fabric.Image.fromURL(imgData,  function (img) {
//       canvas.add(img.set({
//         height: 300,
//         width: 300,

//         left: 0,
//         top: 0
//       }));
//       canvas.controlsAboveOverlay = true;
//       canvas.sendToBack(img);

//     } , { crossOrigin: 'anonymous' });
//   });
//   $('#create').click(function(){
//     canvas.deactivateAll().renderAll();
//     $('#newcaseimage').val(canvas.toDataURL('image/png'));
//   });
// };


  $(".uploadcare-widget-button-open")[0].innerHTML = "Agregar imagen";
};


var createCanvas = function (){
  canvas = new fabric.Canvas('c');
  if (window.matchMedia('(max-width: 767px)').matches) {
    canvas.setHeight(250);
    canvas.setWidth(250);
    canvas.setOverlayImage('/assets/cases/mobile/i6t_2.png', canvas.renderAll.bind(canvas));
  } else {
    canvas.setHeight(450);
    canvas.setWidth(450);
    canvas.setOverlayImage('/assets/cases/i6t.png', canvas.renderAll.bind(canvas));
  }
  
}; 

var makeDesignsClickable = function () {
  imgData = $(".designtocase")[0].src;
  if (!(window.matchMedia('(max-width: 767px)').matches)){ 
    fabric.Image.fromURL(imgData,  function (img) {
      if (img.height >= img.width){
        canvas.add(img.set({
          height:450,
          width:450/img.height*img.width,
          left: -(((450/img.height*img.width)-450)/2),
          top: 0,
        }));
      } else if (img.width > img.height && img.width > 450) {
        canvas.add(img.set({
          height: 450,
          width: 450/img.height*img.width,
          left: -(((450/img.height*img.width)-450)/2),
          top: 0,
        }));
      }
      canvas.controlsAboveOverlay = true;
      canvas.setActiveObject(canvas.item(0));
    } , { crossOrigin: 'anonymous' })
  } else {
    fabric.Image.fromURL(imgData,  function (img) {
      if (img.height >= img.width){
        canvas.add(img.set({
          height:250,
          width:250/img.height*img.width,
          left: -(((250/img.height*img.width)-250)/2),
          top: 0,
          selectable:false
        }));
      } else if (img.width > img.height && img.width > 250) {
        canvas.add(img.set({
          height: 250,
          width: 250/img.height*img.width,
          left: -(((250/img.height*img.width)-250)/2),
          top: 0,
          selectable:false
        }));
      }
    } , { crossOrigin: 'anonymous' })
  }
};


var changedCanvas = function(){
  canvas.on('object:added',(function(e){
    var activeObject = e.target;
    if(activeObject.type!=="text" && activeObject.type !== "i-text"){
      activeObject.sendToBack();
    }
  }));
}

var deletedItem = function (){
  var selectedObject;
  canvas.on('object:selected',(function(e){
    selectedObject = e.target;
  }
  ));
  $('html').keyup(function(e){
    if(e.keyCode == 8 && selectedObject.type !== "i-text") {
      selectedObject.remove();
    }
  });
  $("#remove-text").click(function(){
    if(selectedObject.type === "i-text"){
        selectedObject.remove();
    }
  });

}



    // function toUnicode(code) {
    //   var codes = code.split('-').map(function(value, index) {
    //     return parseInt(value, 16);
    //   });
    //   return String.fromCodePoint.apply(null, codes);
    // };
    // function findEmoji(emojiShortcode) {
    //   var emojis = $.fn.emojiPicker.emojis;
    //   for (var i = 0; i < emojis.length; i++) {
    //     if (emojis[i].shortcode == emojiShortcode) {
    //       return emojis[i];
    //     }
    //   }
    // };
    function rgb2hex(orig){
     var rgb = orig.replace(/\s/g,'').match(/^rgba?\((\d+),(\d+),(\d+)/i);
       return (rgb && rgb.length === 4) ? "#" +
       ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
       ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
       ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : orig;
     };

     var uploading = function (){
      var widget = uploadcare.Widget('[role=uploadcare-uploader]');
      widget.onUploadComplete(function(info) {
        var imageForCaseId = "my-image-" + ($(".designtocase").length + 1)
        $("#wuju").append('<img class="designtocase" id="'+ imageForCaseId +'" src="'+ info.cdnUrl +'">');
        makeDesignsClickable();
      });
    };

     $(document).ready(ready);
     $(document).on('page:load', ready);

