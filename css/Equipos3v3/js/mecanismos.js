let ultimoEquipo1 = [];
let ultimoEquipo2 = []; //Eta variables van a guardarse al principio

// compara dos arrays para ve si son iguales, si lo son bobo si no continua
function arraysSonIguales(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  return arr1.every((valor, index) => valor === arr2[index]);
}

function embarajarEquipos() {

    event.preventDefault();
    let entradaValores = document.getElementById('valores').value;
    let nombresOriginales = entradaValores.split(',').map(valor => valor.trim());
    if (nombresOriginales.length > 6) {
  alert('Azaroso, eta vaina e pa 3v3');
  return;
}
    let salidaDeEquipo1 = document.getElementById('equipouno');
    let salidaDeEquipo2 = document.getElementById('equipodos');


    let equipo_1 = [];
    let equipo_2 = [];

    // Repetir mientras los equipos nuevos sean iguales a los anteriores
    do {
        let nombres = [...nombresOriginales]; // Copia del array original
        
        equipo_1 = [];

        while (equipo_1.length < 3 && nombres.length > 0) {
            let indice = Math.floor(Math.random() * nombres.length); //eta vaina busca un numero aleatorio entre el tamaño del array (creo)
            equipo_1.push(nombres.splice(indice, 1)[0]);
        }

        equipo_2 = nombres;

    } while (
        arraysSonIguales(equipo_1, ultimoEquipo1) &&
        arraysSonIguales(equipo_2, ultimoEquipo2)
    );

    console.log('Equipo 1:' + equipo_1);
    console.log('Equipo 2:' + equipo_2); //Realmente esto solo lo muestra en consola, es innecesario.... lo voy a dejar por mi 2 grano ahi

    ultimoEquipo1 = [...equipo_1];
    ultimoEquipo2 = [...equipo_2];

    // Estas son las animaciones de salida
    salidaDeEquipo1.classList.add('animar-salida');
    salidaDeEquipo2.classList.add('animar-salida');

    // Pasa la animacion de salida y luego espero para meter los elementos, el orden es muy importante en js
    setTimeout(() => {
        salidaDeEquipo1.innerHTML = '';
        salidaDeEquipo2.innerHTML = '';

        let mostrarEquipo1  = document.createElement('div');
        mostrarEquipo2  = document.createElement('div');

        mostrarEquipo1.innerHTML = equipo_1.map(nombre => `<p>${nombre}</p>`).join('');
        mostrarEquipo2.innerHTML = equipo_2.map(nombre => `<p>${nombre}</p>`).join('');

        salidaDeEquipo1.appendChild(mostrarEquipo1);
        salidaDeEquipo2.appendChild(mostrarEquipo2);

        salidaDeEquipo1.classList.remove('animar-salida');
        salidaDeEquipo2.classList.remove('animar-salida');

        salidaDeEquipo1.classList.add('animar-entrada');
        salidaDeEquipo2.classList.add('animar-entrada');

        setTimeout(() => {
            salidaDeEquipo1.classList.remove('animar-entrada');
            salidaDeEquipo2.classList.remove('animar-entrada');
        }, 500); // esto debe coincidir con duración de animación CSS

    }, 500); // esto debe coincidir con duración de animación de salida
}


