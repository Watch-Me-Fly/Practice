<!DOCTYPE html>
    <head><title>Saja ALHAYAN MD5 Cracker</title></head>
    <body>
        <h1>MD5 cracker</h1>
        <p>This application takes an MD5 hash
        of a two-character lower case string and 
        attempts to hash all two-character combinations
        to determine the original two characters.</p>
        <pre>
        Debug Output:
        <?php
        $goodtext = "Not found";

        // If there is no parameter, this code is all skipped
        if ( isset($_GET['md5']) ) {

            /* 
                * microtime() 
                    -- When called without the optional argument, this function returns the string "msec sec" where the current time is measured
            */
            $time_pre = microtime(true);
            $md5 = $_GET['md5'];
            /*
                * This is our alphabet
                    $txt = "abcdefghijklmnopqrstuvwxyz";
                    $show = 15;
            */
            // changed to numbers
            $num = "123456789";
            $show = 15;

            // Outer loop to go through the alphabet for the
            // first position in our "possible" pre-hash
            // text
            // (changed to "numbers" variable, and 2 more digits added)
            for($i=0; $i<strlen($num); $i++ ) {
                $ch1 = $num[$i];   // The first of two characters

                // Our inner loop. Note the use of new variables
                // $j and $ch2 
                for($j=0; $j<strlen($num); $j++ ) {
                    $ch2 = $num[$j];  // Our second character
                    
                    for ($a=0; $a<strlen($num); $a++) {
                        $ch3 = $num[$a]; // Our third character

                        for ($b=0; $b<strlen($num); $b++) {
                            $ch4 = $num[$b]; // Our fourth character


                            // Concatenate the characters together to 
                            // form the "possible" pre-hash text
                            $possibleCode = $ch1.$ch2.$ch3.$ch4;


                            /**============================================
                             *               SECTION 
                             * You must have the value as a string not as an integer. For this shows the right and wrong way to check the has for "1234":

                                $check = hash('md5', '1234');  
                                //* Correct - hashing a string

                                $check = hash('md5', 1234);
                                //!! Incorrect - hashing an integer
                             *=============================================**/

                            // Run the hash and then check to see if we match
                            $check = hash('md5', $possibleCode);
                            if ( $check == $md5 ) {
                                $goodtext = $possibleCode;
                                break;   // Exit the inner loop
                            }

                            // Debug output until $show hits 0
                            if ( $show > 0 ) {
                                print "$check $possibleCode\n";
                                $show = $show - 1;
                            }
                        }
                    }
                }
            }
            // Compute elapsed time
            $time_post = microtime(true);
            print "Elapsed time: ";
            print $time_post-$time_pre;
            print "\n";
        }
        ?>
        </pre>
        <!-- Use the very short syntax and call htmlentities() -->
        <p>Original Text: <?= htmlentities($goodtext); ?></p>
        <form>
            <input type="text" name="md5" size="60" />

            <input type="submit" value="Crack MD5"/>
        </form>
        <ul>
            <li><a href="index.php">Reset</a></li>
            <li><a href="md5.php">MD5 Encoder</a></li>
            <li><a href="makecode.php">MD5 Code Maker</a></li>
            <li><a
            href="https://github.com/csev/wa4e/tree/master/code/crack"
        target="_blank">Source code for this application</a></li>
        </ul>
    </body>
</html>

