$(document).ready(function () {
    //var conEtiquetas = $("#contenido").html();
    //var texto = $("#contenido").text();
  
    $("#contenido").text("Este es el nuevo contenido");
  
    setTimeout(() => {
      $("#contenido").text("con timeout");
    }, 1000);
  
    $.ajax({
      url: "https://api.twitter.com/2/tweets/search",
      type: "GET",
      async: true,
      data: "query=php",
      success: function (data) {
        let aux = JSON.stringify(data);
        alert(aux);
      },
      error: function (error) {
        let aux = JSON.stringify(error);
        alert(error.statusText);
      }
    });
  });
  