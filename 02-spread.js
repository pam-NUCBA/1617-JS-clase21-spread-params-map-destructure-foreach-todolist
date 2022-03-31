//*spread: nos sirve para casos opuestos. Necesitamos acceder a cada uno de los valores de un array. Un ejemplo son las funciones Math, que necesitan que los argumentos sean numbers, no un array

console.log(Math.max(5, 16, 12, 247, 8));

const numArr = [1, 16, 2, 88];
console.log(Math.max(numArr)); //not a number! no puede entrar directo al array

//*solución con spread!
console.log(Math.max(...numArr)); //spread básicamente nos abre el array

const arr1 = [16, true, "tabla"];
const arr2 = ["de planchar", 42, false];

//clonar
const arr3 = [...arr1];
console.log(arr3);

//unir:
const arr4 = [...arr1, ...arr2];
console.log(arr4);

//podemos hacer como si fuera un splice para agregar cosas:
const arr5 = [0, 1, ...arr1, false, ...arr2]; //nos lo aplana
const arr6 = [0, 1, arr1, false, arr2]; //nos trae arrays dentro de arrays
console.log(arr5);
console.log(arr6);