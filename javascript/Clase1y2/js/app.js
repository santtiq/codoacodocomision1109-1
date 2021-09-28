        // alert("Hola Mundo!") /*Ventana emergente*/
        console.log("Estamos en la consola")

        let nombre = "Santi Quinteros"; /* tipo string -- ocupa lugar en la memoria unicamente cuando la uso */
        var numero = 10; /* Numerica -- ocupa siempre un lugar en la memoria */
        const PI = 3.1416; /* float */
        let hayClases = true; /* boolean*/
        console.log((numero + 25 + 15) + " " + nombre);/* + concatenar y sumar */
        console.log(hayClases);
        let esFeriado = false;

        /*CONDICIONALES*/
        if(5 > 8){ /* Si es verdadero, se ejecuta */
            console.log("Es correcto!");
        }else{ /* si es falso */
            console.log('No es correcto!');
        }

        console.log((5 > 3) ? "Es Correcto" : "No es correcto"); /* Ternario */

        if((hayClases == true) && esFeriado != true){ /* Se tienen que cumplir ambas condiciones */
            console.log('Me conecto a la videollamda!');
        }else{
            console.log('No me conecto a la videollamda!');
        }

        if(25 < 32 || 12 > 20){ /* se cumple una de las dos condiciones */
            console.log('Se cumplió la condición')
        }

        let saludo = 'Hola, cómo estás?';
        let saludar = saludo + " " + nombre;

    let elemento = document.getElementById("principal");
    // console.log(elemento);
    elemento.innerHTML="<h1 class='text-center bg-info'>"+ saludar + "</h1>";
    document.write("<div class='container'><div class='row' id='principal'><h1 class='text-center bg-info'>"+ saludar + "</h1></div></div>");

    document.write(`
    <div class="container"><div class="row" id="principal">
    <h1 class='text-center bg-info'> ${saludar}</h1></div></div>"
    `);


    /* let mensaje = prompt("Menú \n 1. Papas fritas \n 2. Milanesas con fritas \n 3. Milanesa napolitana con fritas");
     console.log(mensaje)

    
    if(mensaje === "1"){
        elemento.innerHTML="<p>Disfruta de tus papas!</p>";
    }else if(mensaje === "2"){
        elemento.innerHTML="<p>Disfruta de tus papas y tu milanesa!</p>";
    }else if(mensaje === "3"){
        elemento.innerHTML="<p>Disfruta de alta napo!</p>";
    }else{
        elemento.innerHTML="No es una opción el valor tipeado!"
    }
    

    switch (mensaje) {
        case "1":
            elemento.innerHTML="<p>Disfruta de tus papas!</p>";
            break; //Deja el switch

        case "2":
            elemento.innerHTML="<p>Disfruta de la milanesa!</p>";
            break;
        case "3":
            elemento.innerHTML="<p>Disfruta de tus papas y la napo!</p>";
            break;
        
        default:
            elemento.innerHTML="No es una opción el valor tipeado";
            let mensaje = prompt("Menú \n 1. Papas fritas \n 2. Milanesas con fritas \n 3. Milanesa napolitana con fritas");
    }
    */

    /*
    let num = parseInt(prompt("Ingresa el primer número")); //parseInt te convierte el string a int
    let num2 = parseInt(prompt("Ingresa el segundo número")); //parseInt te convierte el string a int

    let resultado = "<p>El resultado de: " + num + " y " + num2 +" es: " + (num +num2)+ "</p>";
    elemento.innerHTML=resultado;11
    elemento.innerHTML+="Hola"
    */