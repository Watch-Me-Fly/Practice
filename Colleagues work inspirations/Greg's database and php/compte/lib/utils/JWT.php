<?php

namespace lib\utils;

class JWT {

    private static string $secret = 'secret';

    public static function generateJWT(string $email): string {
        $header = base64_encode(json_encode(
            [
                'typ' => 'JWT',
                'alg' => 'HS256'
            ]
        ));
        $payload = base64_encode(json_encode(
            [
                'iss' => 'http://example.com',
                'exp' => time() + 3600,
                'email' => $email
            ]
        ));
        $signature = hash_hmac('sha256', $header . '.' . $payload, self::$secret, false);
        $jwt = $header . '.' . $payload . '.' . $signature;
        return $jwt;
    }
    
    public static function verifyJWT(string $jwt): bool {
        $parts = explode('.', $jwt);
        $signature = $parts[2];
        $signature2 = hash_hmac('sha256', $parts[0] . '.' . $parts[1], self::$secret, false);
        /*
        echo $signature;
        echo '<br>';
        echo $signature2;
        exit('dev test');
        */
        if ($signature === $signature2) {
            return true;
        }
        return false;
    }
}