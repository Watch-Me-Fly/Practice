<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Auth system</h1>
    <a href="/login.php">Login</a>
    <a href="/register.php">Register</a>
    <p>L'accès a la page <mark>/dashboard.php</mark> est conditionné par la présence du cookie "token" et de sa validité.
    Le cookie "token" doit contenir un <a href="">Jeton JWT (JSON Web Token)</a> valide et signer en SHA256.
    Si le cookie n'est pas présent ou n'est pas valide, l'utilisateur est redirigé vers la page <mark>/login.php</mark>.
</p>
    
</body>
</html>