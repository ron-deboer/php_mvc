<?php

namespace App\Controllers;

use \Core\View;

use \App\Services\UserService;

/**
 * User controller
 *
 * PHP version 7.0
 */
class User extends \Core\Controller
{

    /**
     * Show the index page
     *
     * @return void
     */
    public function indexAction()
    {
        View::renderTemplate('User/index.html', ['users' => 'Ron deBoer']);
    }

    /**
     * Show the userlist page
     *
     * @return void
     */
    public function userlistAction()
    {
        $users = json_decode(UserService::fetchAllUsers());
        View::renderTemplate('User/userlist.html', ['users' => $users]);
    }

    /**
     * Show the register page
     *
     * @return void
     */
    public function registerAction()
    {
        // $form = UserService::buildRegisterForm();
        View::renderTemplate('User/register.html', []);
    }
}
