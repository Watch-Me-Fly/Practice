<?php

// ---------------------- TODO : block access to page if not logged in
    // Demand a GET parameter for username ( not set or is empty)

    if ( ! isset($_GET['username']) || strlen($_GET['username']) < 1)
    {
        // NOTE putting die at the top of the code stops the process of the rest of it
        die('Log in is required to play'); 
    }

// ---------------------- TODO : Set up values of the game
    // 0 is Rock, 1 is Paper, and 2 is Scissors

    $choices = array('Rock', 'Paper', 'Scissors');
    $human = isset($_POST['human']) ? $_POST['human'] : null;
// ---------------------- TODO : Randomize computer choices
    $computer = 0; // computer is hardcoded to 'Rock'
    $computer = rand(0, 2);  

// ---------------------- TODO : game result
    function check ($computer, $human)
    {
        if ( $human == $computer)
        {
            return "---- Tie 🤝🏼 ----";
        }
        else if ( $human == 'Rock' && $computer = 'Scissors' )
        {
            return "---- You win ! 🥳 ----";
        }
        else if ( $human == 'Paper' && $computer = 'Rock' )
        {
            return "---- You win ! 🥳 ----";
        }
        else if ( $human == 'Scissors' && $computer = 'Paper' )
        {
            return "---- You win ! 🥳 ----";
        }
        else if ( $human == 'Rock' && $computer == 1 )
        {
            return "---- You lose 😢 ----";
        }
        else if ( $human == 'Scissors' && $computer = 'Rock' )
        {
            return "---- You lose 😢 ----";
        }
        else if ( $human == 'Paper' && $computer = 'Scissors' )
        {
            return "---- You lose 😢 ----";
        }
        else if ($human == null)
        {
            return "please choose one";
        }
        return false;
    }
    $result = check($computer, $human);

// ---------------------- TODO : logout
    if ( isset($_POST['logout']) )
    {
        header('location: index.php?user_logged_out');
        return;
    }
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Document</title>
        <?php require_once('bootstrap.php')?>
        <link rel="stylesheet" href="starter-template.css">
    </head>
    <body>
        <div class="container">
            <h1>Rock Paper Scissors</h1>
            <form method="post">
                <?php
                    // $_REQUEST = $_GET, $_POST, & $_COOKIE
                    if ( isset($_REQUEST['username'] ) )
                    {
                        echo "<div id=\"wlcm\">Welcome : " 
                        . htmlentities($_REQUEST['username']) 
                        . "</div><br />";
                    }
                ?>
                <select name="human" class="form-select">
                    <option value="">Select</option>
                    <option value="0">Rock</option>
                    <option value="1">Paper</option>
                    <option value="2">Scissors</option>
                    <option value="test">Test</option>
                </select>
                <div class="form-group" id="btnCenter">
                    <input type="submit" value="Play" name="play"
                            class="btn btn-primary">
                    <button class="btn btn-primary" name="logout">
                        log out
                    </button>
                </div>
            </form>
            <div id="result">
                <?php
                    if ( $human == null )
                    {
                        print "Please select a strategy and press Play.\n";
                    }
                    else if ( $human == 'test' )
                    {
                        // 3 = 3 options values (computer entries)
                        for ( $a = 0; $a < 3; $a++ )
                        {
                            // 3 = 3 options values (human entries)
                            for ( $b = 0; $b < 3; $b++ )
                            {
                                $compare = check($a, $b);
                                print "Human = $choices[$b], 
                                    Computer = $choices[$a].
                                    Results = $compare<br />
                                ";
                            }
                        }
                    }
                    else // if chosen option and is not empty test
                    { 
                        print "You played : $choices[$human], 
                                Computer played = $choices[$computer].
                                <br/>
                                result = $result <br />";
                    }
                ?>
            </div>
        </div>
    </body>
</html>