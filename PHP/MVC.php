<?php
/**============================================
 *    SECTION MVC : Model-View-Controller
 *=============================================**/

 /** //? What is MVC :
  * It breaks the request-response cycle into 3 basic operators :
        --- Model : handles data.
            * we may update the model
            * the model is the permanent storage
        --- View : produces output.
            * the last things that I see (after model and controller)
        --- Controller : orchestration / routing.
            * decides when to do things / when to switch from one screen to another.

  * MVC is a model that defines the elements of a web application and how they interact
  * MVC is interpreted differently with different frameworks.
  */
  
/** NOTE : one way to interpret MVC ((easy way, short, single page))
 * dividing code into 2 parts : 
        --- model part "on top" :
            * (the silent part because there are no outputs)
            * validation also goes in here.
        --- view part "on bottom" :
            * (it produces the output)
            * there are some rules about what not to do in view part.
            * e.g : not talking to the database here.
        //* so, php on top is model part, html on bottom is view
        //* the whole thing is a controller
            * it makes all these decisions
            * decides also when to switch to other files
 */

?> 