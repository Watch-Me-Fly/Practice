<?php
    
    /**========================================================
     * TODO : 1. Créez une classe représentant une personne.
     * 
     * Elle doit avoir : 
            --- les propriétés nom, prénom et adresse 
     *=========================================================**/
        class Personne
        {
            public $nom;
            public $prenom;
            public $adresse;

    /**----------------- TODO : un constructeur ----------------- */
            public function __construct($pNom, $pPrenom, $pAdresse)
            {
                $this->nom = $pNom;
                $this->prenom = $pPrenom;
                $this->adresse = $pAdresse;
            }
            public function __toString()
            {
                return "$this->prenom $this->nom
                        habite à : $this->adresse";
            }

    /**-------------- TODO : méthode getPersonne() -------------- */
        // doit retourner les coordonnées complètes de la personne
            public function getNom()
            {
                return $this->nom;
            }
            public function getPrenom()
            {
                return $this->prenom;
            }
            public function getAdresse()
            {
                return $this->adresse;
            }

    /**--------------- TODO : méthode setAdresse() --------------- */
        // doit permettre de modifier l’adresse de la personne.
            public function setAdresse($pAdresse)
            {
                // verification or calculations before update
                if (strlen($pAdresse) >10)
                {
                    $this->adresse = $pAdresse;
                }
            }
        }
        
    /**========================================================
     * TODO : 2. Créez des objets personne
     * 
     * utilisez l’ensemble des méthodes.
     *=========================================================**/
        $personne = new Personne("ALHAYAN", "Saja", "France");
        echo $personne . "<br/>";
        $personne->adresse = "City, France";
        echo $personne . "<br/>";
        $personne->setAdresse("Rue");
        echo $personne . "<br/>";

?>