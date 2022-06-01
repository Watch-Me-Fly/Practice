<?php

    /* 
        * In the function tryZap :
            --- variable is local, not global.
            --- variable is used outside, so will cancel the one inside the function
            --- result of print is => $val = 10;
    */
    function tryZap() {
        $val = 100;
    }

    $val = 10;
    tryZap();
    echo "TryZap = $val <br/>";

    /* 
        * In the function doZap :
            --- variable is global.
            --- this creates an alias for the variable outside the function and alter its value
            --- result of print is => $value = 100;


            !! avoid using too much global variables
            //* instead => 
                NOTE : ideal solutions -- w/o S/Ex : 
                * pass variable in as parameter (call by value) 
                * pass value back as return value 
                NOTE : better not, but ok
                * pass variable in by reference (call by reference)
                NOTE : if we shall use global variables : (last resort)
                * use long names with unique prefixes to avoid collisions

    */
    function doZap() {
        global $value;
        $value = 100;
    }

    $value = 10;
    doZap();
    echo "DoZap = $value <br/>";

    /**========================================================================
     *      SECTION Coping with missing bit of different php versions
     *========================================================================**/

    /*
            * function_exists("name of function")
    */

    if (function_exists("array_combine")) {
        echo "array_combine exists";
    } else {
        echo "array_combine does not exist";
    }

    /**========================================================================
     *   SECTION internal configuration capabilities of my PHP installation
     * phpinfo() dumps the configurations
     *========================================================================**/
    phpinfo();

    /**========================================================================
     *                      SECTION Modularity and files
     *========================================================================**/

    /*
        * include & require :
            --- include : looks for a files, if it is present => pulls it
                        if file is not present => not Fatal
            --- require : if file is not present => //! Fatal
                        //* better to use it almost always

            ========================
                : Examples :
            ========================
            
            1. include(file.php); 
            * ==> pull the file here
            2. include_once(file.php); 
            * ==> pull the file here unles it has been pulled before
            3. require(file.php);
            * ==> pull the file here or dit if it is missing (ex : nav)
            4. require_once(file.php);
            * ==> does not mean that I can only include the file once, but means that the function is only called once
    */

?>