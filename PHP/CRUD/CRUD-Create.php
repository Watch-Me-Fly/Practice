<?php
// include our connection
require_once 'pdo.php';

// only if fields are entered
if ( isset($_POST['name']) && isset($_POST['email']) && isset($_POST['password']) ) 
{
    // create data
    $sql = "INSERT INTO users
            (name, email, password) 
            VALUES
            (:name, :email, :password)";
            // (:) = "placeholder" : (can be named any name as if they are variables)

    // see what was inserted into the database
        echo "<pre><br/> $sql </pre><br/>";

    // prepare to see if i got the syntax right, (preparing), parsing it, making sense of it
        $statement = $pdo->prepare($sql);
    
    // then execute creation of the statement
        $statement->execute(array(
            ':name' => $_POST['name'],
            ':email' => $_POST['email'],
            ':password' => $_POST['password']
        ));
}
    
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Create into DB</title>
    </head>
    <body>
        <h1>Add a new user</h1>
        <form method="post">
            <label for="name">Name</label>
            <input type="text" name="name" placeholder="Name" required />
            <br/>
            <label for="email">Email</label>
            <input type="email" name="email" placeholder="email" required />
            <br/>
            <label for="password">Password</label>
            <input type="password" name="password" placeholder="Password" required />
            <br/>
            <input type="submit" value="submit">
        </form>
    </body>
</html>