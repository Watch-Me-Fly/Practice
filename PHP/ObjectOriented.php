<?php
/**===================================================================
 *                           SECTION Terminology
 *==================================================================**/
    /** ANCHOR Object Oriented Progamming (OOP) :
        * a programming paradigm that represents concepts as "objects" that have :
            --- data fields (attributes describing the objects)
            ---  methods (associated procedures).
        * Objects :
            --- are normally instances of classes
            --- are used to interact with one another to design applications and computer programs 
     */
    /** ANCHOR Encapsulation / Isloation :
        * Drawing boundaries around objects that are sets of functions and sets of variables / data.
        * not having to look at overall the code
        * a way to capture and encapsulate information
     */
/**===================================================================
 *                           SECTION Definitions
 *==================================================================**/
    /** //* a class : 
            * is a template / a generic blueprint to capture informations. 
            * (it is not a thing itself).
                --- like a cookie cutter, making cookies of the same shape
                --- to stamp out as many things as possible.
            * each template can have different attributes.
        //* Methods and attributes:
            * are things that go inside the class.
            * there are data and code inside each (methods and attributes)
        //* Object / Instance :
            * a particular instance of the class
            * e.g. : 
                -- class: dogs
                -- objects/instance: fur color
     */
/**===================================================================
 *                          SECTION Non-OOP
 *==================================================================**/
    /** ANCHOR Reading PHP documentation
         * prefixes facilitate finding methods:
            --- date_add(), string_add(), array_add()...etc
         * before php 5.2
     */
/**===================================================================
 *                          SECTION OOP
 *==================================================================**/
    /** 
     * Creating a box, 
        --- not only containing code and attributes, but also : (a namespace)
     * after php 5.2
     */
/**===================================================================
 *                          SECTION Code1
 *==================================================================**/
    //  calling global functions ( date_default_timezone_set() )
     date_default_timezone_set('Europe/Paris');
        /* time() : shows current time, in seconds
            --- seconds * minutes * hours * days
            --- adding seconds for a week to know $nextWeek
            date() : shows current date
            --- default format : Y-m-d
            --- add nextWeek, to print date +7 days
        */
        $nextWeek = time() + (7 * 24 * 60 * 60);
        echo 'Now :       ' . date('d-m-Y') . "<br/>";
        echo 'Next Week : ' . date('d-m-Y', $nextWeek) . "<br/>";

        echo " =================== </br>";

            /**========================================
             *              ANCHOR OOP Code2
             *========================================**/
    /*
        //* in an OOP : 
            --- we can do the same using (new).
        //* new : 
            --- is the act of taking the template and stamping a new cookie
        //* DateTime():
            --- it is a class
            --- I'll be using it here to make a new object
            --- using DateTime template
            --- referencing both data : date() and time()
            --- getting the object back in the variable $now
    */
        // creating a new object using (new)
        $now = new DateTime(); 
        // can ask for a new object while giving parameters ($para in php doc)
        $nextWeek = new DateTime('today + 1 week');
        /* asking the variable to format itself
            //* format() method :
                --- is inside the DateTime class
            //* the arrow ->
                an operator, indicates : 
                --- here is an object : $now
                --- call the method name ( format() ) within that object
                --- may also call for the attribute within if there's data
        */
        echo 'Object - Now    : ' . $now->format('d-m-Y') . "<br/>";
        // I don't have to pass in the actual object $nextWeek as code1
        // object is implicit (it is within the object)
        echo 'Object - Next Week   : ' . $nextWeek->format('d-m-Y') . "<br/>";

?>