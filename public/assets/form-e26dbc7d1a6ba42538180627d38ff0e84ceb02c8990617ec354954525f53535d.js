var depo, depid, terminos;
var ready_to_rock = function(){
	$terminos = $("#shipping_terms");
	$.ajax({
		url: "https://powerful-hollows-4606.herokuapp.com/departamentos.json",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		type: "GET",
		success: function(data) {
			$("#shipping_department").empty();
			depo = data;
			$(data).each(function (i) {
				$("#shipping_department").append("<option value=\""+data[i].departamento +"\" number=\""+data[i].id+"\" id=\""+i+"\" >"+data[i].departamento+"</option>");
			});
			$("#shipping_department #14").attr("selected","selected");
			$("#shipping_province").empty();
			$(data[14].provincias).each(function(i){
				$("#shipping_province").append("<option value= \""+ data[14].provincias[i].provincia.nombre + "\" number = \"" + data[14].provincias[i].provincia.id + "\" id=\""+i+"\"  >" + data[14].provincias[i].provincia.nombre + "</option>");
			});
			$("#shipping_province #7").attr("selected","selected");
			$("#shipping_district").empty();
			$(data[14].provincias[7].distritos).each(function(i){
				$("#shipping_district").append("<option value= \""+ data[14].provincias[7].distritos[i].nombre + "\" number = \"" + data[14].provincias[7].distritos[i].id + "\" id=\""+i+"\" >" + data[14].provincias[7].distritos[i].nombre + "</option>");		
			});
		},
		error: function() {
			alert("something went wrong ..."); 
		}
	});
	$("#shipping_departament").change(function(){
		depid = $("#shipping_departament").find(':selected').attr('id');
		var provs = depo[depid].provincias;
		var distritos_op1 = provs[0].distritos
		$("#shipping_province").empty();
		$(provs).each(function(i){
			$("#_provincia").append("<option value= \""+ provs[i].provincia.nombre + "\" number = \"" + provs[i].provincia.id + "\" id=\""+ i +"\" >" + provs[i].provincia.nombre + "</option>");
		});
		$("#shipping_district").empty();
		$(distritos_op1).each(function(i){
			$("#shipping_district").append("<option value= \""+ distritos_op1[i].nombre + "\">" + distritos_op1[i].nombre + "</option>");
		});
	});

	$("#shipping_province").change(function(){
		var provid = $("#shipping_province").find(':selected').attr('id');
		var distritos_provincia_selected = depo[depid].provincias[provid].distritos;
		$("#shipping_district").empty();
		$(distritos_provincia_selected).each(function(i){
			$("#shipping_district").append("<option value= \""+ distritos_provincia_selected[i].nombre + "\">" + distritos_provincia_selected[i].nombre +   "</option>");
		});
	});
	$terminos.change(function(){
		
		if ($terminos[0].checked === true ){
			document.getElementById("continuar").disabled = false
		} else {
			document.getElementById("continuar").disabled = true
		}
	});
};

$(document).ready(ready_to_rock);
$(document).on('page:load', ready_to_rock);
