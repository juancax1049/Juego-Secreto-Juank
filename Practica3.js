/* 1  Crea una lista vacía llamada "listaGenerica".
2 Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
3 Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
4 Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
5 Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
6 Crea una función que calcule el promedio de los elementos en una lista de números.
7 Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
8 Crea una función que devuelva la suma de todos los elementos en una lista.
9 Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
10 Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
11 Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.*/

//1
let listaGenerica = [];
//2
let lenguajesDeProgramacion = ['Javascript', 'C', 'C++', 'Kotlin', 'Python'];
//3
lenguajesDeProgramacion.push('Java', 'Ruby', 'Golang');
//4
function verLenguajes() {
    console.log(lenguajesDeProgramacion);
    return;
}
verLenguajes();
//5
function verLenguajesInversos () {
    let lenguajesInversos = lenguajesDeProgramacion.reverse();
    console.log(lenguajesInversos);
    return;
}
verLenguajesInversos();
//6
function promedio (numero1, numero2, numero3, numero4) {
    let numeros = [];
    numeros.push(numero1,numero2,numero3,numero4);
    let promedioNumeros = (numeros[0] + numeros[1] + numeros[2] + numeros[3]) / 4;
    console.log(promedioNumeros);
    return;

    }
    promedio(2,4,6,8);
    //7
    function numeroMayorMenor(numeroA, numeroB) {
        let listaNumeros = [];
        if (numeroA > numeroB) {
            let mayor = console.log(numeroA);
            let menor = listaNumeros.push(numeroB);
            console.log(listaNumeros);            
        }
        else{ 
            let mayor = console.log(numeroB);
            let menor = listaNumeros.push(numeroA);
            console.log(listaNumeros); 
        }
        return;
    } 

    numeroMayorMenor(5,8);
    numeroMayorMenor(1000,2);
    //8
    function sumaLista (n1,n2,n3,n4,n5) {
        let arrayNumeros = [];
        let suma = 0 ;
        arrayNumeros.push(n1,n2,n3,n4,n5);
        suma = arrayNumeros[0] + arrayNumeros[1] + arrayNumeros[2] + arrayNumeros[3] + arrayNumeros[4];
        console.log(suma);
        return;
        }
       
    
    sumaLista(2,4,5,6,9,);
    //9
    function encontrarElemento (elemento, vectorGenerico) {
        
        let pos = vectorGenerico.indexOf(elemento);
        if (vectorGenerico.includes(elemento)){
            console.log(pos);
        }
        else {
            console.log(-1);
        }
        
        return;
    }

    encontrarElemento('Javascript', lenguajesDeProgramacion);
    encontrarElemento('Pytfbehbhon', lenguajesDeProgramacion);

    //10
    function combinarListas (lista1, lista2) {
        lista1 instanceof Array;
        lista2 instanceof Array;  
        let nuevaLista = [];
        for (let i = 0; i < lista1.length; i++) {
          let sumaLista = lista1[i] + lista2[i];
           nuevaLista.push(sumaLista);
            console.log(nuevaLista);
        }
        return;
    }
    combinarListas([1,2,4,5,8], [2,5,6,8,9]);
//11
    function listaAlCuadrado(lista3) {
        lista3 instanceof Array;
        let listaNueva = [];
        for (let e = 0; e < lista3.length; e++) {
                let cuadradoListaNueva = lista3[e] * lista3[e];
                listaNueva.push(cuadradoListaNueva);
               console.log(listaNueva);

        }

    }
    listaAlCuadrado([2,3,5,6,7]);