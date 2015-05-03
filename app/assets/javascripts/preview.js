var canvas; 
var imgElement; 
var imgInstance;
var butn;
var cod;





var ready = function(){
  createCanvas();
  $('#product_phonetype_id').change(function(){
    if(($(this).val()) == 2 || ($(this).val()) == 3){
      canvas.setOverlayImage('/assets/i5.png', canvas.renderAll.bind(canvas))
    } else if (($(this).val()) == 9) {
      canvas.setOverlayImage('/assets/s5t.png', canvas.renderAll.bind(canvas))
    } else if (($(this).val()) == 10) {
      canvas.setOverlayImage('/assets/motog.png', canvas.renderAll.bind(canvas))
    } else if (($(this).val()) == 5 || ($(this).val()) == 6){
      canvas.setOverlayImage('/assets/i6.png', canvas.renderAll.bind(canvas))
    } else if  (($(this).val()) == 7 || ($(this).val()) == 8) {
      canvas.setOverlayImage('/assets/i6t.png', canvas.renderAll.bind(canvas))
    } else {
      canvas.setOverlayImage('/assets/i5.png')
    }
  });
  
  $(".designtocase").click(function(){
    cod = (parseInt(this.id));
    createImage(cod);
    event.preventDefault();
    canvas.add(imgInstance);
    canvas.controlsAboveOverlay = true;
    canvas.item(0).set({
        borderColor: 'black',
        cornerColor: 'black',
        cornerSize: 20,
        transparentCorners: false
      });
    canvas.setActiveObject(canvas.item(0));    
    $('#create').click(function(){
      canvas.deactivateAll().renderAll();
      $('#newcaseimage').val(canvas.toDataURL('image/png'));
    }); 
  });
};


var createCanvas = function (){
  canvas = new fabric.Canvas('c');
  canvas.setHeight(600);
  canvas.setWidth(400);
  canvas.setOverlayImage('/assets/i4.png', canvas.renderAll.bind(canvas));
}; 

var createImage = function(cod){
  imgElement = $('.designtocase')[cod];
  imgInstance = new fabric.Image(imgElement, {
    // height: 600,
    // width: 400,
    // scaleY:300/imgElement.width,
    // scaleX:200/imgElement.width,
    left: 0,
    top: 0,
  },{ crossOrigin: 'anonymous' } );
};

// fabric.Image.fromURL(imgData, callbackFunc , { crossOrigin: 'anonymous' });

// var borders = function (i){
//         canvas.item(i).set({
//         borderColor: 'black',
//         cornerColor: 'black',
//         cornerSize: 20,
//         transparentCorners: false
//       });
// }


$(document).ready(ready);
$(document).on('page:load', ready);

