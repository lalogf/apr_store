var ready = function(){
	var s = Snap("#svg");
	var path = s.path("M3.19866071,61.5714286 C2.53571429,61.5714286 1.87276786,61.3571429 1.20982143,60.7142857 C0.325892857,59.8571429 0.104910714,58.5714286 0.546875,57.5 L21.9821429,9.92857143 C22.6450893,8.42857143 24.4129464,7.78571429 25.7388393,8.42857143 C27.2857143,9.07142857 27.9486607,10.7857143 27.2857143,12.0714286 L8.94419643,52.5714286 L52.6986607,31.3571429 C54.0245536,30.7142857 55.7924107,31.1428571 56.4553571,32.6428571 C57.1183036,33.9285714 56.6763393,35.6428571 55.1294643,36.2857143 L4.52455357,61.1428571 C4.08258929,61.3571429 3.640625,61.5714286 3.19866071,61.5714286 L3.19866071,61.5714286 Z");
	var path2 = s.path("M65.515625,61.5714286 C65.0736607,61.5714286 64.6316964,61.5714286 64.1897321,61.3571429 L21.7611607,41.6428571 L21.7611607,41.6428571 C21.7611607,41.6428571 21.7611607,41.6428571 21.5401786,41.6428571 L12.7008929,37.5714286 C11.375,36.9285714 10.7120536,35.2142857 11.375,33.9285714 C12.0379464,32.6428571 13.8058036,32 15.1316964,32.6428571 L21.5401786,35.6428571 L37.0089286,2.21428571 C37.4508929,1.14285714 38.5558036,0.5 39.6607143,0.5 L39.6607143,0.5 C40.765625,0.5 41.8705357,1.14285714 42.3125,2.21428571 L68.1674107,57.9285714 C68.609375,59 68.3883929,60.2857143 67.5044643,61.1428571 C67.0625,61.1428571 66.3995536,61.5714286 65.515625,61.5714286 L65.515625,61.5714286 Z M26.84375,37.7857143 L59.7700893,53 L39.8816964,9.92857143 L26.84375,37.7857143 L26.84375,37.7857143 Z");
	var path3 = s.path("M65.91875,57.0703374 C66.5857143,57.0703374 67.2526786,57.2835319 67.9196429,57.9231156 C68.8089286,58.7758937 69.03125,60.055061 68.5866071,61.1210337 L47.0214286,108.450222 C46.3544643,109.942584 44.5758929,110.582167 43.2419643,109.942584 C41.6857143,109.303 41.01875,107.597444 41.6857143,106.318276 L60.1383929,66.0245081 L16.11875,87.1307676 C14.7848214,87.7703513 13.00625,87.3439622 12.3392857,85.8516004 C11.6723214,84.5724332 12.1169643,82.8668768 13.6732143,82.2272932 L64.8071429,57.709921 C65.0294643,57.2835319 65.4741071,57.0703374 65.91875,57.0703374 L65.91875,57.0703374 Z");
	var path4 = s.path("M3.22410714,57.0703374 C3.66875,57.0703374 4.11339286,57.0703374 4.55803571,57.2835319 L47.24375,76.8974297 L47.24375,76.8974297 L47.4660714,76.8974297 L56.3589286,80.948126 C57.6928571,81.5877096 58.3598214,83.2932659 57.6928571,84.5724332 C57.0258929,85.8516004 55.2473214,86.491184 53.9133929,85.8516004 L47.4660714,82.8668768 L31.9035714,116.125225 C31.4589286,117.191198 30.3473214,117.830782 29.2357143,117.830782 L29.2357143,117.830782 C28.1241071,117.830782 27.0125,117.191198 26.5678571,116.125225 L0.55625,60.6946446 C0.111607143,59.6286719 0.333928571,58.3495046 1.22321429,57.4967265 C1.89017857,57.2835319 2.55714286,57.0703374 3.22410714,57.0703374 L3.22410714,57.0703374 Z M42.3526786,80.7349314 L9.22678571,65.598119 L29.2357143,108.450222 L42.3526786,80.7349314 L42.3526786,80.7349314 Z");
	var rectangulo = s.rect(0,0,320.8,160.4, 2, 2);
	var linea = s.line(158.3,20.2,158.3,140.2);
	var text1 = s.text(200,75,"arte");
	var text2 = s.text(200,110,"aparte")
	var lenB = path.getTotalLength();
	var lenC = path2.getTotalLength();
	var lenD = path3.getTotalLength();
	var lenE = path4.getTotalLength();
	var s2 = Snap("#svgMenu");
	s2.rect(0,8,170,98, 2, 2)
	s2.text(40,60,"MENU").attr({stroke:"#fff","font-family": 'Century Gothic', "font-size":"30px", fill: "#fff" })
	s2.attr({
		stroke: "#000",
	})

// var social_networks = Snap("#facebook");

// social_networks.attr({
// 	"fill": "#fff"
// })


text1.attr({
	"font-family": "KitsuneUdon",
	"font-size":"50px",
	stroke:"#fff"
})

text2.attr({
	"font-family": "KitsuneUdon",
	"font-size":"50px"
})

rectangulo.attr({
	fill:"#fff",
	stroke: "#fff",
	strokeWidth: 4,
	"fill-opacity":0
})

linea.attr({
	stroke: "#fff",
	strokeWidth: 4,
	"fill-opacity":0,
	strokeLinecap:"round",
	fill: "#fff"
})

path.attr({
	stroke: '#fff',
	strokeWidth: 4,
	transform: "translate(45 20)",
	"stroke-dasharray": lenB + " " + lenB,
	"stroke-dashoffset": lenB
}).animate({"stroke-dashoffset": 3, fill: "#fff", stroke:"#fff", strokeWidth: 1}, 4000,mina.easein());

path2.attr({
	stroke: '#fff',
	strokeWidth: 4,
	transform: "translate(45 20)",
    // Draw Path
    "stroke-dasharray": lenC + " " + lenC,
    "stroke-dashoffset": lenC
}).animate({"stroke-dashoffset": 10, fill: "#fff", stroke:"#ffffff", strokeWidth: 1}, 4000,mina.easein());

path3.attr({
	stroke: '#fff',
	strokeWidth: 4,
	transform: "translate(45 20)",
	"stroke-dasharray": lenD + " " + lenD,
	"stroke-dashoffset": lenD
}).animate({"stroke-dashoffset": 10, fill: "#fff", stroke:"#ffffff", strokeWidth: 1}, 4000,mina.easein());

path4.attr({
	stroke: '#fff',
	strokeWidth: 4,
	transform: "translate(45 20)",
	"stroke-dasharray": lenE + " " + lenE,
	"stroke-dashoffset": lenE
}).animate({"stroke-dashoffset": 10, fill: "#fff", stroke:"#ffffff", strokeWidth: 1}, 4000,mina.easein());


// rectangulo.addClass("rectangulo");
text1.animate({stroke:"#fff", fill: "#fff", "font-size":"53"}, 1000, mina.bounce());
text2.animate({stroke:"#fff", fill: "#fff","font-size":"40px"}, 2000, mina.bounce());
linea.animate({stroke:"#fff", x:300, y:700}, 2000);

}
$(document).ready(ready);
$(document).on('page:load', ready);

