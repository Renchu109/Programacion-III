//Trabajo Práctico 3: JavaScript

//Ejercicio 1
console.log("Ejercicio 1")

let a = 5;
let b = 10;
let c = a+b;
console.log(`La suma de ${a} y ${b} es ${c}`)

//Ejercicio 2


console.log("Ejercicio 2")

let nombre = prompt("¿Cuál es tu nombre?")
console.log("Hola",nombre)


//Ejercicio 3
console.log("Ejercicio 3")

let num1 = 1;
let num2 = 2;
let num3 = 3;
console.log("Números: ",num1,", ",num2," y ",num3)

if((num1 > num2) && (num1 > num3)){
  console.log("El mayor es ",num1)
}else if((num2 > num1) && (num2 > num3)){
  console.log("El mayor es ",num2)
}else{
  console.log("El mayor es ",num3)
}

//Ejercicio 4
console.log("Ejercicio 4")

let num__ = prompt("Ingrese un número para saber su paridad: ")
if(num__ % 2 === 0){
  console.log("El número",num__,"es PAR")
}else{
  console.log("El número",num__,"es IMPAR")
}


//Ejercicio 5
console.log("Ejercicio 5")

let var_ = 10;

while(var_ > 0){
  console.log("La variable vale:",var_)
  var_--
}

//Ejercicio 6
console.log("Ejercicio 6")


let num = null
do{
  num = prompt("Ingrese un número mayor a 100: ")
}while(num <= 100)
  console.log("Ingresaste un número mayor a 100:",num)


//Ejercicio 7
console.log("Ejercicio 7")


let num_ = prompt("Ingrese un número: ")
const esPar = (num) =>{
  if(num % 2 === 0){
    return true
  }else{
    return false
  }
}
const booleanResult = esPar(num_)
console.log("El número",num_,"es par:",booleanResult)


//Ejercicio 8
console.log("Ejercicio 8")


let degrees = prompt("Ingrese una temperatura en grados Celsius:")

const convertirCelsiusAFarenheit= (celsius) =>{
  return celsius*1.8+32
}
const farenheit = convertirCelsiusAFarenheit(degrees)
console.log(degrees,"°C son equivalentes a",farenheit,"°F")


//Ejercicio 9
console.log("Ejercicio 9")


let Persona = {
  nombre: "Renzo",
  edad: 21,
  ciudad: "Mendoza",
  cambiarCiudad: function () {
    this.ciudad = prompt("Ingrese la nueva ciudad:")
  }
}

console.log("Persona:",Persona.nombre,", Edad:",Persona.edad,", Ciudad:",Persona.ciudad)
Persona.cambiarCiudad()
console.log("Persona:",Persona.nombre,", Edad:",Persona.edad,", Ciudad:",Persona.ciudad)


//Ejercicio 10
console.log("Ejercicio 10")

let Libro = {
  titulo: "Harry Potter y el Cáliz de fuego",
  autor: "J.K. Rowling",
  año: 1997,
  esReciente: function () {
    if(2024-this.año <= 10){
      return true
    }else{
      return false
    }
  }
}

console.log("Libro:",Libro.titulo,",Autor:",Libro.autor,",Año:",Libro.año)
let reciente = Libro.esReciente()
console.log(Libro.titulo,"es reciente:",reciente)

//Ejercicio 11
console.log("Ejercicio 11")

console.log("Números del 1 al 10")
let numeros = [1,2,3,4,5,6,7,8,9,10]
numeros.forEach((num)=>{
  console.log(num)
})

console.log("Números del 1 al 10 duplicados")
numeros.forEach((num)=>{
  num*=2
  console.log(num)
})

//Ejercicio 12
console.log("Ejercicio 12")

const parrafo = document.querySelectorAll(".parrafo")
const boton = document.querySelector("button")

const cambiarColorAzul = () => {
  let cambiarANegro = false

  parrafo.forEach(parrafo => {
    if(parrafo.classList.contains("blueColor")){
      parrafo.classList.remove("blueColor")
      cambiarANegro = true
    }else{
      parrafo.classList.add("blueColor")
      cambiarANegro = false
    }
  })

  boton.innerText = cambiarANegro ? "Cambiar color a azul" : "Cambiar color a negro";
}

boton.addEventListener("click",() => {
  cambiarColorAzul()
})

//Ejercicio 13
console.log("Ejercicio 13")

document.getElementById("botonAlerta").addEventListener("click", function () {
  let textoIngresado = document.getElementById("textoIngresado").value
  alert(`Has ingresado: ${textoIngresado}`)
})

//Ejercicio 14
console.log("Ejercicio 14")

document.getElementById("idEl1").addEventListener("click", function () {
  console.log("Texto del elemento 1")
})

document.getElementById("idEl2").addEventListener("click", function () {
  console.log("Texto del elemento 2")
})

document.getElementById("idEl3").addEventListener("click", function () {
  console.log("Texto del elemento 3")
})

document.getElementById("idEl4").addEventListener("click", function () {
  console.log("Texto del elemento 4")
})

//Ejercicio 15
console.log("Ejercicio 15")

document.getElementById("disableButton").addEventListener("click", function () {
  document.getElementById("inputId").disabled = true
})

document.getElementById("ableButton").addEventListener("click", function () {
  document.getElementById("inputId").disabled = false
})

//Ejercicio 16
console.log("Ejercicio 16")

document.getElementById("botonGuardado").addEventListener("click", function () {

  const correo = document.getElementById("emailId").value

  localStorage.setItem("correo", correo)

  console.log(localStorage.getItem("correo"))
  const correoGuardado = localStorage.getItem("correo")
  if(correoGuardado){
    let div = document.getElementById("mostrarCorreo")
    div.innerHTML = "Correo guardado: " + correo
    mostrarBotonEliminar()
  }
})

document.getElementById("botonEliminar").addEventListener("click", function () {
  localStorage.removeItem("correo")
  let div = document.getElementById("mensajeEliminado")
  div.innerHTML = "El correo ha sido eliminado" 
})

const mostrarBotonEliminar = () => {
  const botonOculto = document.getElementById("botonEliminar")
  botonOculto.style.display = "block"
}