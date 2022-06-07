<?php

namespace lib\utils;

class Crypto {
    public static function hash(string $string): string {
        $hash = openssl_digest($string, 'sha256');
        return $hash;
    }
}