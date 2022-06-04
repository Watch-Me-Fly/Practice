<?php

    /**==============================================================
                      SECTION Persisting form Data
                      ----------------------------
     
     *  when error occurs upon submission of form 
            ==> we expect data to persist
     *  NOTE: for it to persist: 
        --- we have to copy the value from one request to another request
     *=============================================================**/

    /**=============================================================
    * *                     INFO
 
     //*  By Default : 
            this script will run as a GET request
            when we hit submit => it will become POST request
     *  TODO : we have to use isset()
        --- to determine if this is a POST request with 'guess' as value?
            ==> we will show the form only
        --- or is this a GET request and we have to show the form?
            ==> show the form with the previous guess request
    *============================================================**/
    
    /*
        ternary operator (? :) with isset() :
            if there is a guess value in post ?
                => stick the guess value in $oldGuess
            : otherwise : put a blank as value to $oldGuess
    */
    $oldGuess = 
        isset($_POST['guess']) ? $_POST['guess'] : ' ' ;

?>
<head>
    <title>form data</title>
    <style>
        form {
            border: 1px solid black;
            margin: 10px;
        }
        .form-group {
            margin: 10px; padding: 10px;
        }
    </style>
</head>
<H3>Guessing game</H3>
<form method="post">
    <div class="form-group">
        <label for="guess">Input Guess</label>
        <input type="text" name="guess" id="guess" size="40" 
                value="<?= $oldGuess ?>"/>

        <!-- NOTE : value = :
                --- is a way to write back in the form
                --- sticking variables in here, allows to save data
            //* IMPORTANT : <?= $oldGuess ?>
                --- is a shortcut to <?php echo($oldGuess) ?>
         -->

         <!-- REVIEW : //! this is the worst kind of code because of :
                    * HTML entities and HTML injection :
                        --- if user types html tag into form field 
                            => it becomes valid html.
                            //! => user can take over the page :
                                - changing grades for students.
                                - stealing credit card numbers
                    FIXME : //* the way to fix this :
                        TODO : htmlentities() function
                            <?= htmlentities($oldGuess) ?>
                            --- Convert all applicable characters to HTML entities (ex. &lt; for >)
                            --- allows to escape html injection by  manipulators.
          -->
    </div>
    <div class="form-group">
        <input type="submit" value="Submit">
    </div>
</form>