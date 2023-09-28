<?php

namespace App\Services;

use App\Services\HttpService;
use \App\Services\HelperService;

define('USER_API_BASE', "http://localhost:3000/api/users");

class UserService extends \Core\Service {

    public static function buildRegisterForm() {
        $json = file_get_contents(__DIR__ . '/Config/registerform.json');
        $json = str_replace("'", '"', $json);
        $data = json_decode($json, false);
        $form = HelperService::buildForm($data);
        return $form;
    }

    public static function fetchAllUsers() {
        $url = USER_API_BASE;
        $resp = HttpService::httpGet($url);
        return $resp;
    }

    public static function fetchUserById($id) {
        $url = USER_API_BASE;
        $resp = HttpService::httpGet($url . "/$id");
        return $resp;
    }

    public static function insertUser($data) {
        $url = USER_API_BASE;
        $resp = HttpService::httpPost($url, $data);
        return $resp;
    }
}
