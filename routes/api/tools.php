<?php

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Routing\RouteCollectorProxy;

use Ramsey\Uuid\Uuid;

foreach (glob(__DIR__ . '/../classes/*.php') as $filename){
    require_once $filename;
}

$app->group('/tools', function (RouteCollectorProxy $group) {



});
