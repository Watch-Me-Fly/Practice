<?php

    // if cancelled, return to main
    if ( isset($_POST['cancel']) ) 
    {
        header('Location:index.php');
        return;
    }

    /*
        NOTE :
        The stored_hash is the MD5 of the salt concatenated with the plaintext of php123 - which is the password. 
        This is computed using the following PHP:
            //* $md5 = hash('md5', 'XyZzy12*_php123');
    */

    // variables
    $salt = 'XyZzy12*_';
    $stored_hash = 'a8609e8d62c043243c4e201cbb342862';  // Pw is meow123
    $failure = false; // If we have no POST data

    // Check to see if we have some POST data, if we do process it
    if ( isset($_POST['who']) && isset($_POST['pass']) )
    {
        // if they were not entered
        if ( strlen($_POST['who']) < 1 || strlen($_POST['pass']) < 1)
        {
            $failure = "username and/or password not entered";
        }
        else // if entered
        {
            // check password
            $check = hash('md5', $salt.$_POST['pass']);
            if ( $check == $stored_hash )
            { 
                // if successful => log in
                header('location:game.php?name='.urlencode($_POST['who']));
                return;
            }
            else
            {
                $failure = "incorrect password";
            }
        }
    }

?>


<html>
    <head>
        <?php require_once "bootstrap.php"; ?>
        <style>
            form {
                width: 60%;
                margin: auto;
                padding: 10px;
            }
            .form-group {
                margin: 10px;
            }
            #error {
                background-color: red;
                color: white;
                padding: 5px;
            }
        </style>
        <title>Saja RPS</title>
    </head>
    <body>

        <form method="post">
            <div class="form-group">
                <label for="">Username</label>
                <input type="text" name="who" id="username" class="form-control">
            </div>
            <div class="form-group">
                <label for="">Password</label>
                <input type="text" name="pass" id="password" class="form-control">
            </div>
            <div class="form-group">
                <input type="submit" name="submit" value="Login" class="btn btn-primary">
                <input type="submit" name="cancel" value="Cancel" class="btn btn-primary">
            </div>
            <?php
            //! Note triple not equals 
            //! think how badly double not equals would work here...
            if ($failure !== false) 
            {
                // Look closely at the use of single and double quotes
                echo('<p id="error">'.htmlentities($failure).'</p><br/>');
            }
            ?>
        </form>
    </body>
</html>