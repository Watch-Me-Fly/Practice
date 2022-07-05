<?php
// connect to database
require_once 'pdo.php';

// statement variable is always the sql line (the connection statement)
    // in read / select => use query, fetch
    // in C, U, D => use prepare, execute
$statement = $pdo -> query("SELECT name, email, password FROM users");

echo '<table border="1"><br/>';

while ($row = $statement -> fetch(PDO::FETCH_ASSOC) )
{
    echo "<tr><td>";
    echo $row['name'];
    echo "</td><td>";
    echo $row['email'];
    echo "</td><td>";
    echo $row['password'];
    echo "</td></tr>";
}

echo "</table>";
?>