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
    
/*
    $("#instrucciones").focusout(function(){
        var dmJSON = "https://api.themoviedb.org/3/search/movie?api_key=73b997888008f97f542667c617a28db7&query=Matrix
";
        $.getJSON( dmJSON, function(data) {
            $.each(data.entries, function(i, f) {
                var tblRow = "<tr>" + "<td>" + f.id + "</td>" + "<td>" + f.user.username + "</td>" + "<td>" + f.message + "</td>" + "<td> " + f.location + "</td>" +  "<td>" + f.at + "</td>" + "</tr>"
            $(tblRow).appendTo("#entrydata tbody");
             });

        });
    });*/
    
    
});