//*ese igual le dice que si viene sin valor, use el que le damos
const sumar = (a, b = 1) => a + b;

console.log(sumar(5, 16));
console.log(sumar(5)); //sin param por defecto, NaN

//*el por defecto lo usa solo si no trae param en la ejecucion! sino se asigna el valor que le demos