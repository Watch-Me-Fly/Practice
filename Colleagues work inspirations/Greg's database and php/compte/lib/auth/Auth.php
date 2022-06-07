<?php

namespace lib\auth;

use lib\utils\JWT as JWT;

class Auth {
    public static function checkAuth():bool {
        $token = $_COOKIE['token'];
        if (empty($token)) {
            return false;
        }
        if (JWT::verifyJWT($token)) {
            return true;
        }else {
            return false;
        }
    }
    public static function logout(): void {
        setcookie('token', '', time() - 3600, "/", "compte.test", false, true);
    }
}