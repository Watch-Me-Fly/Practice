<?php

    /** ANCHOR operators :
        //*  accessing "static item" in a (class) :
            -- (::)
            -- there is no $this.
            -- it is a constant (const) with values, statically defined within the class
                => e.g. : DateTime() :
                    * RFC822 is a date format
                    * in original documentation :
                        *-- const string RFC822 = "D, d M y H:i:s 0";
            -- There are special methods inside the class (__construct) for example
                * NOTE construction of an object is the generic OO notion of the template
                * __constructor is related to the word 'new' to indicate a new instance of object.
            -- (::) applies as well to public "static" methods (means go to the class and call the method)
                * example : $op = DateTime::getLastErrors();
            
        //* accessing "dynamic item" in an (object) :
            -- (->)
            -- search inside "this"
            -- accessing public mmethods without the word 'static'
     */

     echo DateTime::RFC822."<br/>";
     echo $z->format('d-m-Y')."<br/>";

?>