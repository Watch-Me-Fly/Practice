<?php

    /* 
        str_replace
            ('find' ,'replace with:' ,'string to be searched' , +- count)
            -- replaces all occurrences of a string 
    */
    echo str_replace("world", "Peter", "Hello world!");
    echo "<br/>";

    // strrev() -- string reverse
    echo "reversed string :" . strrev(" .dlrow olleh");
    echo "<br/>";

    // str_repeat('what to repeat', 'how many times') -- string repeat
    echo str_repeat("Hip ", 2);
    echo "<br/>";

    // strtoupper() -- string to uppercase
    echo strtoupper("hooray !");
    echo "<br/>";

    // strlen() -- string length
    echo strlen("intro");
    echo "<br/>";

    /*************************/

    function greet () {
        print "Hello <br/>";
    }
    greet();

    // using return enables concatenation
    function greeting() {
        return "Hi";
    }
    print greeting() . " Glenn <br/>";
    
    // passing parameters and arguments
    function howdy($lang) {
        if ($lang == 'en') {
            return "Greetings";
        } if ($lang == 'fr') {
            return "Bonjour";
        }
    }
    print howdy('fr') . " Abigail <br/>";

    /*
        optional arguments :
            adding a value to arguments makes a default value
    */
    function howdy2($lang = 'es') {
        if ($lang == 'es') {
            return "Hola";
        } if ($lang == 'en') {
            return "Hi";
        }
    }
    print howdy2(); //-- no arguments are passed => default is expressed
    echo "<br/>";

    /*
        * Call by value :
            - value only lives inside the function
            - is an alias to original value
            - this way, parameters are copied rather than referenced
            - original value is thus unchanged
    */    
    function double($alias) {
        $alias = $alias * 2;
        return $alias;        
    }
    $val = 10;
    $doubleVal = double($val); //-- data is stored in another variable
    echo "value = $val doubled = $doubleVal <br/>";

    /*
       * Call by reference: 
            - to point to the original parameter rather an alias
            - using (&) inside parenthesis
            - the presence of ampersand (&) means it will change value
                of variable / array .. etc
    */
    function triple(&$realThing) {
        $realThing = $realThing * 3;
    }
    $value = 10;
    triple($value);
    echo "triple = $value <br/>" //-- data is stored in same variable

?>