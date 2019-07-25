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
        'compileDir' => '../var/compile'
    ]);

    // Add Slim specific plugins
    $smartyPlugins = new \Slim\Views\SmartyPlugins($c['router'], $c['request']->getUri());
    $view->registerPlugin('function', 'path_for', [$smartyPlugins, 'pathFor']);
    $view->registerPlugin('function', 'base_url', [$smartyPlugins, 'baseUrl']);

    $view->displayErrorDetails = true;

    return $view;
};




//Startin Slim

$app = new \Slim\App($container);

$app->get('/', function ($request, $response, $args) {
    return $this->view->render($response, 'index.html', [
        //'name' => $args['name']
    ]);
});

$app->post('/login', function ($request, $response, $args) {
    $response->getBody()->write("Hello");
    return $response;
});



// foreach (glob("./api/*.php") as $filename) {
//     require $filename;
// }

$app->run();
