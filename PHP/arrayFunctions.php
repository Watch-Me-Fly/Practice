<?php

    $array = array();
    $value = "";
    $array["key"] = $value;

    $example = array(
        "name" => "chuck",
        "course" => "PHP"
    );

    /**============================================
     *               SECTION functions
     *=============================================**/
        /* ----------------------------------------------------
            Check if the given key/index exists in the array (boolean) 
            * array_key_exists("key", $array);
        ---------------------------------------------------- */
            if ( array_key_exists('course', $example) )
            {
                echo "course key exists </br>";
            } else {
                echo "course key not found</br>";
            }
            echo "<br/>";

        /* ----------------------------------------------------
            Determine if a variable is declared and is different than NULL (boolean)
            * isset($array['key']);
        ---------------------------------------------------- */
            // php < 7.0.0 
            echo isset($example["name"]) ?
                "name is set<br/>" : "name is not set<br/>";
            echo isset($example['addr']) ? 
                "address is set\n <br/>" : "address is not set\n <br/>";
            echo "<br/>";
    
            /**----------------------------------------------
             **                     NOTE
                      ---------------------------------
             * isset + (? :) is equivalent to :
                //* "null coalescing operator (??)"
             *---------------------------------------------**/
            $name = $example["name"] ?? "not found";
            echo "name = " . $name;
        
        /* ----------------------------------------------------
            how many elements in the array
            * count($array);
        ---------------------------------------------------- */
            print "count : " . count($example) . "<br/>";
            echo "<br/>"."<br/>";
        /* ----------------------------------------------------
            returns true if a variable exists in the array
            * is_array($array);
        ---------------------------------------------------- */
            if ( is_array($example) )
            {
                echo "example is an array <br/>";
            } else {
                echo "example is not an array <br/>";
            }

        /* ----------------------------------------------------
            sorts the array values (loses key)
            * sort($array);
        ---------------------------------------------------- */
            /**----------------------------------------------
             **                     NOTE
                      ---------------------------------
             * //* sort() :
             *      works with literal array 
             *      does not work key value arrays
             *---------------------------------------------**/
            sort($example);
            echo "<pre>";
            print_r($example);
            echo "</pre> <br/>";

        /* ----------------------------------------------------
            sorts the array values by key
            * ksort($array);
        ---------------------------------------------------- */
            ksort($example);
            echo "<pre>";
            print_r($example);
            echo "</pre> <br/>";
        /* ---------------------------------------------------- 
            sorts the array by value, keeping key association in place
            * asort($array);
        ---------------------------------------------------- */
            asort($example);
            echo "<pre>";
            print_r($example);
            echo "</pre> <br/>";
        /* ----------------------------------------------------
            shuffles the array into random order
            * shuffle($array);
        ---------------------------------------------------- */
            shuffle($example);
            echo "<pre>";
            print_r($example);
            echo "</pre> <br/>";
        /* ----------------------------------------------------
            exploding arrays & string processing
             (it makes an array from a string)
            * explode($separator, $string, $limit ?);
        ---------------------------------------------------- */
            $sentence = "This is a sentence with seven words";
            $exploded = explode(' ', $sentence);
                echo "<pre>";
                print_r($exploded);
                echo "</pre> <br/>";
            $verifyExplosion = is_array($exploded) ?
                    "Yes" : "No";
                echo $verifyExplosion;

?>