//*https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const nums = [16, 2, 4, 22];

const multi = nums.map((num) => num * 3); //asignó cada valor a num y recorrió y multiplicó

console.log(multi); //multi es un nuevo array
console.log(nums); //nums sigue intacto