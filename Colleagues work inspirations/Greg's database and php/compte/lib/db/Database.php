<?php

namespace lib\db;

use \PDO;
use \PDOException;

class Database {
    private string $host = '127.0.0.1';
    private string $user = 'root';
    private string $pass = '';
    private string $db = 'db_dwwm_orleans';

    public function connect(): PDO {
        try {
            return new PDO('mysql:host=' . $this->host . ';dbname=' . $this->db, $this->user, $this->pass);
        } catch (PDOException $e) {
            exit('Erreur de connexion');
        }
    }
}