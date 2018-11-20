<?php

include_once './vendor/autoload.php';

ini_set('default_socket_timeout', -1);

$pRedis = new Predis\Client('tcp://localhost:6379');

$pRedis->connect();

$pubsub = $pRedis->pubSubLoop();

$pubsub->subscribe("CANAL1");

foreach ($pubsub as $message)
{
    
    switch ($message->kind) {
        case 'subscribe':
            echo "Subscribed to {$message->channel}\n";
            break;

        case 'message':
            // do something
            break;
    }
}
