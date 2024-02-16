var btnSumar = document.getElementById("btn-sumar")
var btnRestar = document.getElementById("btn-restar")

var valor1 = parseInt(document.getElementById("valor1"))
  console.log(valor1)
  var valor2 = parseInt(document.getElementById("valor2"))
  console.log(valor2)

btnSumar.addEventListener("click", function()
{
  var resultado = (valor1 + valor2)
  console.log(resultado)
  document.getElementsByClassName(".resultado").innerHTML=resultado
  return resultado
})

btnRestar.addEventListener("click", function()
{
  var resultado = (valor1 - valor2)
  console.log(resultado)
  document.getElementsByClassName(".resultado").innerHTML=resultado
  return resultado
})