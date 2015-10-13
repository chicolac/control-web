var estado="";

$(function(){
	$("#avanza").click(function(){
		$('#texto').show().text("Avanza");
		$("#texto").removeClass('btn-info btn-primary btn-success btn-inverse').addClass( "btn-danger" );
		$(this).removeClass('boton').addClass( "boton_activo" );
		$("#derecha").removeClass('boton_activo').addClass( "boton" );
		$("#izquierda").removeClass('boton_activo').addClass( "boton" );
		$("#retrocede").removeClass('boton_activo').addClass( "boton" );
		$("#para").removeClass('boton_activo').addClass( "boton" );
		//alert("adelante");
		window.estado=1;
	});
	$("#izquierda").click(function(){
		$('#texto').show().text("Giro Izquierda");
		$("#texto").removeClass('btn-danger btn-primary btn-success btn-inverse').addClass( "btn-info" );
		$(this).removeClass('boton').addClass( "boton_activo" );
		$("#avanza").removeClass('boton_activo').addClass( "boton" );
		$("#derecha").removeClass('boton_activo').addClass( "boton" );
		$("#retrocede").removeClass('boton_activo').addClass( "boton" );
		$("#para").removeClass('boton_activo').addClass( "boton" );
		window.estado=2;
	});
	$("#derecha").click(function(){
		$('#texto').show().text("Giro Derecha");
		$("#texto").removeClass('btn-primary btn-info btn-danger btn-inverse').addClass( "btn-success" );
		$(this).removeClass('boton').addClass( "boton_activo" );
		$("#avanza").removeClass('boton_activo').addClass( "boton" );
		$("#izquierda").removeClass('boton_activo').addClass( "boton" );
		$("#retrocede").removeClass('boton_activo').addClass( "boton" );
		$("#para").removeClass('boton_activo').addClass( "boton" );
		window.estado=3;
	});
	$("#retrocede").click(function(){
		$('#texto').show().text("Retrocede");
		$("#texto").removeClass('btn-success btn-info btn-danger btn-inverse').addClass( "btn-primary" );
		$(this).removeClass('boton').addClass( "boton_activo" );
		$("#avanza").removeClass('boton_activo').addClass( "boton" );
		$("#izquierda").removeClass('boton_activo').addClass( "boton" );
		$("#derecha").removeClass('boton_activo').addClass( "boton" );
		$("#para").removeClass('boton_activo').addClass( "boton" );
		window.estado=4;
	});
	// parar parar el drone
	$("#d").click(function(){
		$('#texto').show().text("Detenido");
		$("#texto").removeClass(' btn-primary btn-success btn-info btn-danger').addClass( "btn-inverse" );
		$(this).removeClass('boton').addClass( "boton_activo" );
		$("#avanza").removeClass('boton_activo').addClass( "boton" );
		$("#izquierda").removeClass('boton_activo').addClass( "boton" );
		$("#derecha").removeClass('boton_activo').addClass( "boton" );
		$("#retrocede").removeClass('boton_activo').addClass( "boton" );
		window.estado=5;
	 });
	// para encender el drone
	$("#d1").click(function(){
		$('#texto').show().text("Encendido");
		$("#texto").removeClass(' btn-primary btn-success btn-info btn-danger').addClass( "btn-inverse" );
		$(this).removeClass('boton').addClass( "boton_activo" );
		$("#avanza").removeClass('boton_activo').addClass( "boton" );
		$("#izquierda").removeClass('boton_activo').addClass( "boton" );
		$("#derecha").removeClass('boton_activo').addClass( "boton" );
		$("#retrocede").removeClass('boton_activo').addClass( "boton" );
		window.estado=5;
	 });
	$(this).click(function(){
	   console.log("estado: "+estado);
		$.ajax({
			data:{valor_estado: estado},
			url:'procesa.php',
			type:'POST',
			success: function(response){
				alert("Salida: "+response );
			}
		});
	  });

});
