<?php
    require_once 'pdo.php';

    /**============================================
     *               SECTION CREATE
     *=============================================**/
        if ( isset($_POST['name']) && isset($_POST['email']) && isset($_POST['password']) ) 
        {
            $sql = "INSERT INTO users
                    (name, email, password) 
                    VALUES
                    (:name, :email, :password)";
                    // :placeholder (can be named any name as if they are variables)
        
                echo "<pre><br/> $sql </pre><br/>";
        
                $statement = $pdo->prepare($sql);
            
                $statement->execute(array(
                    ':name' => $_POST['name'],
                    ':email' => $_POST['email'],
                    ':password' => $_POST['password']
                ));
            
        }

    /**============================================
     *               SECTION DELETE
     *=============================================**/
    if ( isset($_POST['delete']) && isset($_POST['user_id']) )
    {
        $sqlRequest = "DELETE FROM users WHERE user_id = :user_id";

        echo "<pre> $sqlRequest </pre>";

        $statement2 = $pdo -> prepare($sqlRequest);
        
        $statement2->execute(
            array(
                'user_id' => $_POST['user_id']
            )
        );
    }
    
?>

<table border="1">
    <?php
    /**============================================
     *               SECTION READ
     *=============================================**/
        // not forgetting to ask for user_id
            $statement = $pdo -> query("SELECT name, email, password, user_id FROM users");

            echo ("
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Act</th>
                </tr>
                ");

        // adding an "action column" to the table by adding a form with button
            while ( $row = $statement->fetch(PDO::FETCH_ASSOC) )
            {
                echo ("
                <tr>
                    <td>".$row['name']."</td>
                    <td>".$row['email']."</td>
                    <td>".$row['password']."</td>
                    <td>
                        <form method='POST'>
                            <input type='hidden' name='user_id' 
                                    value='".$row['user_id']."' />
                            <input type='submit' name='delete' 
                                    value='delete' />
                        </form>
                    </td>
                </tr>
                ");
                /* ANCHOR : another way to write 
                    echo "<tr><td>";
                    echo $row['name'];
                    echo "</td><td>";
                    echo $row['email'];
                    echo "</td><td>";
                    echo $row['password'];
                    echo "</td><td>";
                    echo ('<form method="post"><input type="hidden" ');
                    echo ('name="user_id" value="'.$row['user_id'].'" /> ');
                    echo ('<input type="submit" value="del" name="delete" /> ');
                    echo "</form>";
                    echo '</td></tr>';
                */
        }
    ?>
</table>

<h1>Add a new user</h1>
<form method="post">
    <label for="name">Name</label>
    <input type="text" name="name" placeholder="Name" required />
    <br/>
    <label for="email">Email</label>
    <input type="email" name="email" placeholder="email" required />
    <br/>
    <label for="password">Password</label>
    <input type="password" name="password" placeholder="Password" required />
    <br/>
    <input type="submit" value="submit">
</form>