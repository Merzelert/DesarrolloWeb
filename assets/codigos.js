console.log("Aprendiendo a invocar codigo JS desde HTML");

let nombre = "Erik";
let apellido = "Retana";

let saludo = "Hola mi nombre es " + nombre + " " + apellido + ".";
console.log(saludo);

let saludo2 = `Hola mi nombre es ${nombre} ${apellido}.`;
console.log(saludo2);

let a = 2;
let b = 3;

function suma(a,b) {
    a+b;
}