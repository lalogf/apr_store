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



var ready = function(){
  createCanvas();
  $('#product_phonetype_id').change(function(){
    if(($(this).val()) == 2 || ($(this).val()) == 3){
      canvas.setOverlayImage('/assets/i5.png', canvas.renderAll.bind(canvas))
    } else if (($(this).val()) == 7) {
      canvas.setOverlayImage('/assets/s5t.png', canvas.renderAll.bind(canvas))
    } else if (($(this).val()) == 8) {
      canvas.setOverlayImage('/assets/motog.png', canvas.renderAll.bind(canvas))
    } else if (($(this).val()) == 4){
      canvas.setOverlayImage('/assets/i6.png', canvas.renderAll.bind(canvas))
    } else if  (($(this).val()) == 5 ){
      canvas.setOverlayImage('/assets/i6t.png', canvas.renderAll.bind(canvas))
    } else if  (($(this).val()) == 6) {
      canvas.setOverlayImage('/assets/i6PT.png', canvas.renderAll.bind(canvas))
    } else if(($(this).val()) == 1) {
      canvas.setOverlayImage('/assets/i4t.png', canvas.renderAll.bind(canvas))
    }
  });
  
  // $(".designtocase").click(function(){
  //   //cod = (parseInt(this.id));
  //   cod = 0;
  //   createImage(cod);
  //   event.preventDefault();
  //   canvas.add(imgInstance);
  //   canvas.controlsAboveOverlay = true;
  //   canvas.item(0).set({
  //     borderColor: 'black',
  //     cornerColor: 'black',
  //     cornerSize: 20,
  //     transparentCorners: false
  //   });
  //   canvas.setActiveObject(canvas.item(0));    
  // });

  // $("canvas").mouseover(function(){
  //   caseImage = canvas.overlayImage;
  //   caseImage.selectable = false;
  //   canvas.setOverlayImage(null, canvas.renderAll.bind(canvas));
  //   canvas.add(line_for_print);
  //   preOverIm = $("#pruebadeimagen")[0];
  //   overIm = new fabric.Image(preOverIm,{selectable:false,top:42, left:170});
  //   canvas.add(overIm);
  //   line_for_print.bringToFront();
  //   imgInstance.sendToBack();
  //   imgInstance.setActiveObject();
  // });
  // $("canvas").mouseout(function(){
  //   canvas.setOverlayImage(caseImage, canvas.renderAll.bind(canvas));
  //   canvas.remove(line_for_print);
  // });
  if (window.location.pathname.split("/")[1] !== "admin"){
    $("#phoneTypeDropDown li a").click(function(e){
      var clickedValue = $(e.target).text();
      $("#dropdownMenu3 p").html(clickedValue);
      if(e.target.id === "2"){
        canvas.setOverlayImage('/assets/i5.png', canvas.renderAll.bind(canvas))
      } else if (e.target.id === "7") {
        canvas.setOverlayImage('/assets/s5t.png', canvas.renderAll.bind(canvas))
      } else if (e.target.id === "8") {
        canvas.setOverlayImage('/assets/motog.png', canvas.renderAll.bind(canvas))
      } else if (e.target.id === "4") {
        canvas.setOverlayImage('/assets/i6.png', canvas.renderAll.bind(canvas))
      } else if (e.target.id === "5") {
        canvas.setOverlayImage('/assets/i6t.png', canvas.renderAll.bind(canvas))
      } else if (e.target.id === "6") {
        canvas.setOverlayImage('/assets/i6PT.png', canvas.renderAll.bind(canvas))
      } else if (e.target.id === "1") {
        canvas.setOverlayImage('/assets/i4t.png', canvas.renderAll.bind(canvas))
      }
    });
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
      var newtext = $("#text_to_canvas").val();
      var font_size = $("#dropdownMenu1").html().split("<")[0];
      var font_family = $("#dropdownMenu2").html().split("<")[0];
      var text = new fabric.Text(newtext, {fontFamily: font_family,top:150, left:250,fill: "black", fontSize: font_size});
      canvas.add(text);
    });
    $('#generar').click(function(){
      // canvas.overlayImage = null;
      // canvas.renderAll.bind(canvas);
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
};


    var createCanvas = function (){
      canvas = new fabric.Canvas('c');
      canvas.setHeight(600);
      canvas.setWidth(600);
      canvas.setOverlayImage('/assets/i6t.png', canvas.renderAll.bind(canvas));
    }; 


    var createImage = function(cod){
      imgElement = $('.designtocase')[cod];
      imgInstance = new fabric.Image(imgElement, {
      // height: 600,
      // width: 600,
      // scaleY:300/imgElement.width,
      // scaleX:200/imgElement.width,
    left: 0,
    top: 0,
  },{ crossOrigin: 'Anonymous' } );
    };

    // var createLine = function(){
    //   line_for_print = new fabric.Rect({ top: 10, left: 100, width: 400, height: 580, fill: 'rgba(255,255,255,0)', hasControls:false,strokeDashArray: [5, 5],
    //     stroke: 'black',selectable: false})
    // };
    // createLine();

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

