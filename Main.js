//obtener elemento del DOM
const passwordDisplay = document.getElementById('passwordDisplay');

//caracteres disponibles para la contraseña
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_-+=<>?/{}[]';

// Función para generar la contraseña
function generatePassword(){
    //longitud de la contraseña y variable para almacenarla
    const length  = 12;
    let password= '';

    //seleccionar caracteres aleatorios de cada grupo
    for (let i = 0; i < length; i++) {
        const charGroup = i % 4 === 0 ? uppercaseChars : 
                        i % 4 === 1 ? lowercaseChars : 
                        i % 4 === 2 ? numberChars : symbolChars;

        const randomIndex = Math.floor(Math.random() * charGroup.length);
        password += charGroup.charAt(randomIndex);
    }

    // Mostrar la contraseña generada
    passwordDisplay.textContent = password;
}