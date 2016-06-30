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
var overlay = '/assets/cases/i6t_500.png';
var overlay_line = '/assets/cases/i6t_l_500.png';
var overlay_mobile;
var overlay_line_mobile;
var text;



var ready = function(){
  if (window.matchMedia('(max-width: 767px)').matches) {
    overlay = '/assets/cases/i6t_mobile.png'
    overlay_line = '/assets/cases/i6t_l_mobile.png'
  }
  createCanvas();
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
  $("#phoneTypeDropDown li a").click(function(e){
    var clickedValue = $(e.target).text();
    $("#dropdownMenu3 p").html(clickedValue);
    if(e.target.id === "2"){
      canvas.setOverlayImage('/assets/cases/i5.png', canvas.renderAll.bind(canvas));
      overlay = '/assets/cases/i5.png';
      overlay_line = '/assets/cases/i5_l.png';
      $("#phone_type_name").val("2")
    } else if (e.target.id === "3") {
      canvas.setOverlayImage('/assets/cases/i5t.png', canvas.renderAll.bind(canvas));
      overlay = '/assets/cases/i5t.png';
      overlay_line = '/assets/cases/i5t_l.png';
      $("#phone_type_name").val("3")
    } else if (e.target.id === "7") {
      canvas.setOverlayImage('/assets/cases/gs5t.png', canvas.renderAll.bind(canvas));
      overlay = '/assets/cases/gs5t.png';
      overlay_line = '/assets/cases/gs5t_l.png';
      $("#phone_type_name").val("7");
    } else if (e.target.id === "9") {
      canvas.setOverlayImage('/assets/cases/gs6t.png', canvas.renderAll.bind(canvas));
      overlay = '/assets/cases/gs6t.png';
      overlay_line = '/assets/cases/gs6t_l.png';
      $("#phone_type_name").val("9");
    } else if (e.target.id === "8") {
      canvas.setOverlayImage('/assets/cases/motog.png', canvas.renderAll.bind(canvas));
      overlay = '/assets/cases/motog.png';
      overlay_line = '/assets/cases/motog_l.png';
      $("#phone_type_name").val("8");
    } else if (e.target.id === "4") {
      canvas.setOverlayImage('/assets/cases/i6.png', canvas.renderAll.bind(canvas));
      overlay = '/assets/cases/i6.png';
      overlay_line = '/assets/cases/i6_l.png';
      $("#phone_type_name").val("4")
    } else if (e.target.id === "5") {
      canvas.setOverlayImage('/assets/cases/i6t.png', canvas.renderAll.bind(canvas));
      overlay = '/assets/cases/i6t_500.png';
      overlay_line = '/assets/cases/i6t_l_500.png';
      overlay_mobile = '/assets/cases/i6t_mobile.png';
      overlay_line_mobile = '/assets/cases/i6t_l_mobile.png';
      $("#phone_type_name").val("5")
    } else if (e.target.id === "6") {
      canvas.setOverlayImage('/assets/cases/i6pt.png', canvas.renderAll.bind(canvas));
      overlay = '/assets/cases/i6pt.png';
      overlay_line = '/assets/cases/i6pt_l.png';
      $("#phone_type_name").val("6")
    } else if (e.target.id === "1") {
      canvas.setOverlayImage('/assets/cases/i4t.png', canvas.renderAll.bind(canvas));
      overlay = '/assets/cases/i4t.png';
      overlay_line = '/assets/cases/i4t_l.png';
      $("#phone_type_name").val("1")
    }
  });

$("canvas").mouseover(function(){
  canvas.setOverlayImage(null, canvas.renderAll.bind(canvas));
  canvas.setOverlayImage(overlay_line, canvas.renderAll.bind(canvas));
});
$("canvas").mouseout(function(){
  if (window.matchMedia('(max-width: 767px)').matches) {
    canvas.setOverlayImage(overlay_mobile, canvas.renderAll.bind(canvas));
  }else{
    canvas.setOverlayImage(overlay, canvas.renderAll.bind(canvas));
  }
  canvas.deactivateAll().renderAll();
});

$(".color_button").click(function(){
  var color = $(this).css("background-color");
  var hexColor = rgb2hex(color);
  $("#back_color").attr("value",hexColor);
  canvas.setBackgroundColor(color,canvas.renderAll.bind(canvas));
});
$("#back_color").change(function(){
  var color = $(this).val();
  canvas.setBackgroundColor(color,canvas.renderAll.bind(canvas));
});
var cont_width = $(".tab-content").width();
$("#newtext").emojiPicker({
  height: '300px',
  width: cont_width
});
$("section .emoji").click(function(e){
  var emojiShortcode = $(e.target).attr('class').split('emoji-')[1];
  var emojiUnicode = toUnicode(findEmoji(emojiShortcode).unicode);
  console.log(emojiUnicode);
  var text = new fabric.Text(emojiUnicode, {fontSize: '70', top:150, left:250, selectable:true});
  canvas.add(text);
});
$('#scale-control').change(function() {
  var scaleThisImage = canvas.getActiveObject();
  scaleThisImage.scale(parseFloat(this.value)).setCoords();
  canvas.renderAll();
});
$('#angle-control').change(function() {
  var rotateThisImage = canvas.getActiveObject();
  rotateThisImage.setAngle(parseInt(this.value, 10)).setCoords();
  canvas.renderAll();
});
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


$("#textCreation").click(function(){
  // var newtext = $("#text_to_canvas").val();
  // var font_size = $("#dropdownMenu1").html().split("<")[0];
  // var font_family = $("#dropdownMenu2").html().split("<")[0];
  // var text_color = $("#text_color").val();
  $(".text-edition-box").toggle();
  var newtext = "Editar texto"
  var font_size = "30"
  var font_family = "Century Gothic"
  var text_color = "black"
  text = new fabric.IText(newtext, {fontFamily: font_family,top:150, left:250,fill: text_color, fontSize: font_size});
  canvas.add(text);
  canvas.setActiveObject(text);
  $("#text_to_canvas").val("Editar texto");
  $("#text_to_canvas").on('input',function(e){
    text.text = $(this).val();
    canvas.renderAll();
  });
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
  $("#dropdownMenu1").bind("DOMSubtreeModified",function(){
    font_size = $(this).html().split("<")[0];
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
      $('#image_to_print').val(canvas.toDataURL('image/png'));

      canvas.overlayImage = overlay;
      canvas.deactivateAll().renderAll();
      $('#picture_url').val(canvas.toDataURL('image/png'));

    });
} else {
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
  });
  $('#create').click(function(){
    canvas.deactivateAll().renderAll();
    $('#newcaseimage').val(canvas.toDataURL('image/png'));
  });
}
$(".uploadcare-widget-button-open")[0].innerHTML = "Sube una imagen"
};


var createCanvas = function (){
  canvas = new fabric.Canvas('c');
  if (window.matchMedia('(max-width: 767px)').matches) {
    canvas.setHeight(300);
    canvas.setWidth(300);
    canvas.setOverlayImage('/assets/cases/i6t_mobile.png', canvas.renderAll.bind(canvas));
  } else {
    canvas.setHeight(500);
    canvas.setWidth(500);
    canvas.setOverlayImage('/assets/cases/i6t_500.png', canvas.renderAll.bind(canvas));
  }
  
}; 


var createImage = function(cod){
  imgElement = $('.designtocase')[cod];
  if (window.matchMedia('(max-width: 767px)').matches) {
  imgInstance = new fabric.Image(imgElement, {
      height: 300,
      width: 300,
      scaleY:150/imgElement.width,
      scaleX:100/imgElement.width,
      left: 0,
      top: 0,
    },{ crossOrigin: 'Anonymous' } );
  } else {
  imgInstance = new fabric.Image(imgElement, {
      height: 600,
      width: 600,
      scaleY:300/imgElement.width,
      scaleX:200/imgElement.width,
      left: 0,
      top: 0,
    },{ crossOrigin: 'Anonymous' } );
  }
};


    function toUnicode(code) {
      var codes = code.split('-').map(function(value, index) {
        return parseInt(value, 16);
      });
      return String.fromCodePoint.apply(null, codes);
    };
    function findEmoji(emojiShortcode) {
      var emojis = $.fn.emojiPicker.emojis;
      for (var i = 0; i < emojis.length; i++) {
        if (emojis[i].shortcode == emojiShortcode) {
          return emojis[i];
        }
      }
    };
    function rgb2hex(orig){
     var rgb = orig.replace(/\s/g,'').match(/^rgba?\((\d+),(\d+),(\d+)/i);
       return (rgb && rgb.length === 4) ? "#" +
       ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
       ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
       ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : orig;
     };

     $(document).ready(ready);
     $(document).on('page:load', ready);

/* TODO : 
1. si eliges una foto luego del texto, enviar la foto al frente
2. Poder poner solo un texto 
*/
