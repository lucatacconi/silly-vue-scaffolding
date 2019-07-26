<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../vendor/autoload.php';

$dotenv = new Dotenv\Dotenv("../");
$dotenv->load();

date_default_timezone_set(getenv("TIMEZONE"));


$container = array();

$container['settings'] = ['displayErrorDetails' => getenv("DISPLAY_SOAP_ERR")];

// Registering config parameters
$config_path = "../config/";
foreach (glob($config_path."*.json") as $filename) {
    $config_content = file_get_contents($filename);

    if(!empty($config_content)){
        $container["app_configs"][ str_replace(array($config_path, ".json"), "", $filename) ] = json_decode($config_content, true);
    }
}

// Registering Smarty View helper
$container['view'] = function ($c) {
    $view = new \Slim\Views\Smarty('../assets/templates', [
        'cacheDir' => '../var/cache',
        'compileDir' => '../var/compiles'
    ]);

    // Add Slim specific plugins
    $smartyPlugins = new \Slim\Views\SmartyPlugins($c['router'], $c['request']->getUri());
    $view->registerPlugin('function', 'path_for', [$smartyPlugins, 'pathFor']);
    $view->registerPlugin('function', 'base_url', [$smartyPlugins, 'baseUrl']);

    $view->displayErrorDetails = true;

    return $view;
};




//Starting Slim
$app = new \Slim\App($container);


//Security layer
$app->add(new Tuupola\Middleware\JwtAuthentication([
    "secret" => getenv("JWT_SECRET"),
    "ignore" => ["/", "/auth/login"],

    "error" => function ($response, $arguments) {
        $data["status"] = "Authentication error";
        $data["message"] = $arguments["message"];
        return $response
            ->withHeader("Content-Type", "application/json")
            ->getBody()->write(json_encode($data, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
    }
]));

//Boostrap layer
$app->get('/', function ($request, $response, $args) {
    return $this->view->render($response, 'index.html', [
        //'name' => $args['name']
    ]);
});

foreach (glob("../routes/*.php") as $filename) {
    require $filename;
}

$app->run();
