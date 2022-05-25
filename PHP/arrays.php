<?php
    /*
        **** Arrays in PHP :
        can either be :
        - a linear list, indexed by numbers
        - or be key value pairs like "name":"chuck", "lastName": "Norris"
        - arrays of arrays

        same as JS : start from 0
    */

    // creating a linear array
    $stuff = array("hi", "there");
    echo $stuff[0], "<br/>";

    // key value / maps array
    $key = array(
        "name" => "chuck",
        "lastName" => "Norris"
    );
    echo $key["lastName"], "<br/>";

    /*
        **** the function print_r() : dumps an array (shows PHP data)
            - Good for debugging
            - use the pre tag to see code w/o line  wrapping
            - the "r" in print_r() stands for 'recursive', meaning that there is an array within an array within an array
        **** var_dump() is also used for debugging
            - more detailed
            - can print "false" (because it prints both type and value)
    */

    echo ("<pre>\n");
    print_r($key);
    echo ("\n</pre>\n");
    var_dump($stuff);

    // var_dump and false print
    $thing = FALSE;
    echo("One\n");
    print_r($thing); // it will skip this 
    echo("Two\n");
    var_dump($thing); // will show it is boolean and is false


    /*
        **** Building an array :
            - can also start with an array and increment to the end
    */
    $va = array();
    $va[] = "Hello";
    $va[] = "World";
    echo ("<pre>\n");
    print_r($va);
    echo ("\n</pre>\n");

    // with key values
    $za = array();
    $za["name"] = "Chuauah";
    $za["Course"] = "PHP";
    echo ("<pre>\n");
    print_r($za);
    echo ("\n</pre>\n");

    /*
        **** looping through an array :
            ** in arrays with keys :
                - foreach (array + 'as' is the keyword + can have 1 or
                    2 iteration variables, one for the key and one for 
                    the value)
                - read : "for each stuff as key maps to value"
            ** in arrays with indexes :
                - counted loops (count() = equivalent to .length in js)
    */
    
    $choses = array(
        "nom" => "table",
        "utilisation" => "travailler"
    );

    // array with keys
    foreach ($choses as $key => $value)
    {
        echo "Key = ", $key, ", Val = ", $value, "<br/>";
    }

    echo "<br/>";

    // indexed array 
    for($i=0; $i < count($stuff); $i++) 
    {
        echo "i = ", $i, 
            " => val = ", $stuff[$i], 
            "<br/>";
    }

    echo "<br/>";

    /*
        **** Two dimensional arrays : are nested arrays
            - key is in single quotes, value is in double quotes
    */
    $products = array(
        'paper' => array ( // nested array 1
            'copier' => "copier & multipurpose",
            'inkjet' => "inkjet Printers"
        ),
        'pens' => array ( // nested array 2
            'ball' => "ball point",
            'marker' => "Markers"
        ),
        'misc' => array ( // nested array 3
            'tape' => "Sticky tape",
            'glue' => "Adhesives"
        )
    );
    // grabbing the 1st sub of first array, then going to the 2nd sub of insider array : $variable['1st sub']['2nd sub'];
    echo $products["pens"]["marker"];

?>
