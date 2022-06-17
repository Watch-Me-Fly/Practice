<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        .form-group {
            margin-top: 10px;
        }
        label {
            width: 30%;
        }
        input {
            width: 65%;
        }

    </style>
    <title>Document</title>
</head>

<body>
    <main>
        <form>
            <div class="form-group">
                <label for="name">Nom</label>
                <input type="text" name="name" id="name" />
            </div>
            <div class="form-group">
                <label for="revenue">Revenue</label>
                <input type="text" name="revenue" id="revenue" />
            </div>
            <div class="form-group">
                <input type="submit" name="submit" value="Submit" />
            </div>
            <php?
            /**========================================================
            * TODO : 1. Créer un formulaire
            * 
            * utiliser PHP comme un langage de programmation objet.
            * créer un formulaire contenant : 
                    --- une zone de saisie pour le nom, 
                    --- le revenu
                    --- et un bouton OK pour soumettre le formulaire. 
            *=========================================================**/
                require_once('impots.php');
            ?>
        </form>
    </main>

</body>

</html>