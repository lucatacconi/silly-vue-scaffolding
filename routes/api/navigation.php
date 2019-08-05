<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

use Ramsey\Uuid\Uuid;
use Firebase\JWT\JWT;
use Tuupola\Base62;

$app->group('/navigation', function () use ($app) {

    $app->get('/', function ($request, $response, $args) {

        $jwt_payload = $request->getAttribute("token");

        if(empty($jwt_payload)) throw new Exception("ERROR - Security session not found");

        $navigation_map = [];
        if(!empty($jwt_payload["userType"])){

        }




        return $response->withStatus(200)
        ->withHeader("Content-Type", "application/json")
        ->write(json_encode($data, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
    });

});
