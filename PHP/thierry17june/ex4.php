<?php
    
    /**==================================================================
     * TODO : 1. Créez une classe abstraite représentant une personne.
     * 
     * Elle doit avoir : 
            --- les propriétés nom, prénom
            --- un constructeur
     *===================================================================**/
        class Personne 
        {
            public $nom;
            public $prenom;

    /**----------------- TODO : un constructeur ----------------- */
            function __construct( $nom, $prenom )
            {
                $this->nom = $nom;
                $this->prenom = $prenom;
            }
            function getNom() { 
                return $this->nom;
            }
            function getPrenom() {
                return $this->prenom; 
            }
        }
    /**==================================================================
     * TODO : 2. Créez une classe client dérivée de la classe personne
     * 
     * en y ajoutant :
       --- la propriété adresse
       --- méthode getcoord()
     *===================================================================**/
        class Client extends Personne 
        {
            public $adress;

            function __construct( $nom, $prenom, $adress )
            {
                $this->nom = $nom;
                $this->prenom = $prenom;
                $this->adress = $adress;
            }
            function getAdress()
            {
                return $this->adress;
            }

    /**-------------- TODO : méthode getcoord() -------------- */
        // affiche les coordonnées complètes (nom, prénom et adresse)
            function getCoords()
            {
                return "<div class=\"textClass\"> 
                        First Name : $this->prenom , <br/>
                        Last Name : $this->nom ,<br/>
                        Adress : $this->adress <br/>
                        </div>";
            }
        }

    /**==================================================================
     * TODO : 2. Créez une classe électeur dérivée de la même classe abstraite
     * 
     * en y ajoutant 
       --- les propriétés : bureau_de_vote & vote (un booléen)
       --- une méthode avoter()
     *===================================================================**/
        class Electeur extends Personne
        {
            public $bureau_de_vote;
            public $vote;

            function __construct($nom, $prenom, $adress, $bureau_de_vote, $vote)
            {
                $this->nom = $nom;
                $this->prenom = $prenom;
                $this->adress = $adress;
                $this->bureau_de_vote = $bureau_de_vote;
                $this->vote = $vote;
            }
            function getBureau()
            {
                return $this->bureau_de_vote;
            }
            function voter()
            {
                return $this->vote;
            }

    /**-------------- TODO : méthode avoter() -------------- */
        // enregistre si une personne a voté dans la propriété vote
            public function avoter()
            {
                if ($this->vote == true)
                {
                    return "<div class=\"textClass\"> 
                            Mr / Mme $this->prenom $this->nom a voté dans 
                            le bureau de vote de: $this->bureau_de_vote
                            </div>";
                }
                else
                {
                    return "<div class=\"red\"> 
                            Mr / Mme $this->prenom $this->nom n'a pas 
                            encore voté
                            </div>";
                }
            }
        }  
        
    /**==================================================================
     * TODO : 2. Créez différentes personnes
     * 
     * affichez le résultat 
     * faites voter ceux qui le peuvent
     *===================================================================**/
    $camille = new Client( "Camille ", "Lavigne ", "Paris, France");
        echo $camille->getNom();
        echo $camille->getPrenom() . "<br />";
        echo $camille->getAdress() . "<br /><br />";
        echo $camille->getCoords() . "<br />";

    echo "<pre>";
    print_r($camille);
    echo "</pre>";

        /* ----------------------------------- */

    $camille = new Electeur("Camille ", "Lavigne ", "Paris, France", "1er arr", True);
        echo $camille->avoter() . "<br />";

    echo "<pre>";
    print_r($camille);
    echo "</pre>";

    $antoine = new Electeur("Antoine ", "Monet ", "Lille, France", False, False);
        echo $antoine->avoter() . "<br />";

    echo "<pre>";
    print_r($antoine);
    echo "</pre>";

    // comment connecter 3 class ?? 
?>

<head>
    <style>
        * {
            width: 80%;
            margin: auto;
        }
        body {
            padding: 20px;
        }
        .textClass, .red {
            color: white;
            padding: 5px;
        }
        .textClass {
            background-color: #4CACBC;
        }
        .red {
            background-color: #FF7396;
        }
    </style>
</head>