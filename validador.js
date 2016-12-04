$(document).ready(function() {
    var enableDisbaleSubmit = function(titulo, unidades) {
        if((titulo.toLowerCase() == "matrix" && (1 <= unidades && unidades <= 2)) || (titulo.toLowerCase() == "psicosis" && (1 <= unidades && unidades <= 3))) {
            $('#arrendar').prop("disabled", false);
        } else {
            $('#arrendar').prop("disabled", true);
        }
    };
    
    var showHideMovie = function(titulo) {
        var url = "";
        var infoPelicula = $('#infoPelicula');
        
        if(titulo == "matrix") {
            url = "https://api.themoviedb.org/3/movie/603?api_key=73b997888008f97f542667c617a28db7&language=es";
        } else if(titulo == "psicosis") {
            url = "https://api.themoviedb.org/3/movie/539?api_key=73b997888008f97f542667c617a28db7&language=es";
        } else {
            infoPelicula.addClass("hidden");
            infoPelicula.text("");
            return;
        }
        
        var settings = {
          "async": true,
          "crossDomain": true,
          "url": url,
          "method": "GET",
          "headers": {},
          "data": "{}"
        }

        $.ajax(settings).done(function (response) {
            console.log(response);
            var imagen = '<img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2'+response.backdrop_path+'" class="img-thumbnail" alt="Cinque Terre">';
            var titulo = '<h3>'+response.original_title+'</h3>';
            var descripcion = '<h4>Descripción</h4><p>'+response.overview+'</p>';
            var genero = '<h4>Genero</h4><ul>';
            $.each(response.genres, function( index, value ) {
                genero += '<li>' + value.name + '</li>';
            });
            genero = genero + '</ul>';
            var productoras = '<h4>Compañias productoras:</h4><ul>';
            $.each(response.production_companies, function( index, value ) {
                productoras += '<li>' + value.name + '</li>';
            });
            productoras = productoras + '</ul>';
            var lanzamiento = '<h4>Lanzamiento</h4><ul><li>'+response.release_date+'</li></ul>';
              
            infoPelicula.addClass("hidden");
            infoPelicula.text("");
            infoPelicula.append('<div class="col-md-4">'+imagen+'</div>');
            infoPelicula.append('<div class="col-md-8">'+titulo+descripcion+genero+productoras+lanzamiento+'</div>');
            infoPelicula.removeClass("hidden");
        });
    };

    $('#inputTituloPelicula').on("input", function() {
        var $this = $(this);
        var padre = $this.parent();

        var titulo = $this.val();
        var unidades = parseInt($('#inputUnidadesPelicula').val());

        var helpBlockTitulo = $('#helpBlockTituloPelicula');
        var helpBlockUnidades = $('#helpBlockUnidadesPelicula');

        if($this.val() == "") {
            padre.removeClass("has-success");
            padre.removeClass("has-error");
            helpBlockTitulo.text("");
            helpBlockTitulo.addClass("hidden");
            helpBlockUnidades.text("Para poder ingresar las unidades debe ingresar una pelicula antes.");
            helpBlockUnidades.removeClass("hidden");
            $('#inputUnidadesPelicula').prop("disabled", true);
        } else if(!(titulo.toLowerCase() == "matrix" || titulo.toLowerCase() == "psicosis")) {
            padre.removeClass("has-success");
            padre.addClass("has-error");
            helpBlockTitulo.text("Película no disponible, actualmente solo tenemos la película matrix o psicosis.");
            helpBlockTitulo.removeClass("hidden");
            $('#inputUnidadesPelicula').prop("disabled", true);
        } else {
            padre.removeClass("has-error");
            padre.addClass("has-success");
            helpBlockTitulo.text("Película disponible.");
            helpBlockTitulo.removeClass("hidden");
            helpBlockUnidades.text("");
            helpBlockUnidades.addClass("hidden");
            $('#inputUnidadesPelicula').prop("disabled", false);
        }

        showHideMovie(titulo);
        enableDisbaleSubmit(titulo, unidades);
    });

    $('#inputUnidadesPelicula').on("input", function() {
        var $this = $(this);
        var padre = $this.parent();

        var titulo = $('#inputTituloPelicula').val();
        var unidades = parseInt($this.val());
        var helpBlock = $('#helpBlockUnidadesPelicula');

        if($this.val() == "") {
            padre.removeClass("has-success");
            padre.removeClass("has-error");
            helpBlock.text("");
            helpBlock.addClass("hidden");
        } else if(unidades < 1) {
            padre.removeClass("has-success");
            padre.addClass("has-error");
            helpBlock.text("Debe ingresar un número mayor a 0.");
            helpBlock.removeClass("hidden");
        } else if(isNaN(unidades)) {
            padre.removeClass("has-success");
            padre.addClass("has-error");
            helpBlock.text("Debe ingresar números.");
            helpBlock.removeClass("hidden");
        } else if((titulo.toLowerCase() == "matrix") && (unidades > 2)) {
            padre.removeClass("has-success");
            padre.addClass("has-error");
            helpBlock.text("Actualmente contamos solo con 2 unidades, ingrese una cantidad igual a esta o inferior.");
            helpBlock.removeClass("hidden");
        } else if ((titulo.toLowerCase() == "psicosis") && (unidades > 3)) {
            padre.removeClass("has-success");
            padre.addClass("has-error");
            helpBlock.text("Actualmente contamos solo con 3 unidades, ingrese una cantidad igual a esta o inferior.");
            helpBlock.removeClass("hidden");
        } else {
            padre.removeClass("has-error");
            padre.addClass("has-success");
            helpBlock.text("Unidades disponibles.");
            helpBlock.removeClass("hidden");
        }

        enableDisbaleSubmit(titulo, unidades);
    });
});
