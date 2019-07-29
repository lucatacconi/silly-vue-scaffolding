<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

$app->group('/session', function () use ($app) {

    $app->get('/check', function ($request, $response, $args) {
        $response->getBody()->write("CONN OK");
        return $response;
    });

});
