<?php
//! do not do delete on a get, always delete on a post

require_once 'pdo.php';

if ( isset( $_POST['user_id'] ) )
{
    $sql = "DELETE FROM users where user_id = :user_id";

    // show me the request
    echo "<pre> $sql </pre>";

    $statement = $pdo->prepare($sql);

    $statement->execute( array(
        'user_id' => $_POST['user_id']
    ));
}
?>
<h1>DELETE A USER</h1>
<form method="post">
    <label for="user_id">ID to delete</label>
    <input type="text" name="user_id" id="user_id" placeholder="ID to delete" required>
    <br/>
    <input type="submit" value="Delete"/>
</form>