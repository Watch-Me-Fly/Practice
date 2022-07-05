<?php

// creating a new connection to the database
    // the (;) separates commandes 
    
    $pdo = new PDO('mysql:host=localhost; 
                    dbname=courserapdo', 
                    'root', ''); 

// asking it to tell us what kind of errors we are having
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

?>