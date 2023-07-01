// Instrucciones

// 2. Crear un array de números y asignarle un total de diez (10) valores numéricos.
// 3. Crear variables que contengan los valores numéricos dispuestos en el array en la
// posición (0, 2 y 4) y con el resto de los valores numéricos crear un nuevo array.
// 4. Crear un objeto literal para almacenar los datos de nuestra mascota, considerando
// los atributos:
// a. nombre
// b. tipo de mascota (Perro - Gato)
// c. color
// d. raza
// Haciendo uso de la desestructuración, crea una variable por cada una de las
// claves del objeto literal y al final mostrar al usuario:

let arrayDeNumeros = [0,1,2,3,4,5,6,7,8,9];

let [num0,,num2,,num4,...resto] = arrayDeNumeros;

let mascota = {
    nombre: "Luna",
    tipo: "Gata",
    color: "Negro",
    raza: "Mestizo"
};
let {nombre,tipo,color,raza} = mascota;

// console.log(
//     `Hola les presento a mi mascota, su nombre es: ${nombre}, es una hermosa ${tipo}, de color: ${color} y su raza es: ${raza}.`
// );
// console.log(num0,num2,num4,resto);