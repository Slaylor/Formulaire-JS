/**
 * VÉRIFICATION D'UN FORMULAIRE
 */



/**
 * VÉRIFICATION DU NOM
 */

// Sélectionne le champ texte du nom
let lastname = document.querySelector('#lastname');

// Applique un écouteur d'évènement sur les changements effectués dans le champ
// https://developer.mozilla.org/fr/docs/Web/API/HTMLElement/input_event
lastname.addEventListener('input', function() {
    
    let response = notEmpty(this.value);

    /**
     * Argument 1 : ID de l'élément DOM contenant le message d'erreur
     * Argument 2 : l'élément déclencheur de l'évènement
     * Argument 3 : la réponse de la vérification du champ
     */
    viewError('#lastnameError', this, response);
});


/**
 * VÉRIFICATION DU PRÉNOM
 */

// Sélectionne le champ texte du prénom
let firstname = document.querySelector('#firstname');

// Applique un écouteur d'évènement sur les changements effectués dans le champ
// https://developer.mozilla.org/fr/docs/Web/API/HTMLElement/input_event
firstname.addEventListener('input', function() {
    let response = notEmpty(this.value);
    viewError('#firstnameError', this, response);
});


/**
 * VÉRIFICATION DU PSEUDO
 */

// Sélectionne le champ texte du prénom
let pseudo = document.querySelector('#pseudo');
pseudo.addEventListener('input', function() {
    // Vérfifie la longueur d'une chaîne
    let response = isLength(this.value, 5);
    viewError('#pseudoError', this, response);
});


/**
 * VÉRIFICATION DE L'ADRESSE EMAIL
 */
let email = document.querySelector('#email');
email.addEventListener('input', function() {
    let response = isEmail(this.value);
    viewError('#emailError', this, response);
});


/**
 * VÉRIFICATION DU MOT DE PASSE
 */

// Sélectionne le champ texte du prénom
let password = document.querySelector('#password');
password.addEventListener('input', function() {

    // Vérifie la longueur d'une chaîne
    let response = isLength(this.value, 6);
    viewError('#passwordError', this, response);
});


/**
 * VÉRIFICATION DE LA CONFIRMATION DU MOT DE PASSE
 */
let confirmPassword = document.querySelector('#confirmPassword');
confirmPassword.addEventListener('input', function() {

    // Récupération du mot de passe
    let password = document.querySelector('#password');
    let response = isEqual(password.value, this.value);
    
    viewError('#confirmPasswordError', this, response);
});


/**
 * AFFICHER/CACHER MOT DE PASSE
 */

// Sélectionne tous les éléments contenant la classe CSS "view-pwd"
let eyes = document.querySelectorAll('.view-pwd');

// Boucle permettant de lire le contenu du tableau "eyes"
for(let element of eyes) {
    // Applique un écouteur d'évènement sur chacun élément individuellement
    element.addEventListener('click', function() {
        showHidePassword(this);
    })
}


/**
 * PERMET DE GÉNÉRER UN MOT DE PASSE ALÉATOIRE
 */
let link = document.querySelector('#generatePwd');
link.addEventListener('click', function() {
    let passwordGenerate = generatePassword();
    //console.log(passwordGenerate);
    let inputPwd = document.querySelector('#password');
    inputPwd.value = passwordGenerate;
});