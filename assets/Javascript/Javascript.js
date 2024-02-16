//Ejercicio 1
// Se crean dos variables con sus respectivos valores
var num1 = 1
var num2 = 2

// Se suman ambas variables y el resultado se guarda en una nueva
var resultado = num1 + num2;

// Se muestra el resultado en la consola
console.log(resultado);

//Ejercicio 2

num1 = prompt("Ingrese el primer numero")
num2 = prompt("ingrese el segundo numero")
num1 = parseFloat(num1)
num2 = parseFloat(num2)
//var resultadoSuma = (num1 + num2)
//alert("la suma de ambos numeros es: "+resultado)

var suma = parseInt(num1)+parseInt(num2);
var resta = parseInt(num1)-parseInt(num2);
var multiplica = parseInt(num1)*parseInt(num2);
var divide = parseInt(num1)/parseInt(num2);
document.write("el resultado de sumar "+num1+" + "+num2+" es "+suma+". ")
document.write("el resultado de restar "+num1+" - "+num2+" es "+resta+". ")
document.write("el resultado de multiplicar "+num1+" * "+num2+" es "+multiplica+".")
document.write(" el resultado de dividir "+num1+" / "+num2+" es "+divide+". <br><hr>")

//Ejercicio 3
var tempCelsius = parseFloat(prompt("Ingrese temperatura en grados celsius"))
var tempKelvin = tempCelsius + 273.15
var tempfahrenheit = (tempCelsius * (9/5) + 32)

document.write(`La temperatura ingresada es: ${tempCelsius} <br>En grados Kelvin es: ${tempKelvin}<br>En grados Fahrenheit es: ${tempfahrenheit}<br><hr>`)

//Ejercicio 4

var diasIngresados = parseInt(prompt("Ingrese numero de dias"))
var año = parseInt(diasIngresados/365)
var semanas =(diasIngresados - 365) / 7
var diasRestantes = parseInt(semanas % 7)

document.write(`Dias ingresados: ${diasIngresados}<br>equivale a ${año} año, ${semanas} semanas y ${diasRestantes} dias.<br><hr>`)

//Ejercicio 5
var n1 = +prompt("Ingrese primer numero")
var n2 = +prompt("Ingrese segundo numero")
var n3 = +prompt("Ingrese tercer numero")
var n4 = +prompt("Ingrese cuarto numero")
var n5 = +prompt("Ingrese quinto numero")

var suma = (n1+n2+n3+n4+n5)
var promedio = suma / 5

document.write(`la suma de los numeros es: ${suma} y el promedio es: ${promedio}<br><hr>`)
