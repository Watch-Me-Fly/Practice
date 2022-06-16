<?php

    /*
        ----------------------------------------------------
                    SECTION : Arrays in PHP
        ----------------------------------------------------
        *** Can either be :
            * linear list :
                --- indexed by numbers
            * key-value pairs / maps arrays :
                --- like "name":"chuck", "lastName": "Norris"
            * multi-dimensional arrays :
                --- arrays of arrays.
    */
    /**============================================
     *            ANCHOR Linear array
     *=============================================**/
        $linearArray = array("Hi", "You");
        echo $linearArray[0];

        echo "<pre >";
        print_r($linearArray);
        echo "</pre>";
        var_dump($linearArray);

    /**============================================
     *     ANCHOR key-value pairs / maps arrays
     *=============================================**/
        $keyValuePairs = array(
            "name" => "chuck",
            "email" => "chuck@example.com"
        );
        echo $keyValuePairs["email"]."<br/>";

        var_dump($keyValuePairs);

    /**============================================
     *       ANCHOR multi-dimensional arrays
     *=============================================**/
        $multiDimensionalArrays = array(
            'paper' => array ( // nested array 1
                'copier' => "copier & multipurpose",
                'inkjet' => "inkjet printers"
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
        echo $multiDimensionalArrays["paper"]["copier"]."<br/>";

        $multi1 = array(
            array(
                'valeur 1', 'valeur 2', 'valeur 3'
            ),
            array(
                'valeur 4', 'valeur 5', 'valeur 6'
            ),
            array(
                'valeur 7', 'valeur 8', 'valeur 9'
            )
        );
        
        $multi2 = array(
                    array(
                        array('compliqué 1', 'compliqué 2')
                    ),
                    array(
                        array('compliqué 3', 'compliqué 4')
                    )
        );

    /**============================================
     *       ANCHOR array creation and building
     *=============================================**/
        //* starting by creating an empty array and increment

        // linear array creation---------------------
        $la = array();
        $la[] = "Hello";
        $la[] = "World";
        echo "<pre >";
        print_r($la);
        echo "</pre>";

        // key-value pairs array creation------------
        $ka = array();
        $ka["name"] = "my name";
        $ka["course"] = "PHP";
        echo "<pre>";
        print_r($ka);
        echo "</pre>";

    /**==============================================
     *                REVIEW BLOCK
     
     //*  print_r() :
        * dumps an array => shows PHP data
        * prints values only
        * Good for debugging
        * use w/ <pre>
        * the _r stands for "recursive" : meaning : 
                * there is an array within an array within an array
     //* var_dump() : 
        * more detailed
        * prints both type and value => therefore can print "false"
     *=============================================**/
        $something = false;
        echo "one<br/>";
        print_r($something); // will not print anything
        echo "two<br/>";
        var_dump($something); // will show it's a false boolean
    
    /*
        ----------------------------------------------------
                SECTION : looping through arrays
        ----------------------------------------------------
        *** Can either be :
            * for loops :
                --- counted loops ( count() = equivalent to .length in js )
            * foreach loops :
                --- foreach(array + 'as' is the keyword + 1 to 2 iteration variables)
                --- iteration variables : one for the key and one for the value
                --- read : "for each stuff as key maps to value"
            * while loops :
    */
    /**============================================
     *          ANCHOR counted loops (for)
     *=============================================**/
        for ( $i = 0; $i < count($linearArray); $i++)
        {
            echo "i = ", $i, 
                " => value = ", $linearArray[$i],
                "<br/>";
        }
        echo "<br/>";

        for ( $a = 0; $a < count($multi2); $a++ )
        {
            for ( $b = 0; $b < count($multi2[$a]); $b++ )
            {
                for ( $c = 0; $c < count($multi2[$a][$b]); $c++ )
                {
                    echo $multi2[$a][$b][$c], "<br/>";
                }
            }
        }
        echo "<br/>";
    /**============================================
     *          ANCHOR foreach loops
     *=============================================**/
        foreach ($keyValuePairs as $key => $value)
        {
            echo "key = " . $key . " value = " . $value . "<br/>";
        }
        echo "<br/>";

        foreach ( $multi1 as $secondArray )
        {
            foreach ( $secondArray as $values )
            {
                echo $values . "<br/>";
            }
        }
        echo "<br/>";
    /**============================================
     *              ANCHOR while loops
     *=============================================**/
        $w0 = 0;
        while ( $w0 < count($multi2) )
        {
            $w0 = 0;
            while ( $w1 < count($multi2[$w0]) )
            {
                $w1 = 0;
                while ( $w2 < count($multi2[$w0][$w1]) )
                {
                    echo $multi2[$w0][$w1][$w2]. "<br/>";
                    $w2++;
                }
                $w1++;
            }
            $w0++;
        }


?>