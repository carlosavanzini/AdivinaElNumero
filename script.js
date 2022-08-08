//asignamos a la variable numero un numero randon 
let numeroRandom = Math.round(Math.random()*100);

//declaro varible e inicializo para un contador de veces
let intentos = 0;
//declaro varible
let numeroUsuario;

// codigo
do {
    numeroUsuario = parseInt(prompt("¿Por favor ingrese un numero entre 1 y 100?"));
    // le primero if valida si es numero
    if (isNaN(numeroUsuario) && numeroUsuario !== null && numeroUsuario !== "" ){
        alert('Lo que ingresaste no es un numero, por favor recorda que son numeros del 1 al 100')
    }
    else if (numeroUsuario === numeroRandom) {
        alert(`Ganaste Felicidades!!!! el numero random elegido por la maquina era el ${numeroUsuario}`)
    } else {
        if (numeroUsuario < numeroRandom) {
            alert("Es mayor")
        } else {
            alert("Es Menor")
        }
    }
    intentos++;
} while (numeroUsuario != numeroRandom);

console.log(`La cantidad de veces que tuviste que ingresar  un numero para acertar fueron ${intentos} veces`);
alert(`La cantidad de veces que tuviste que ingresar  un numero para acertar fueron ${intentos} veces`);