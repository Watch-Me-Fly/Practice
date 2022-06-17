<?php
    
    /**========================================================
     * TODO : 1. Écrivez une classe représentant une ville.
     * 
     * Elle doit avoir : 
            --- les propriétés nom et département 
            --- et une méthode affichant « la ville X est dans le 
            département Y ». 
     *=========================================================**/
        class Ville {
            public $nom;
            public $departement;

            function afficheOu():string
			{
				return "La ville de $this->nom 
                      est dans le département : $this->departement 
                      <br/>";
			}
		}

     /**========================================================
     * TODO : 2. Créez des objets ville
     * 
     * affectez leurs propriétés, 
     * et utilisez la méthode d’affichage.
     *=========================================================**/
		$nantes = new Ville();
        $nantes->nom = "Nantes";
        $nantes->departement = "Loire Atlantique";
		echo $nantes->afficheOu();

		$lyon = new Ville();
        $lyon->nom = "Lyon";
        $lyon->departement = "Rhône";
		echo $lyon->afficheOu();
		
    /**============================================
     ** Résultat attendu :

     * --- La ville de Nantes est dans le département : Loire Atlantique
     * --- La ville de Lyon est dans le département : Rhône
     *=============================================**/


?>