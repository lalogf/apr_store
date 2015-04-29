var canvas; 
var imgElement; 
var imgInstance;
var butn;
var cod;




var ready = function(){
  createCanvas();
  $('#myselect').change(function(){
    if($('#myselect').val() == "iPhone 5"){
      canvas.setOverlayImage('/assets/i5.png', canvas.renderAll.bind(canvas))
    } else if ($('#myselect').val() == "Galaxy S5") {
      canvas.setOverlayImage('/assets/s52.png', canvas.renderAll.bind(canvas))
    } else if ($('#myselect').val() == "Moto G"){
      canvas.setOverlayImage('/assets/motog.png', canvas.renderAll.bind(canvas))
    } else if ($('#myselect').val()==  "iPhone 4"){
      canvas.setOverlayImage('/assets/i4.png', canvas.renderAll.bind(canvas))
    } else {
      canvas.setOverlayImage('/assets/i6.png', canvas.renderAll.bind(canvas))
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
  canvas.setOverlayImage('/assets/i6.png', canvas.renderAll.bind(canvas));
}; 

var createImage = function(cod){
  imgElement = $('.designtocase')[cod];
  imgInstance = new fabric.Image(imgElement, {
    height: 600,
    width: 400,
    left: 0,
    top: 0,
  });
};

// var borders = function (i){
//         canvas.item(i).set({
//         borderColor: 'black',
//         cornerColor: 'black',
//         cornerSize: 20,
//         transparentCorners: false
//       });
// }

// $(document).ready(function(){
//   createCanvas();
//   $('#my-select').change(function(){
//     if($('#my-select').val() == "iPhone 5"){
//       canvas.setOverlayImage('https://s3.amazonaws.com/spacioc/i5.png', canvas.renderAll.bind(canvas))
//     } else if ($('#my-select').val() == "Galaxy S5") {
//       canvas.setOverlayImage('https://s3.amazonaws.com/spacioc/s52.png', canvas.renderAll.bind(canvas))
//     } else if ($('#my-select').val() == "Moto G"){
//       canvas.setOverlayImage('https://s3.amazonaws.com/spacioc/motog.png', canvas.renderAll.bind(canvas))
//     } else {
//       canvas.setOverlayImage('https://s3.amazonaws.com/spacioc/i6.png', canvas.renderAll.bind(canvas))
//     }
//   });
  
//   $(".designtocase").click(function(){
//     cod = (parseInt(this.id));
//     createImage(cod);
//     event.preventDefault();
//     canvas.add(imgInstance);
//     canvas.controlsAboveOverlay = true;
//     canvas.item(0).set({
//       borderColor: 'black',
//       cornerColor: 'black',
//       cornerSize: 20,
//       transparentCorners: false
//     });
//     canvas.setActiveObject(canvas.item(0));
//     canvas.deactivateAll().renderAll();
//     $('#newcaseimage').val(canvas.toDataURL('image/png'));
//   });
// });





// var createCanvas = function (){
//   canvas = new fabric.Canvas('c');
//   canvas.setHeight(600);

//   canvas.setWidth(400);
//   canvas.setOverlayImage('https://s3.amazonaws.com/spacioc/i6.png', canvas.renderAll.bind(canvas));

// }; 

$(document).ready(ready);
$(document).on('page:load', ready);

