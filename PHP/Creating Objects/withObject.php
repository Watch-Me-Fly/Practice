<?php

    /**============================================
                SECTION Using Classes
     *=============================================**/
    /*
        -- by making a template.
        -- classes resemble functions
            --**-- the class code doesn't run, but it is parsed
            --**-- $this (is a predefined constant that I can only use inside of a method "i.e. function" that is inside of class)
    */
    class Person {
        public $fullname = false;
        public $givenName = false;
        public $familyName = false;
        public $room = false;
        function get_name() { 

            if ( $this->fullname !== false )
            {
                return $this->fullname;
            }
            if ( $this->familyName !== false && 
                 $this->givenName !== false )
            {
                return $this->givenName . ' ' .$this->familyName;
            }
            return false;
        }
    }

    // adding people
    /**======================
     *    ANCHOR OBJECT 1
     *=====================**/
    $chuck = new Person();
    // -> arrow operator : to search fullname inside Person()
    $chuck->fullname = "Chuck Severence";
    $chuck->room = "4429";

    /**======================
     *    ANCHOR OBJECT 2
     *=====================**/
    $colleen  = new Person();
    $colleen->familyName = "Van Lent";
    $colleen->givenName = "Colleen";
    $colleen->room = '3439';

    print $chuck->get_name() . "<br/>";
    print $colleen->get_name() . "<br/>";
?>