<?php
include 'autoload.php';

use lib\auth\Auth as Auth;
use lib\models\Users as Users;

if (!Auth::checkAuth()) {
    header('Location: login.php');
    exit();
}

$usersModel = new Users();
$users = $usersModel->getAll();

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
    <h1>Dashboard</h1>
    <a href="/logout.php">Logout</a>
    <p>token: <?php echo $_COOKIE['token'] ?></p>
    <h2>All users: </h2>
    <table>
        <tbody>
        <?php foreach($users as $user) :?>
            <tr>
                <td><?= $user['name'] ?></td>
            </tr>
        <?php endforeach ?>
        </tbody>
    </table>
</body>
</html>