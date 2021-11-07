const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".navmenu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    if (navMenu.classList.contains("nav-menu_visible")){
        navToggle.setAttribute("aria-label", "Cerrar Manú");
    } else{ 
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
});


const precioTicket = 200;
const descuentoEstudiante = 0.2;
const descuentoTrainee = 0.5;
const descuentoJunior = 0.85;

const ticketEstudiante = precioTicket * descuentoEstudiante;
const ticketTrainee = precioTicket * descuentoTrainee;
const ticketJunior = precioTicket * descuentoJunior;

console.log(ticketEstudiante);
console.log(ticketTrainee);
console.log(ticketJunior);

const calcular = () => {
    let cantidad = document.getElementById("cantidadEntradas").value;
    let descuentos = document.getElementById("tipoDescuento").value;
    console.log(cantidad);
    if (descuentos == 1){
        const totalPago = ticketEstudiante * parseInt(cantidad);
        document.getElementById("cantidadApagar").value = "Total a pagar: $" + totalPago;
    } else {     
            if (descuentos == 2){
                const totalPago = ticketTrainee * cantidad;
                document.getElementById("cantidadApagar").value = "Total a pagar: $" + totalPago;
            } else{     
                    if (descuentos == 3){
                    const totalPago = ticketJunior * cantidad;
                    document.getElementById("cantidadApagar").value = "Total a pagar: $" + totalPago;
                    }else{
                        alert("Por favor, complete correctamente todos los campos y seleccione una categoria.")
                    }
            }
    }
}


let container = document.getElementById("seccion");

const comprarTicket=()=>{
    container.innerHTML= `
    
<div class="container7">
    <div class="containerCard">
        <div class="card1">
            <span class="tituloCard">Estudiante</span>
            <span class="subtituloCard">Tienen un descuento</span>
            <span class="porcentajeDescuento">80%</span>
            <span class="documentacionCard">*presentar documentación</span>
        </div>
    </div>

    <div class="containerCard">
        <div class="card2">
            <span class="tituloCard">Trainee</span>
            <span class="subtituloCard">Tienen un descuento</span>
            <span class="porcentajeDescuento">50%</span>
            <span class="documentacionCard">*presentar documentación</span>
        </div>
    </div>

    <div class="containerCard">
        <div class="card3">
            <span class="tituloCard">Junior</span>
            <span class="subtituloCard">Tienen un descuento</span>
            <span class="porcentajeDescuento">15%</span>
            <span class="documentacionCard">*presentar documentación</span>
        </div>
    </div>
</div>

<div class="container2">
    <div>
      <span class="tit2">VENTA</span>
      <span class="tit3">VALOR DE TICKET $200</span>
    </div>
</div>

<div class="container8">
    <form>
        <div class="bySide">
            <div class="halfBar">
                <input type="text" name="nombre" placeholder="Nombre(s)">
            </div>
            <div class="halfBar">
                <input type="text" name="apellidos" placeholder="Apellido(s)">
            </div>
        </div>
        <div class="bar">
            <input type="text" name="correo" placeholder="Correo">
        </div>
        <div class="bySide">
            <div class="halfBar">
                <input type="text" id="cantidadEntradas" name="cantidad" placeholder="Cantidad">
            </div>
            <div class="halfBar">
                <select id="tipoDescuento" class="tipoTicket" placeholder="Categoria">
                    <option selected value="0" disabled>Categoría</option>
                    <option value="1">Estudiante</option> 
                    <option value="2">Trainee</option> 
                    <option value="3">Junior</option>
                 </select>
            </div>
        </div>
        <div class="totalPago">
            <div>
                <input type="text" id="cantidadApagar" name="totalPago" value="Total a pagar: $" readonly="readonly">
            </div>
        </div>
        <div class="botones">
            <div class="boton1">
                <button type='reset'>Borrar</button>
            </div>
            <div class="boton2">
                <button type='button' onclick="calcular()">Resumen</button>
            </div>
        </div>
    </form>
</div>

    
    `;
};
