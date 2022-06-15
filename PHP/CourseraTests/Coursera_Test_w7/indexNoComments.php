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

        if ( isset($_GET['md5']) ) {
            $time_pre = microtime(true);
            $md5 = $_GET['md5'];
            $num = "123456789";
            $show = 15;
            for($i=0; $i<strlen($num); $i++ ) {
                $ch1 = $num[$i]; 
                for($j=0; $j<strlen($num); $j++ ) {
                    $ch2 = $num[$j]; 
                    
                    for ($a=0; $a<strlen($num); $a++) {
                        $ch3 = $num[$a];

                        for ($b=0; $b<strlen($num); $b++) {
                            $ch4 = $num[$b]; 
                            $possibleCode = $ch1.$ch2.$ch3.$ch4;
                            $check = hash('md5', $possibleCode);
                            if ( $check == $md5 ) {
                                $goodtext = $possibleCode;
                                break;
                            }
                            if ( $show > 0 ) {
                                print "$check $possibleCode\n";
                                $show = $show - 1;
                            }
                        }
                    }
                }
            }
            $time_post = microtime(true);
            print "Elapsed time: ";
            print $time_post-$time_pre;
            print "\n";
        }
        ?>
        </pre>
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

