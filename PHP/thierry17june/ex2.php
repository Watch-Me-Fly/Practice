<?php
    
    /**========================================================
     * TODO : 1. Modifiez la classe précédente.
     * 
     * en la dotant d’un constructeur
     *=========================================================**/

        class Ville {
            public $nom;
            public $departement;

            function __construct($nom, $departement)
            {
                $this->nom = $nom;
                $this->departement = $departement;
            }

            function afficheOu():String
            {
                return "La ville de $this->nom 
                        est dans le département : $this->departement 
                        <br/>";
            }
        }

    /**===================================================================
     * TODO : Réalisez les mêmes opérations de création d’objets et d’affichage
     *====================================================================**/

        $nantes = new Ville('Nantes', 'Loire Atlantique');
        echo $nantes->afficheOu();
        $lyon = new Ville('Lyon', 'Rhône');
        echo $lyon->afficheOu();

    /**============================================
     ** Résultat attendu :

     * --- La ville de Nantes est dans le département : Loire Atlantique
     * --- La ville de Lyon est dans le département : Rhône
     *=============================================**/
?>