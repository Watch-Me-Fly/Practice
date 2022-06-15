<?php

    // Object inheritance in PHP

    /**==============================================
     * *                   INFO
     *   it is a notion used as to we do not repeat ourselves
     *   'another form of store and reuse'
     *   kind of like a function, written once, reused many times
     *   //* the new "child" class, has all capabilities of "parent" class 
     *  also called "subclass".
     * use the word "extends"
     *=============================================**/

    class Hello {
        protected $lang;
        function __construct($lang) {
            $this->lang = $lang;
        }
        function greet() {
            if ( $this->lang == 'fr' )
            {
                return 'Bonjour';
            }
            elseif ( $this->lang == 'es' )
            {
                return 'Hola'; 
            }
            return 'Hello';
        }
    }
    class Social extends Hello {
        
        // extends hello, means take all what is inside hello class and pull it all in (so social does not start as an empty class)

        function bye() {
            if ( $this->lang == 'fr' )
            {
                return 'Au revoir';
            }
            else if ( $this->lang == 'es' )
            {
                return 'Adios';
            }
            return 'goodbye';
        }
    }

    $hi = new Social('es'); // will call the constructor because it is also included in social
    echo $hi->greet()."<br/>";
    echo $hi->bye()."<br/>";

    /*===================SECTION Visibility====================*/
    // part of the idea of class is to hide the complexity from the outside world
    /*
        class has : data + methods.
        ** being able to access both is because they are marked "public"
            * public : inside the class, outside the class, and derived classes
            * protected : inside the class and derived classes.
            * private : inside the class (not visible in derived classes)
    */
    class MyClass
    {
        public $pub = 'public';
        protected $pro = 'protected';
        private $priv = 'private';

        function printHello() //functions are global 
        {
            echo $this->pub."<br/>";
            echo $this->pro."<br/>";
            echo $this->priv."<br/>";
        }
    }

    $obj = new MyClass();
    echo $obj->pub."<br/>";
    /* echo $obj->pro."<br/>"; // fatal error   */
    /* echo $obj->priv."<br/>"; // fatal error   */
    $obj->printHello();
    
    /*======= DIVISION =======*/
    class MyClass2 extends MyClass
    {
        function printHello()
        {
            echo $this->pub."<br/>";
            echo $this->pro."<br/>";
            /* echo $this->priv."<br/>"; //undefined */
        }
    }

    echo "------MyClass2-----<br/>";
    $obj2 = new MyClass2(); 
    echo $obj2->pub."<br/>"; //shows public
    $obj2->printHello(); //shows public and protected 


    /*----------------------SECTION----------------------------*/
    // classes and objects may be created with another keyword than class 
    //* stdClass() : template for a class but is empty
    // --- creates an empty class.

    $player = new stdClass();

    // here : i am telling to create variables name and score and assign variables to them
    $player->name = "chuck"; 
    $player->score = 0;

    $player->score++;

    print_r($player);
    // better create classes as such :
    class Player
    {
        public $name = "Sally";
        public $score = 0;
    }

    $p2 = new Player();
    $p2->score++;

    print_r($p2);
?>