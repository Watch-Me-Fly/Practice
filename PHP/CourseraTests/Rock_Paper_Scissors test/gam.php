<?php

    // TODO : check the session if the user has logged in.
    // if there is no name set, or not entered
    if (! isset($_GET['name']) || strlen($_GET['name']) < 1 )
    {
        die('name is required');
    }

    // TODO : if user logs out => index.php
    if ( isset( $_POST['logout']) ) {
        header('Location: index.php');
        return;
    }

    // TODO : setting up game values
    // 0 is rock, 1 is paper, 2 is sissors
    $names = array('Rock', 'Paper', 'Sissors');
    // human's turn
    $human = isset( $_POST['human'] ) ? $_POST['human']+0 : -1;
    // computer's turn
    $computer = 0;
    // TODO : make the computer's turn random
        //* $computer = rand(0,2);

    /*
        * This function takes as input  : $computer and $human plays
        * Returns : "tie", "you lose", "you win"
    */
    function check($computer, $human) {
        
    }

?>

<html>
    <head>
        <title>Saja ALHAYAN, Paper, Scissors Game</title>
        <?php require_once "bootstrap.php"; ?>
    </head>
    <body>
        <div class="container">
            <h1>Rock Paper Scissors</h1>
            <!-- TODO : welcome the user -->
            <?php
                /**==============================================
                 *  NOTE : $_REQUEST :
                 *   is an associative array that by default contains the contents of $_GET, $_POST and $_COOKIE.
                 *=============================================**/
                if ( isset($_REQUEST['name']) )
                {
                    echo ("<p>Welcome : " 
                    . htmlentities($_REQUEST['name']) 
                    . "</p>");
                }
            ?>
            <form action="POST">
                <select name="human">
                    <option value="-1">Select</option>
                    <option value="0">Rock</option>
                    <option value="1">Paper</option>
                    <option value="2">Scissors</option>
                    <option value="3">Test</option>
                </select>
                <input type="submit" value="Play">
                <input type="submit" value="Logout">
            </form>
            <pre>
                <?php

                ?>
            </pre>
        </div>
    </body>
</html>