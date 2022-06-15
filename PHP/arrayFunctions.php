<?php

    $array = array();
    $value = "";
    $array["key"] = $value;

    array_key_exists("key", $array);
    // returns true if key is set in the array

    isset($array['key']);
    // returns true if key is set in the array too

    count($array);
    // how many elements in the array 

    is_array($array);
    // returns true if a variable exists in the array

    sort($array);
    // sorts the array values (loses key)

    ksort($array);
    // sorts the array values by key

    asort($array);
    // sorts the array by value, keeping key association
    
    shuffle($array);
    // shuffles the array into random order


    /***********************************/
    $ar = array();
    $ar["name"] = "chuck";
    $ar["course"] = "php";

    if (array_key_exists('course', $ar)) {
        echo ("course exists\n <br/>");
    } else {
        echo ("course not found\n <br/>");
    }

    echo "<br/>";

    // php < 7.0.0 
    echo isset($ar['name']) ? 
        "name is set\n <br/>": "name is not set\n <br/>";
    echo isset($ar['addr']) ? 
        "address is set\n <br/>" : "address is not set\n <br/>";

    echo "<br/>";

        /*
            equivalent to the following "null coalescing operator (??)" 
                (php >= 7.0.0)
        */
        $name = $ar["name"] ?? 'not found';
        echo "name = $name";


    echo "<br/>"."<br/>";
    
    print "count: " . count($ar) . "<br/>";
    if ( is_array($ar) ) {
        echo '$ar is an array'; // signle quote will not print as var
    } else {
        echo "$ar is not an array"; // double quotes considered var
    }

    /*
        sort() -- works with literal array but not key value arrays
            sort($ar); 
            echo "<pre>";
            print_r($ar);
            echo "</pre>";

        ksort() -- sorts by key
            ksort($ar);
            echo "<pre>";
            print_r($ar);
            echo "</pre>";
    */

    // asort() -- sorts by value, keeping keys in place
    asort($ar); 
    echo "<pre>";
    print_r($ar);
    echo "</pre>";

    // exploding arrays & string processing 
        // (it makes an array from string)
    $inp = "This is a sentence with seven words";
    $temp = explode(' ', $inp); // splitting spaces (can be ,/)
    echo "<pre>";
    print_r($temp);
    echo "</pre>";

    $verif = is_array($temp) ? "yes" : "no";
    echo $verif;
?>