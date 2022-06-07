<?php

namespace lib\models;

use lib\db\Database as Database;
use lib\utils\Crypto as Crypto;
use PDOException;
use PDO;

class Users {

    private object $db;
    
    public function __construct()
    {
        $this->db = new Database();
    }
    //retourne tout les utilisateurs
    public function getAll(): array
    {
        $query = $this->db->connect()->query('SELECT * FROM users');
        return $query->fetchAll();
    }
    //creer un nouveaux utilisateur dans la base de données
    public function createUser(string $name, string $email, string $password): void
    {
        $hashpass = Crypto::hash($password);
        try {
            $query = $this->db->connect()->prepare('INSERT INTO users (id, name, email, password) VALUES (NULL, :name, :email, :password)');
        $query->execute([
            'email' => $email,
            'password' => $hashpass,
            'name' => $name
        ]);

        } catch(PDOException $e) {
            echo 'error when Model\Users->createUser';
            echo $e->getMessage();
            exit();
        }
    }
    //verifie si utilisateur existe dans la base de donées
    public function isExist(string $email, string $password): bool
    {
        $query = $this->db->connect()->prepare('SELECT * FROM users WHERE email = :email AND password = :password');
        $query->execute([
            'email' => $email,
            'password' => $password
        ]);
        $query->setFetchMode(PDO::FETCH_ASSOC);
        $result = $query->fetchAll();
        if (count($result) > 0) {
            return true;
        }else {
            return false;
        }
    }
}