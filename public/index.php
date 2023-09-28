<?php

/**
 * Front controller
 *
 * PHP version 7.0
 */

/**
 * Composer
 */
require dirname(__DIR__) . '/vendor/autoload.php';


/**
 * Error and Exception handling
 */
error_reporting(E_ALL);
set_error_handler('Core\Error::errorHandler');
set_exception_handler('Core\Error::exceptionHandler');


/**
 * Routing
 */
$router = new Core\Router();

// Add the routes
$router->add('/', ['controller' => 'Home', 'action' => 'index']);
$router->add('/userlist', ['controller' => 'User', 'action' => 'userlist']);
$router->add('/register', ['controller' => 'User', 'action' => 'register']);

$router->dispatch($_SERVER['REQUEST_URI']);
