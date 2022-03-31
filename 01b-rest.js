//* el otro uso de rest, es justamente agarrar el resto:

const hotel = (habitaciones, piletas, ...rest) => {
    console.log(`Este hotel cuenta con ${habitaciones} habitaciones, ${piletas} piletas climatizadas, y además ${rest}.`)
    console.log(rest.length) //pista para la tarea
}

//la cantidad de datos después de los dos primeros podría ser eterna! o no existir
hotel(40, 3, "otras comodidades", "baños privados", "buffet libre")

//*tarea: que no muestre el "y además" si rest está vacío