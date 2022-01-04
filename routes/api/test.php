<?php

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Routing\RouteCollectorProxy;

$app->group('/test', function (RouteCollectorProxy $group) {
    $group->get('/conn', function (Request $request, Response $response, array $args) {
        $response->getBody()->write("CONN OK");
        return $response;
    });
});
