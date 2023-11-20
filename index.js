



const enviar = async ()=>{

    $("#usuario").val("Le has dado click");

    const twitter = new Twitter({
      consumerKey: "tjWd2DiVPGOH83lMQRUZlvn8g",
      consumerSecret: "6QEgAfpxJkpwVN31GUDN9LCe5xGvBEcfPJEjf4jyZRdip4sybz",
      accessToken: "1166520246108348416-dBJgkGF9TyiWmToa2Z0P9xbAEXufht",
      accessTokenSecret: "FkzCVUxewo4o6RsL02FJbAFKCMsEtcKwPyQcMKVKUT2BQ"
    });
  
  
    // Obtener los tweets
  const tweets = await twitter.get("https://api.twitter.com/2/users/AmorDGoma/tweets");
  
  // Mostrar los tweets
  for (const tweet of tweets) {
    console.log(tweet.text);
  }
}

$(document).ready(function () {

    //var conEtiquetas = $("#contenido").html();
    //var texto = $("#contenido").text();
  
 /*    $("#contenido").text("Este es el nuevo contenido");
  
    setTimeout(() => {
      $("#contenido").text("con timeout");
    }, 1000); */
  
   /*  $.ajax({
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
    }); */
  });


  