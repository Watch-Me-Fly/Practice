<?php
    /*
        Special methods : constructor and destructor
        ---------------------
        SECTION : constructor
        ---------------------
        ** is there to get data into the right state.
        ** get us started.
        ** primary instance variables 
        ** can have hidden variables
        
        ---------------------
        SECTION : Destructor
        ---------------------
    */

    /**--------------------------------------------
     *               ANCHOR .?
     *---------------------------------------------**/
    class PartyAnimal 
    {
        // __construct() is a special method : to create a new instance
        function __construct() 
        {
            // means construct when we create a new instance
            echo "constructed<br/>";
        }
        function something()
        {
            echo "something<br/>";
        }
        // __destruct() is a special method : to destroy an instance when code finishes
        function __destruct()
        {
            echo "destructed<br/>";
        }
    }

    echo "--one <br/>";         //separator
    $x = new PartyAnimal();     //* constructs, 
    echo "--two <br/>";         //separator
    $y = new PartyAnimal();     //* 
    echo "--three <br/>";       //separator
    $x->something();            //* calls only the mentioned function
    echo "--the end? <br/>";    //separator

    // at the end, variables will get destroyed since it's at the end of the program.
    /* 
        Because at the end of a request response cycle, when this file is all done, then it's going to garbage collect and get rid of all these things.
        And so it's going to call our destructor.
    */
    /**--------------------------------------------
     *               ANCHOR .?
     *---------------------------------------------**/
    /*
    	Setting a variable in rhe constructor that is going to change the behavior of the application.
        TODO : 
            1. pass a constructor parameter in
            2. 
    */
    class Hello {
        protected $lang; //(only accessible inside the class)

        function __construct($lang)
        {
            $this->lang = $lang;
        }
        function greet()
        {
            if ( $this->lang == 'fr' )
            {
                return 'Bonjour';
            }
            elseif ( $this->lang == 'en' )
            {
                return 'Hello'; //if none of the above
            }
        }
    }
    $hi= new Hello('en');
    // constructor will run the variable ('en' as $lang) in through the instances
    // after the constructor is done, this assignement ($hi) finishes, and $hi now points to the object that's been constructed from the template.
    // this only constructs an object, a new instance of the class.

    // here is where we call for a function in the class
    echo $hi->greet()."<br/>";
    // find the greet() code within $hi, and run it through.
    
?>