var depo, depid;
var ready_to_rock = function(){
	console.log("hello");
	$.ajax({
		url: "https://powerful-hollows-4606.herokuapp.com/departamentos.json",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		type: "GET",
		success: function(data) {
			$("#_departamento").empty();
			depo = data;
			$(data).each(function (i) {
				$("#_departamento").append("<option value=\""+data[i].departamento +"\" number=\""+data[i].id+"\" id=\""+i+"\" >"+data[i].departamento+"</option>");
			});
			$("#_departamento #14").attr("selected","selected");
			$("#_provincia").empty();
			$(data[14].provincias).each(function(i){
				$("#_provincia").append("<option value= \""+ data[14].provincias[i].provincia.nombre + "\" number = \"" + data[14].provincias[i].provincia.id + "\" id=\""+i+"\"  >" + data[14].provincias[i].provincia.nombre + "</option>");
			});
			$("#_provincia #7").attr("selected","selected");
			$("#_distrito").empty();
			$(data[14].provincias[7].distritos).each(function(i){
				$("#_distrito").append("<option value= \""+ data[14].provincias[7].distritos[i].nombre + "\" number = \"" + data[14].provincias[7].distritos[i].id + "\" id=\""+i+"\" >" + data[14].provincias[7].distritos[i].nombre + "</option>");		
			});
		},
		error: function() {
			alert("something went wrong ..."); 
		}
	});
	$("#_departamento").change(function(){
		depid = $("#_departamento").find(':selected').attr('id');
		var provs = depo[depid].provincias;
		var distritos_op1 = provs[0].distritos
		$("#_provincia").empty();
		$(provs).each(function(i){
			$("#_provincia").append("<option value= \""+ provs[i].provincia.nombre + "\" number = \"" + provs[i].provincia.id + "\" id=\""+ i +"\" >" + provs[i].provincia.nombre + "</option>");
		});
		$("#_distrito").empty();
		$(distritos_op1).each(function(i){
			$("#_distrito").append("<option value= \""+ distritos_op1[i].nombre + "\">" + distritos_op1[i].nombre + "</option>");
		});
	});

	$("#_provincia").change(function(){
		var provid = $("#_provincia").find(':selected').attr('id');
		var distritos_provincia_selected = depo[depid].provincias[provid].distritos;
		$("#_distrito").empty();
		$(distritos_provincia_selected).each(function(i){
			$("#_distrito").append("<option value= \""+ distritos_provincia_selected[i].nombre + "\">" + distritos_provincia_selected[i].nombre +   "</option>");
		});
	});
};

$(document).ready(ready_to_rock);
$(document).on('page:load', ready_to_rock);