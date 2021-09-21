        alert("Hola Mundo!")/*Ventana emergente*/
        console.log("Estamos en la consola")

        let nombre = "Santi Quinteros"; /*tipo string -- ocupa lugar en la memoria unicamente cuando la uso*/
        var numero = 10; /*Numerica -- ocupa siempre un lugar en la memoria*/
        const PI = 3.1416;
        let hayClases = 1;
        console.log((numero + 25 + 15) + " " + nombre);/*+ concatenar y sumar*/
        console.log(hayClases);
        let esFeriado = true;

        /*CONDICIONALES*/
        if(5 > 8){/*Si es verdadero, se ejecuta*/
            console.log("Es correcto!");
        }else{ /*si es falso*/
            console.log('No es correcto!');
        }

        console.log((5 > 3) ? "Es Correcto" : "No es correcto"); /*Ternario*/

        if(hayClases == true && esFeriado != true){ /*Se tienen que cumplir ambas condiciones*/
            console.log('Me conecto a la videollamda!');
        }else{
            console.log('No me conecto a la videollamda!');
        }

        if(25 < 32 || 12 > 20){ /*se cumple una de las dos condiciones*/
            console.log('Se cumplió la condición')
        }

        let saludo = 'Hola, cómo estás?';
        let saludar = saludo + " " + nombre;

    let elemento = document.getElementById("principal");
    // console.log(elemento);
    document.innerHTML="<h1 class='text-center bg-info'>"+ saludar + "</h1>";
    document.write("<h1 class='text-center bg-info'>"+ saludar + "</h1>");
    