<?php
////////////////////
// REGISTER
////////////////////
include 'autoload.php';
use lib\db\Database as Database;
use lib\models\Users as Users;

$db = new Database();
$pdo = $db->connect();

$users = new Users();

if (
    isset($_POST['nom']) &&
    isset($_POST['email']) &&
    isset($_POST['password']) &&
    $_SERVER['REQUEST_METHOD'] === 'POST'
    ){
    $name = $_POST['nom'];
    $email = $_POST['email'];
    $password = $_POST['password'];
   if (!$users->isExist($email, $password)) {
       $users->createUser($name, $email, $password);
   }
   header('Location: login.php');
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Register</h1>
    <a href="/login.php">Login</a>
    <form action="" method="POST">
        <input name="nom" type="text" value="Name">
        <input name="email" type="email" value="test@test.test">
        <input name="password" type="text" value="123456">
        <button type="submit">register</button>
    </form>
</body>
</html>