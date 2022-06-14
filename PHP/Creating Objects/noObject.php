<?php
    /**============================================
     *               SECTION non-Object
     *=============================================**/
    /*
        -- by making an array,
        -- and giving a little support routine (function)
    */
    $chuck = array(
        "fullname" => "chuck severance",
        'room' => '4429'
    );
    $colleen = array(
        "familyname" => "van Lent",
        'givenname' => 'colleen',
        'room' => '3439'
    );
    // a function that can handle both the family and fullname
    function get_person_name($person)
    {   
        if ( isset($person['fullname']) )
        {
            return $person['fullname'];
        }
        if ( isset($person['familyname']) && isset($person['givenname']) )
        {
            return $person['familyname'] . ' ' . $person['givenname'];
        }
        return false;
    }
    print get_person_name($chuck);
    echo "<br/>";
    print get_person_name($colleen);
    
?>