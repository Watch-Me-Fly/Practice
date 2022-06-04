<!-- NOTE : DIFFERENCE between both files :-------------------------
        * value is added to input field
        * $_GET['guess'] is registered in a variable $_POST['guess']
        * $message is added as echo variable
-------------------------------------------------------------------->

<!-- TODO : --------------------------------------------------------
    //* above HTML line : 
        --- talking to databases
        --- doing data processing
        --- handling POST data
    //* below HTML line :
        --- generate output
-------------------------------------------------------------------->

<?php
    $oldGuess = '';
    $message = false;

    if ( isset($_POST['guess']) )
    {
        // trick for integers / numeric parameters :
            //! I don't see what it does
        $oldGuess = $_POST['guess'] + 0;

        if ( $oldGuess == 42 )
        {
            $message = "Congratulations ! IT IS 42 !!";
        }
        else if ( $_POST['guess'] < 42 )
        {
            $message = "your guess is too low";
        }
        else
        {
            $message = "your guess is too high";
        } 
    }

?>


<html>
    <head>
        <title>Guessing game</title>
        <style>
            p {
                color: red;
            }
            .form-group {
                margin: 10px;
            }
        </style>
    </head>
    <body>
        <h1>Guessing game</h1>

        <form method="POST">
            <div class="form-group">
                <label for="guess">Guess a number</label>
                <input type="text" name="guess" id="guess" 
                    value="<?= htmlentities($oldGuess); ?>">
            </div>
            <div class="form-group">
                <input type="submit" value="Submit">
            </div>
        </form>
        <p>     <?= $message ?>     </p>
        <!-- 
            another solution for inside <p>
            <?php
                if ( $message !== false ) 
                    { echo "<p>$message</p><br/>"; }
            ?> 
        -->
    </body>
</html>