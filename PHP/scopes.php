<?php

     /** -------------SECTION global variables----------------
      
      * using the same variable in global scope inside a function :
            --- creates an alias for the variable outside
            --- alter its value
      * result of print is => $value = 100;

      * !! avoid using too much global variables
            //* instead =>
                NOTE : ideal solutions -- w/o S/Ex : 
                * pass variable in as parameter (call by value) 
                * pass value back as return value
                NOTE : better not, but ok
                * pass variable in by reference (call by reference)
                NOTE : if we shall use global variables : (last resort)
                * use long names with unique prefixes to avoid collisions

      * ----------------------------------------------------- */
        function goGlobal() 
        {
            global $var;
            $var = 100;
        }
        $var = 10;
        goGlobal(); // $var is altered with the alias inside the function
        echo "go global variable = $var <br/>";

     /** --------SECTION Coping with missing bit ----------------
      
      * missing bits of different php versions :
            --- function_exists("name of function")

      * ----------------------------------------------------- */
            if ( function_exists("array_combine") )
            {
                echo "array_combine exists <br/>";
            } else {
                echo "array_combine does not exist <br/>";
            }
     /** -------- SECTION php internal configuration -------------
     
      * to check configuration capabilities of my PHP installation
            ---  phpinfo()

      * ----------------------------------------------------- */
        phpinfo();

     /** -------------SECTION Modularity and files----------------
      
      ** include & require :
      * include :
            --- looks for a file, if it is present => pulls it
                        if file is not present => (not) Fatal
      * require :
            --- if file is not present => //! Fatal
                        //* better to use it almost always

      * ========================
            : Examples :
        ========================

            1. include(file.php); 
            * ==> pull the file here
            2. include_once(file.php); 
            * ==> pull the file here unles it has been pulled before
            3. require(file.php);
            * ==> pull the file here or dit if it is missing (ex : nav)
            4. require_once(file.php);
            * ==> does not mean that I can only include the file once, 
            *     but means that the function is only called once

      * ----------------------------------------------------- */
?>