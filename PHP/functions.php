<?php

/**================= SECTION : strings functions ==================*/
 
    // str_replace('find','replacement','where') - replaces all occurrences
    echo str_replace("world", "Peter", "Hello world!");
    echo "<br />";

    // strrev() - reverses strings
    echo "reversed string : " . strrev(" .dlrow olleh");
    echo "<br />";
    
    // str_repeat('what', 'how many times') - string repeat
    echo str_repeat("hip ", 2);
    echo "<br />";

    // strtoupper() - string to upper case
    echo strtoupper("hooray !");
    echo "<br />";

    // strlen() - string length
    echo strlen("intro");
    echo "<br />";

/**================= SECTION : function examples ===================*/

    // simple print / echo
        function greet()
        {
            print "Hello";
        }
        greet();

    // using return enables concatenation
        function greeting()
        {
            return "Hi";
        }
        print greeting() . "Gleen <br />";

    // passing parameters and arguments
        function howdy($lang)
        {
            if ($lang == 'fr')
            {
                return "Bonjour";
            }
            elseif ($lang == 'es')
            {
                return "Hola";
            }
            else
            {
                return "Hello";
            }
        }
        print howdy('fr') . "Abigail <br />";
    
    // Optional parameters (adding value to parameter makes a default value)
        function byebye($lang = 'en')
        {
            if ($lang == 'fr')
            {
                return "Au revoir";
            }
            elseif ($lang == 'es')
            {
                return "Adios";
            }
            else
            {
                return "Good bye";
            }
        }
        print byebye() . "<br />"; // no arguments passed => default expressed

/**================= SECTION : calls in functions ===================*/
    /* //* Call by value :
            - value only lives inside the function
            - is an alias to original value
            - this way, parameters are copied rather than referenced
            - original value is thus unchanged
    */
        function byValue( $alias )
        {
            $alias = $alias * 2;
            return $alias;
        }
        $value = 10;
        $doubleValue = byValue($value);
        echo "value (still intact) = $value, 
                doubleValue = $doubleValue <br />";

    /* //* Call by reference: 
            - to point to the original parameter rather an alias
            - using (&) inside parenthesis
            - the presence of ampersand (&) means it will change value
                of variable / array .. etc
    */
        function byReference( &$realThing )
        {
            $realThing = $realThing * 3;
        }
        $refValue = 10;
        byReference( $refValue );
        echo "value = $refValue (same variable is changed) <br />";
?>