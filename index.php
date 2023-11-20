<?php

// Importa la librería Twitter API PHP
require_once('twitter-api-php/autoload.php');

// Define las credenciales de la aplicación de Twitter
$consumer_key = 'CONSUMER_KEY';
$consumer_secret = 'CONSUMER_SECRET';
$access_token = 'ACCESS_TOKEN';
$access_token_secret = 'ACCESS_TOKEN_SECRET';

// Crea una nueva instancia de la clase Twitter
$twitter = new TwitterAPIExchange(array(
    'consumer_key' => $consumer_key,
    'consumer_secret' => $consumer_secret,
    'access_token' => $access_token,
    'access_token_secret' => $access_token_secret
));

// Obtén los tweets de un usuario específico
$tweets = $twitter->get('statuses/user_timeline', array(
    'screen_name' => 'bard'
));

// Imprime los tweets
foreach ($tweets as $tweet) {
    echo $tweet->text . '<br>';
}

?>
