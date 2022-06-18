<?php

    // ---------------------- TODO : error message for non-valid inputs
        /*======= password =======*/ // ----------- Pw is php123
            $salt= 'XyZzy12*_';
            $storedHashedPassword= '1a52e17fa899cf40fb04cfc42e6352f1'; 

        /*======= other variables =======*/
            $errorMsg = false; // if wrong password entered

    // ---------------------- TODO : check if fields have input data
        if ( isset($_POST['username']) && isset($_POST['password']) )
        {
            // the following is equivalent to (if ( empty( $_POST['username'] ) )
            if ( strlen($_POST['username']) < 1 || strlen($_POST['password']) < 1 )
            {
                $errorMsg = "you have not entered a username, a password,
                            or both";
            }
            else // if data were entered
            {
    // ---------------------- TODO : check password validity
                $hashToCheck = hash('md5', $salt.$_POST['password']);

                if ( $hashToCheck == $storedHashedPassword ) 
                {
                    header( 'Location:game.php?username='
                            .urlencode($_POST['username']) );
                    return;
                }
                else
                {
                    $errorMsg = 'Password is incorrect';
                }
            }
        }

    // ---------------------- TODO : check cancel button click
        if ( isset($_POST['cancel']) )
        {
            header('Location:index.php?cancelled_login');
            return;
        }

?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Document</title>
        <link rel="stylesheet" href="starter-template.css">
        <?php require_once('bootstrap.php')?>
    </head>
    <body>
        <div class="container">
            <form method="post">
                <h1>Rock Paper Scissors - Log in</h1>
                <div class="form-group">
                    <label for="username" class="form-label">Username</label>
                    <input type="text"  class="form-control"
                            placeholder="Username" name="username">
                </div>
                <div class="form-group">
                    <label for="password" class="form-label">Password</label>
                    <input type="text" class="form-control" 
                            placeholder="Password" name="password">
                </div>
                <div class="form-group">
                    <input type="submit" value="Login"
                           name="submit" class="btn btn-primary">
                    <button class="btn btn-primary" name="cancel">
                        Cancel
                    </button>
                </div>
                <div class="error-message">
                    <?php
                        if ( $errorMsg !== false )
                        {
                            echo htmlentities($errorMsg) ;
                        }
                    ?>
                </div>
            </form>

        </div>
    </body>
</html>