//Hola Mundo
alert('Hola Mundo');
console.log('Hola Mundo');

// comentario de linea
/*
comentario de
varias lineas
*/

console.log('Linea uno');
console.log('linea  dos');

// variables
let a = 5;
console.log(a);

// cadenas
let nombre = 'Pedro';
console.log("Hola mundo", nombre);
console.log('Hola mundo'+nombre);

let b = 4;
let c  = 5;
let d = 6;

let nombreCompleto = 'Pedro Marchena';
let nombre_completo = 'Pedro Marchena';

let $ = 1;
let _ = 2;

// constantes
const PI = 3.1416;
const COLOR_BLANCO =  '#FFFFFF';
//PI = 5;
//const codigo = getId();

// Tipos de datos

// Dinamicamente tipado
let x;
x = 25;
x = 2.2425;
x = "hola";
x  = true;

// Tipo de datos Number
let n = 4;
n = 4.2526;

let num = n;
num = 5;
console.log(n);
console.log(num);

//Valores numericos especiales: Infinity. NaN
console.log(1/0);
console.log("Hola" / 2);

// Tipo dato BigInt
// mayor que (2^52 - 1) 9.007.199.254.740.991

num = 444451234567789854322345667765223n;
console.log(num);

// Tipo String
let mensaje = "Hola mundo";
let mensaje_dos = 'Hola mundo';

// Tipo Boleano
let verdadero = true;
let falso = false;

// valor null
//en JS null significa un obketop inecistente;
//un valor especial que representa nada, vacio o valor desconocido;

// valor undefined

// valor especial que significa no asignado
let prueba;
console.log(prueba);

// typeof typeof(variable)
num  = 4;
console.log(typeof(num));
num = 4.5;
console.log(typeof(num));
num = "h"/2;
console.log(typeof(num));
num = 1/2;
console.log(typeof(num));
num = true;
console.log(typeof(num));
num = null;
console.log(typeof(num)); // ERROR DE JAVASCRIPT

// Conversion de datos
let cadena = "123";
let conversion  = Number(cadena);
conversion = Number("4z"/2);
console.log(`El valor ${conversion} es de tipo ${typeof(conversion)}`);

/* Tabla de conversiones NUMBER */
/*
undefined -> NaN
null ->  0
true ->  1
false -> 0
string '' -> 0
string 'hola' -> NaN
*/

// Conversiones numericas ocurren automaticamente en funciones matematicas y expresiones
conversion = '6' / 2;
conversion = '6' * 2;
conversion = '6' * '2';
conversion = '6' + '2'; // el + prevalece la concatenacion que la suma
conversion = null * true;
conversion = true * true;

// Concatenacion prevalece con el signo +
conversion = 1  + '2';
conversion = '1' + 2;
conversion = 2 + 2 +  '1';
console.log(`El valor ${conversion} es de tipo ${typeof(conversion)}`);

/* Tabla de conversiones BOOLEANA */
/*
undefined -> false
null ->  false
string '' -> false
0 -> false
NaN ->  false
string '0' -> true
'  ' ->true
string 'hola' -> true
[1-x] -> true
*/

// Conversiones explicita en bloque if y while
conversion = Boolean('hola');
console.log(`El valor ${conversion} es de tipo ${typeof(conversion)}`);

// COMPARACIONES
// Al comparar valores de diferentes tipos, JS comvierte los valores a numeros
// toda comparacion con NaN es falsa.
// el undefined y el null son iguales entre si pero  no a ningun otro valor(igualacion no estricta)

console.log(2 > true); // true
console.log('2' > 1); // true
console.log('hola' > 0) // false
console.log('hola' < 0) // false
console.log('hola' == 0) // false
console.log(null > 0) // false
console.log(null < 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true  ERROR DE JAVASCRIPT
console.log(null == undefined) // true
console.log(null === undefined) // false


/* Tabla de conversiones NUMBER */
/*
undefined -> NaN
null ->  0
true ->  1
false -> 0
string '' -> 0
string 'hola' -> NaN
*/




// SENTENCIA IF
/*
if(condicion){

}else if(condicion){

}else{

}
*/

//  IF de linea
if(4 > 5) console.log('Mensaje');

if(4 > 5){
    b = 5 + 3;
    console.log('Mensaje');
}
if(1){
    console.log('Mensaje');
}
if('az' > 5){
    console.log('Mensaje');
}

// Operador Termario
let edad;
let resultado = edad > 18 ? 20 : 30;

// BUCLES WHILE Y FOR
/* While(condicion){

}*/

let i = 1;
while(i<=10){
    console.log(`El valor de i es: ${i}`);
    i++;
}

// do - while
console.log('*************')
i = 1;
do{
    console.log(`El valor de i es: ${i}`);
    i++;
}while(i <= 10);

// Ciclo for
console.log('*************');
for(i = 0; i <=10; i++){
    console.log(`El valor de i es: ${i}`);
}

// Switch
a = 2  + 2;
switch(a){
    case 3:
        console.log('El resultado es 3');
        break;
    case 4:
        console.log('El resultado es 4');
        break
    default:
        console.log('Ningun de los dos valores');
}


