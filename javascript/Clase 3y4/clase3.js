// let nombre = prompt("Ingresa tu nombre!");
let miDiv = document.getElementById("principal");
// miDiv.innerHTML = "Hola "+nombre;

let btn = document.getElementById("btn");
btn.addEventListener('click', sumar);

function sumar(){
    let num = Number(prompt("Ingresa tu primer número"));
    let num2 = Number(prompt("Ingresa tu segundo número"));
    let op = prompt("Escribí la operación a realizar \n + para sumar\n - para restar\n* para multiplicar\n / para dividir");
    let resultado = 0;
    switch (op) {
        case "+":
            resultado = num + num2;
            miDiv.innerHTML+="<p> El resultado de la suma de " +num +" y " +num2 +" es: " +resultado +"</p>"; // El '+' es para concatenar
            break;

        case "-":
            resultado = num - num2;
            miDiv.innerHTML+="<p> El resultado de la resta de " +num +" y " +num2 +" es: " +resultado +"</p>"; // El '+' es para concatenar
            break;
        
        case "*":
            resultado = num * num2;
            miDiv.innerHTML+="<p> El resultado de la multiplicación de " +num +" y " +num2 +" es: " +resultado +"</p>"; // El '+' es para concatenar
            break;
    
        case "/":
            resultado = num / num2;
            miDiv.innerHTML+="<p> El resultado de la división de " +num +" y " +num2 +" es: " +resultado +"</p>"; // El '+' es para concatenar
            break;
    
        default:
            
            break;
    }
}