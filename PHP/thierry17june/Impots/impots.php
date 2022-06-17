<?php
    /**========================================================
     * TODO : 2. Afficher le résultat 
     * 
     * Une fois le formulaire envoyé grâce au bouton OK, 
     * une phrase s’affiche du style :
            --- « Mr Durant votre impôt est de 600 euros ».

     ** Le but du formulaire :
            * est de permettre le calcul de l’impôt pour une personne.
            * Le taux de l’impôt est:
                ● 15% pour des revenus inférieurs à 15 000 euros
                ● 20 % pour des revenus supérieurs à 15 000.
     *=========================================================**/

    /**========================================================
     * TODO : 3. Créer une classe
     *  
     * Le programme doit obligatoirement contenir une classe Impot 
     * dans un fichier impot.php avec
            ● un constructeur,
            ● une méthode AfficheImpot()
            ● une méthode CalculImpôt()
     *=========================================================**/
        class Impots 
        {

            public $montantRevenu;
            
            public function __construct($pMontantRevenu)
            {
                $this->pMontantRevenu = $pMontantRevenu;
            }
    /**-------------- TODO : méthode AfficheImpot() -------------- */
        //retourne une chaîne contenant le message à afficher 
            public function AfficheImpots ():String
            {
                return "Mr Durant votre impôt est de $this->calculImpot() euros";
            }
    /**--------------- TODO : méthode CalculImpôt() -------------- */
        // retourne le montant de l’impôt suivant le revenu.
            public function calculImpot():float
            {
                if ($this->montantRevenu<1500)
                {
                    $taux = 0.15;
                }
                else
                {
                    $taux = 0.2;
                }
                return $this->montantRevenu * $taux;
            }
        }

    /**============================================
     ** Attendu :

     * Les taux de l’impôt (20% et 15%) devront être définis 
        dans des constantes.
     * La création de l’objet et l’appel des méthodes doivent être 
        réalisés dans un fichier resultatImpot.php.
     *=============================================**/



?>