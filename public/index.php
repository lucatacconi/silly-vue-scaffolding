<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../vendor/autoload.php';

$dotenv = new Dotenv\Dotenv("../");
$dotenv->load();

date_default_timezone_set(getenv("TIMEZONE"));

$twig_config = [];
$twig_config['cache'] = false;

$loader = new \Twig\Loader\FilesystemLoader('../assets/templates');
$twig = new \Twig\Environment($loader, $twig_config);

echo $twig->render('index.html', []);
