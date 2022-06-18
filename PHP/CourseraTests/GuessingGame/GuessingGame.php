<?php

/**==================================================================
                SECTION : in-server data validation
                ------------------------------------
    
 *  = (the moment when I'm receiving the data)
 *  making sure all data is present and in the correct format
 *=================================================================**/

 // ways to verify :
        /**
         *  Non-empty field => 
                * either //* strlen($var) > 0;
                * or //* !empty()
         *  data is a number => 
                * //* is_numeric($var);
         *  data is an email address => 
                * either //* strpos($var, '@') > 0;
                    * strpos() checks if there is an @ sign == true, vs False.  
                * or //* filter_var($var, FILTER_VALIDATE_EMAIL) !== false
                    * more complicated, specifically designed to check
         **/

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
            <form method="GET">
                <div class="form-group">
                    <label for="guess">Guess a number</label>
                    <input type="text" name="guess" id="guess">
                </div>
                <div class="form-group">
                    <input type="submit" value="Submit">
                </div>
            </form>
        <p>
            <?php
            /**==============================================
             *                TODO - the logic 
             1.  check if it exists
             2.  is it a space? / no characters entered?
             3.  if yes => error, if not, continue
             4.  is it a number?
             5.  is the number higher, lower, or equal?
             *=============================================**/
                if ( ! isset($_GET['guess']) )
                {
                    // If i don't have a parameter (null or undecalred)
                    echo "missing guess parameter";
                }
                else if ( strlen($_GET['guess']) < 1 )
                {
                    echo "your guess is too short";
                }
                else if ( ! is_numeric($_GET['guess']) )
                {
                    echo "your guess is not a number";
                }
                else if ( $_GET['guess'] < 42 )
                {
                    echo "your guess is too low";
                }
                else if ( $_GET['guess'] > 42 )
                {
                    echo "your guess is too high";
                }
                else
                {
                    echo "Congratulations ! IT IS 42 !!";
                }
            ?>
        </p>
    </body>
</html>