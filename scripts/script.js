//variables
var studentName = "Edwin"
let age = 26
const isStudent = true

console.log(studentName);
console.log(age);
console.log(isStudent);

//arreglos
let students = ["Angélica","Fabiola","Isack", "Daria","Yareth"]
console.log(students);

students.push("Brenda","Mely"); //push agrega items al arreglo-
console.log(students);
students[1] = "Fabi" //modifica el item de la posicion indicada
console.log(students);

students.pop(); //elimina el ultimo item del arreglo
console.log(students);

students.splice(2,1); //elimina item especifico
console.log(students);

//objetos literales
let student1 = {
    name: "Angélica",
    age: 34,
    isStudent : true
}
let student2 = {
    name: "Isack",
    age: 23,
    isStudent : false
}
console.log(student1,student2);

//objetos constructores
function Student(name,age,isStudent) {
    this.name = name;
    this.age=age;
    this.isStudent = isStudent;
}

let student3 = new Student("Angélica",34,false);
let student4 = new Student("Fabiola",30,true);
let student5 = new Student("Daria",40,true);
console.log(student3,student4,student5);


//funciones
function saludar(nombre){
    console.log("Bienvenido(a) " + nombre);
}

saludar("Angélica");

function sumar(a,b){
    let total = a+b;
    return total;
}

sumar(10,5);

function calcularImpuestos(ingresos,egresos){
    let subtotal = ingresos-egresos;
    let total = subtotal*0.02;
    // document.write(`
    //     <p class="container"> Tus impuestos son: $${total} </p>
    // `);
}

calcularImpuestos(sumar(2000,150),sumar(100,80));
calcularImpuestos(sumar(1500,50),sumar(200,700));
