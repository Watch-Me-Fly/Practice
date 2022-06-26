<?php
require_once 'pdo.php';

/**============================================
 *          SECTION Avoid SQL injection
 *=============================================**/
    /*============= NOTE doing it by query (select) ============*/    
        //  instead of prepare and execute
        //! this is prone to SQL injection
            // because we did not process users' data, but concatenated directly
            // single quotes allow for SQL injection
        if ( isset($_POST['email']) && isset($_POST['password']) ) {
            $email = $_POST['email'];
            $password = $_POST['password'];
            $sql = "SELECT name FROM users 
                    WHERE email = '$email'
                    AND password = '$password'  ";
            $statement = $pdo->query($sql);
        }

    /*========= NOTE doing it with prepare & execute ============*/
        // use (:) placeholders as they don't allow for SQL injection

        if ( isset($_POST['email']) && isset($_POST['password']) ) {
            $email = $_POST['email'];
            $password = $_POST['password'];
            $sql = "SELECT name FROM users 
                    WHERE email = :email
                    AND password = :password ";
            $statement = $pdo->prepare($sql);
            // by using prepare : it automatically escapes injections
            $statement->execute(array(
                ':email' => $email,
                ':password' => $password
            ));
            $row = $statement->fetch(PDO::FETCH_ASSOC);
        }



?>