<?php

/**===============================================================
 *                        SECTION PDO
 *=============================================================**/
    /** Short for : Portable data objects
        * it is a connection of data between the database and the user
        * it is a library
        */
    //--------------------------------------------------------
    /*  to create a PDO object : 
        NOTE new PDO(DSN: HOST, +-PORT, DatabaseName, USERNAME, PASSWORD)
        EXAMPLE : 
        new PDO('mysql:host=localhost;port=3306;dbname=test', 'root', '')
    */

echo "<pre>";

// 1. Create a PDO object
    $pdo = new PDO('mysql:host=localhost;dbname=courserapdo', 'root', '');

// 2. send a query to the database (sending strings of sql to server)
    $statement = $pdo->query('SELECT * FROM users');

// 3. loop through the results and get them back from the database
    // FETCH_ASSOC : returns an associative array where the keys are string indexed (the column names)
    // fetch_array() returns one array with both numeric keys, and associative strings (column names), so here you can either use $row['column_name'] or $row[0]
        while ( $row = $statement->fetch(PDO::FETCH_ASSOC) ) {
            print_r($row);
        }

echo "</pre>";

?>