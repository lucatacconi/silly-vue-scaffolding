<?php

$app->get('/test1', function ($request, $response, $args) {
    $response->getBody()->write("Hello1");
    return $response;
});

$app->get('/test2', function ($request, $response, $args) {
    $response->getBody()->write("Hello2");
    return $response;
});
