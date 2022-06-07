<?php
////////////////////
// LOGIN
////////////////////

include 'autoload.php';
use lib\db\Database as Database;
use lib\models\Users as Users;
use lib\utils\Crypto as Crypto;
use lib\utils\JWT as JWT;

$db = new Database();
$pdo = $db->connect();

$users = new Users();

if (isset($_POST['email']) && isset($_POST['password']) && $_SERVER['REQUEST_METHOD'] === 'POST')
{
    //echo "POST function played !";
    $email = $_POST['email'];
    $password = Crypto::hash($_POST['password']);

    if ($users->isExist($email, $password)) {
        //echo 'exist user ok';
        $token = JWT::generateJWT($email);
        setcookie('token', $token, time() + (86400 * 30), "/", "compte.test", false, true);
        header('Location: dashboard.php');
        exit();
    }else {
        //echo 'user not exist /not found';
        header('Location: register.php');
    }
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
    <h1>Login</h1>
    <a href="/register.php">Register</a>
    <form action="" method="POST">
        <input name="email" type="email" value="test@test.test">
        <input type="password" name="password" value="123456">
        <button type="submit">register</button>
    </form>
</body>
</html>