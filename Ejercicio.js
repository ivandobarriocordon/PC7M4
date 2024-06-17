// Cree una función JS que acepte 4 argumentos. Suma los dos primeros argumentos, 
// luego los dos segundos y multiplícalos. Si el número creado es mayor que 50, la consola registra 
// "¡El número es mayor que 50!". Si es más pequeño, la consola registra "¡El número es menor que 50!"

function sumAndMultiply(num1, num2, num3, num4) {
    let sum1 = num1 + num2;
    let sum2 = num3 + num4;
    let product = sum1 * sum2;

    if (product > 50) {
        console.log("¡El número es mayor que 50!");
    } else {
        console.log("¡El número es menor que 50!");
    }
}