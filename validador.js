$(document).ready(function() {
    $('#titulo').focusout(function() {
        var titulo = $('#titulo').val();
        var unidades = parseInt($('#unidades').val());
        
        if(!(titulo.toLowerCase() == "matrix" || titulo.toLowerCase() == "psicosis")) {
            alert("Solo puede ingresar la pelicula matrix o psicosis.");
            $('#arrendar').prop("disabled", true);
        }

        if(titulo.toLowerCase() == "matrix" && (unidades <= 2)) {
            $('#arrendar').prop("disabled", false);
        }
        if(titulo.toLowerCase() == "psicosis" && (unidades <= 3)) {
            $('#arrendar').prop("disabled", false);
        }
    });

    $('#unidades').focusout(function() {
       var titulo = $('#titulo').val();
       var unidades = parseInt($('#unidades').val());
       
        if((titulo.toLowerCase() == "matrix") && (unidades > 2)) {
            alert("Cantidad de matrix 2");
            $('#arrendar').prop("disabled", true);
        }
        if((titulo.toLowerCase() == "psicosis") && (unidades > 3)) {
            alert("Cantidad de psicosis 3");
            $('#arrendar').prop("disabled", true);
        }
        
        if(titulo.toLowerCase() == "matrix" && (unidades <= 2)) {
            $('#arrendar').prop("disabled", false);
        }
        if(titulo.toLowerCase() == "psicosis" && (unidades <= 3)) {
            $('#arrendar').prop("disabled", false);
        }
    });
    
     $("textarea").on( "click", function(){
         var titulo = $('#titulo').val();
         if(titulo.toLowerCase() == "matrix"){
             var matrixdata = "matrixdata.json";
             $.getJSON( matrixdata, function( data ) {
                 $.each(data, function(key, val){
                     recursiveFunction(key, val)
                 });
             });
         }
         if(titulo.toLowerCase() == "psicosis"){
             alert("No hay información de 'Psicosis'.");
         }
     });

    function recursiveFunction(key, val) {
        var items = [];
        if (val instanceof Object) {
            $.each(val, function(key, val) {
                recursiveFunction(key, val)
            });
        }else{
            items.push( "<li id='" + key + "'><label>" + key + " : </label> " + val +" </li>" );
        }

        $( "<ul/>", {
            "class": "my-new-list",
            html: items.join( "" )
        }).appendTo( ".inner" );
    }
});