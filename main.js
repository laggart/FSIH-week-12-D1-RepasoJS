// Bucle del 20 al 5

for (let i = 20; i >= 5; i--) {
    console.log(i);
  };

// bucle de cuadrados del 3 al 33

for (let i = 3; i <= 33; i++) {
    const cuadrado = i * i;
    console.log(`El cuadrado de ${i} es = a ${cuadrado}`)};

//Función del tiempo

/* function elTiempo (diaSemana, clima) {
    console.log(`El ${diaSemana} hará ${clima}`)
}

const diaSemana = prompt('Dime un día de la semana');
const clima = prompt('estado del tiempo');

elTiempo(diaSemana, clima); */

//Recetas

const recetas = [ 
    {nombre: 'cocotxas al pil pil' , origen: 'País Vasco'},
    {nombre: 'Calçots' , origen: 'Cataluña'},
    {nombre: 'Paella' , origen: 'Valencia'},
    {nombre: 'Cachopo' , origen: 'Asturias'},
    {nombre: 'Zamburiñas' , origen: 'Galicia'}
]

recetas.forEach(function(receta) {
    console.log(receta.nombre)
    document.write(`<p>${receta.nombre} y son de ${receta.origen}</p>`);
});

//Lenguajes de programación según HackABoss

const lenguajes = [
'JavaScript/TypeScript',
'Python',
'Java',
'C#',
'PHP',
'C/C++',
'Ruby',
'Go',
'SQL'
]

let orderNumber;
let elControldeDavid = true

while (elControldeDavid) {
    orderNumber = parseInt(prompt('Introduce el número del top 9 de lenguajes mas demandados (escribe 0 para salir)'));

    if (orderNumber === 0) {
        elControldeDavid = false;
    }

    else if (orderNumber >=1 && orderNumber <= lenguajes.length) {
        const lenguaje = lenguajes[orderNumber - 1];
        console.log(lenguaje)
        alert(lenguaje)
        document.write(`<p>${lenguaje}</p>`);
    } else {
        console.log('Número Inválido, favor introducir uno válido')
        alert('Número Inválido, favor introducir uno válido')
    }
}

// Santa y sus regalos

let stockInicial = 150;

let regalosEntregados = 0;

while (stockInicial > 0) {
    let entregadosAcc = parseInt(prompt('Papa Noel pregunta: ¿cuantos regalos has repartido hoy?'))

}
