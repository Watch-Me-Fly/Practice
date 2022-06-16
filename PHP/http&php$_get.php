<h1>Contents of $_GET array</h1>
<p>using print_r:</p>
<pre>
    <?php
        print_r($_GET);
    ?>
</pre>
<p>using var_dump:</p>
<pre>
    <?php
        var_dump($_GET);
    ?>
</pre>

<!-- add : (?x=2&y=4) to URL -->

<!-- $_GET is a super array, 
    it includes what is after ?, 
    add another parameter by adding & 
-->