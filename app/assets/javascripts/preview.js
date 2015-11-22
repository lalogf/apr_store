var canvas; 
var imgElement; 
var imgInstance;
var butn;
var cod;
var line_for_print;
var caseImage;
var overIm;
var preOverIm;




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

  // canvas.on('mouse:over', function(e) {
  //   canvas.add(line_for_print);
  //   canvas.setOverlayImage(null);
  //   console.log("hover")
  // });
  // canvas.on('mouse:out', function(e) {
  //   canvas.remove(line_for_print);
  //   canvas.setOverlayImage('/assets/i6t.png', canvas.renderAll.bind(canvas));
  //   console.log("hover")
  // });
  $("canvas").mouseover(function(){
    console.log("hello");
    caseImage = canvas.overlayImage;
    caseImage.selectable = false;
    canvas.setOverlayImage(null, canvas.renderAll.bind(canvas));
    canvas.add(line_for_print);
    preOverIm = $("#pruebadeimagen")[0];
    overIm = new fabric.Image(preOverIm,{selectable:false,top:42, left:170});
    canvas.add(overIm);
    line_for_print.bringToFront();
    imgInstance.sendToBack();
    imgInstance.setActiveObject();
  });
  $("canvas").mouseout(function(){
    console.log("goodbye");
    canvas.setOverlayImage(caseImage, canvas.renderAll.bind(canvas));
    canvas.remove(line_for_print);
  })
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
  },{ crossOrigin: 'anonymous' } );
};

var createLine = function(){
  line_for_print = new fabric.Rect({ top: 10, left: 100, width: 400, height: 580, fill: 'rgba(255,255,255,0)', hasControls:false,strokeDashArray: [5, 5],
    stroke: 'black',selectable: false})
};
createLine();

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

