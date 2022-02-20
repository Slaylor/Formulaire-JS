/**
 * FONCTIONS DE VÉRIFICATIONS D'UN FORMULAIRE
 */

/**
 * Vérifie que la donnée reçue ne soit pas vide
 */
let notEmpty = function(value) {

    // Si la longueur de la châine est à zéro, c'est que celle-ci
    // est vide
    if (value.length === 0) {
        return false;
    }

    return true;

    // return value.length === 0;
}


/**
 * Vérifie que la donnée contient un certains nombre de caractères
 */
let isLength = function(value, min) {
    // Si la chaîne fait 5 caractères ou plus, on retourne "true"
    return value.length >= Number(min);
}


/**
 * Vérifie que la donnée soit une adresse email valide
 */
let isEmail = function(value) {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,10}$/;
    return pattern.test(value);
}


/**
 * Vérifie que les données reçues soient similaires
 */
let isEqual = function(value, confirmValue) {
    return value === confirmValue;
}


/**
 * Permet d'afficher ou non, les erreurs formulaire
 */
let viewError = function(message, input, response) {

    let errorMessage = document.querySelector(message);
    input.style.border = '2px solid red';
    errorMessage.style.display = 'block';

    // Avec un if ternaire
    // input.style.border = response ? '2px solid green' : '2px solid red';
    // errorMessage.display = response ? 'none' : 'block';

    if (response) {
        input.style.border = '2px solid green';
        errorMessage.style.display = 'none';
    }
}


/**
 * Permet d'afficher ou non le mot de passe dans un champ formulaire
 */
let showHidePassword = function(element) {
    let input = element.previousElementSibling;
    // console.log(input);

    // Si "input.type" est strictement égal à "password", alors applique la valeur "text",
    // sinon, on applique la valeur "password"
    input.type = (input.type === 'password') ? 'text' : 'password';
}


/**
 * Permet de générer un mot de passe aléatoire
 */
let generatePassword = function(min = 12) {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@&-_!$#+*';
    let password = '';

    for(let index = 0; index < min; index++) {
        password += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    return password;
}