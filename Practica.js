//Ejercicio 1
function saludo() {
    console.log('Hola mundo');
    return;
}
//Ejercicio 2
function saludo1(nombre) {
    console.log(`Hola ${nombre}`);
    return;   
}
saludo1('juan');
//Ejercicio 3
function doble(numero4){
    multiplicador = numero4 * 2;
    console.log(multiplicador);
}
doble(10);

//Ejercicio 4
function promedio (numero1, numero2, numero3) {
    sumavalores = numero1 + numero2 + numero3;
    calculoPromedio = sumavalores/3;
    console.log(calculoPromedio);
    return;
}
promedio(8,8,8);
//ejercicio 5
function mayor(valor1, valor2) {
    if (valor1 > valor2) {
        console.log(valor1);
    }
    else {
        console.log(valor2);
    }
    return;
}
mayor(7,58);
//ejercicio 6
function multiplo(numero5){
    multiplicador1 = numero5 * numero5;
    console.log(multiplicador1);
}
multiplo(10);