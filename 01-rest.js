//*https://es.javascript.info/rest-parameters-spread

//*rest y spread se escriben igual

//a veces no sabemos el largo del array
const suma = (a, b, c) => {
    let total = 0;
    return (total = a + b + c);
};

//* todo bien mientras sepamos que van a venir esa cantida de parametros. El problema es si vienen de más o de menos
console.log(suma(1, 2)); //NaN
console.log(suma(1, 2, 3, 4)); //no nos toma el último

//*podemos usar un rest para que sume lo que venga:

//en suma pasábamos "anys". Acá pasamos un ARRAY de "anys"
const suma2 = (...nums) => {
    let total = 0;
    for (let n of nums) {
        total *= n;
    }
    console.log(total);
};

//*ahora la cantidad de parametros es ignorada previamente
suma2(1, 2, 5, 8, 10);
suma2(1, 2, 10);
suma2(1);