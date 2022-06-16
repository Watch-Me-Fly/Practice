<?php

/**============================================
 *         SECTION $_GET and $_POST
 *=============================================**/
//  they are called verbs (get verb and post verb)

        /**=================================
         * $_GET : a super global variable
         *==================================**/
            /*
            --- adds to the link : ?nameOfTheField=valueEntered
            ! --- not secure as it shows informations
            * --- used when reading or searching for things
            ! --- avoid using when things should not be modifiable
            ! --- because GET urls are idempotent 
            ! --- (meaning if i hit the button i will get the same thing back)
            --- web search spiders follow GET URLs but not POST
            --- length limit is unkown (depending on browsers, servers.. etc)
            --- URLs tend to get very long
            */

        /**=================================
         * $_POST : a super global variable
         *==================================**/
            /* 
            --- parameters are hidden
            --- content type shows the url encoding the data
            * --- to be used when creating or modifying data
            * --- should be used for example in bank withdraw 
            */

?>
<head>
    <title>SuperGlobals and Forms</title>
    <style>
        form {
            border: 1px solid black;
            margin: 10px;
            padding: 10px;
        }
        .form-group {
            margin: 10px;
        }
        pre {
            margin: 10px;
            padding: 20px;
            background-color: #DAEAF1;
        }
    </style>
</head>
<!----------------------------------------------
                SECTION Super Globals
------------------------------------------------>
<form method="post">
    <!-- 
        NOTE : method="POST" :
                when submit is hit, send the data via POST method.
                it comes in the post array not the get array on the bottom
    -->
    <h3>Guessing game</h3>
    <div>
        <label for="guess">Input guess</label>
        <input type="text" name="guess" size="40" id="guess">
        <input type="submit" value="Submit">
    </div>
</form>

<!----------------------------------------------
                SECTION Input types 
------------------------------------------------>
<!--
    NOTE : name vs id :
            * name : affect browser to server connections,
            * id : only in browser (i.e : html, css, js)
-->
<form method="POST">
    <div class="form-group">
        <label for="account">Account:</label>
        <input type="text" name="account" id="account" size="40"/>
    </div>
    <div class="form-group">
        <label for="pw">Password:</label>
        <input type="password" name="pw" id="pw" size="40"/>
        <!-- 
            NOTE : passwords: 
                --- are similar to text inputs : sending data in plain text between browser and server
                --- shows on var_dump/print_r if not encoded
        -->
    </div>
    <div class="form-group">
        <label for="nick">Nickname:</label>
        <input type="text" name="nick" id="nick" size="40"/>
    </div>
    <div class="form-group">
        <input type="radio" name="when" value="am">AM<br/>
        <input type="radio" name="when" value="pm">PM
        <!--
            NOTE : radio buttons : 
                    --- as soon one is pushed, the other is turned off
                    --- so it will appear in the array of $_POST : when => pm
                    --- are associated, not by proximity on the code, but with "name" value (in this case : when)
        -->
    </div>
    <div class="form-group">
        <input type="checkbox" name="class1" value="ANAT101" checked>ANAT101<br/>
        <input type="checkbox" name="class2" value="PATH102">PATH102<br/>
        <input type="checkbox" name="class3">EMBR103
        <!--
            NOTE : Check boxes : 
                    --- each has a different name, different value
                    --- submission will show each checkbox separately with its value 
                    --- if no value is defined like the last checkbox : value will be == "on"
        -->
    </div>
    <div class="form-group">
        <select name="soda" id="input06">
            <option value="0">--please select--</option>
            <option value="1">coke</option>
            <option value="2">pepsi</option>
            <option value="3">7Up</option>
            <option value="4">Miranda</option>
            <option value="5">Mountain dew</option>
        </select>
        <!--
            NOTE : SELECT and OPTIONS 
                    --- are good for database use
                    --- will show chosen value when printed
                    --- 1 name (select name), for multiple values (option values)
        -->
    </div>
    <div class="form-group">
        <select name="snacks" id="input07">
            <option value="">--please select--</option>
            <option value="chips">Chips</option>
            <option value="peanuts" selected>Peanuts</option>
            <option value="cookies">Cookies</option>
        </select>
        <!--
            NOTE : SELECT and OPTIONS #2
                    --- I can have a default other than the first one (peanuts selected)
                    --- can use strings as in this case
                    --- choosing the first empty value, results in an empty dump
        -->
    </div>
    <div class="form-group">
        <label for="textarea">tell us about yourself</label> <br/>
        <textarea name="textarea" id="textarea" cols="40" rows="10">some text</textarea>
        <!--
            NOTE : Text Area :
                    --- in the print/dump => the text inserted.
        -->
    </div>
    <div class="form-group">
        <label for="input09"></label>
        <select multiple="multiple" name="code[]" id="input09">
            <option value="python">Python</option>
            <option value="css">CSS</option>
            <option value="html">HTML</option>
            <option value="php">PHP</option>
        </select>
        <!-- 
            NOTE : SELECT MULTIPLE / checkbox :
                    //! AVOID MAKING THEM
                    --- adding multiple="multiple" to select tag
                    --- it is an array (the options) when >1 is chosen
                    --- the key that I will send is an array (code[])
                    ==> this means that it will create an array inside an array (post is an array; inside it will go code[] another array)
        -->
    </div>
    <div class="form-group">
        Transportation :
        <input type="flying" name="saucer"/>
        <!-- 
            STUB
            NOTE : unrecognized types / non existant in html :
                --- will return name and value as if recognized
         -->
    </div>
    <div class="form-group">
        <input type="color" name="favecolor" value="#0000ff"/>
          <!-- 
              NOTE : color pickers
                    --- I can set a default value;
                    --- whatever is chosen will be printed in HEX value
           -->
    </div>
    <div class="form-group">
        <input type="submit" value="Submit" name="doPost">
        <input type="submit" value="Escape" 
                onclick="location.href='https://google.com/'; return false; ">
        <!-- 
            NOTE : Submit button :
                    --- it can have name and value
                    --- value is apparent on the html page
                    --- thus it is not practical to use the value in the php code ==>
                    // TODO instead :
                        * isset()
                            --- to verify the existence of the key
                            --- if i have multiple buttons : better give different names (regardless of value and appearance on html view), rather than different values and same name.

                    //* redirecting towards another link goes by adding : (location.href='....')
                    --- if i don't add "http://" ==> will change to default url + added text
        -->
    </div>
    <!---------------- SECTION : Other input types ----------------->
    
    <!-- 
        //* date : 
            --- also prints value according to default value setting yy-mm-dd for ex.
        //* number :
            --- adding min and max to limit
    -->
    
</form>

<pre>
    $_POST:
    <?php
        print_r($_POST);
    ?>
    $_GET:
    <?php
        print_r($_GET);
    ?>
</pre>