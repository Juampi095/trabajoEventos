//eventos DOM
const carrito = [];
const paganiHuayra = {
    id: 1,
    imagen: "./Imagenes/Autos/PaganiHuayraBC/Huayra.jpg",
    nombre: "Pagani Huayra BC",
    descripcion: "Pagani Huayra BC a escala, de la mejor calidad",
    precio: 12499
}
let tarjetas = document.getElementById("tarjetas");

tarjetas.innerHTML = `
<div class="card" style="width: 18rem;">
<img class="card-img-top" src="${paganiHuayra.imagen}" alt="Card image cap">
<div class="card-body">
    <h5 class="card-title">${paganiHuayra.nombre}</h5>
    <p class="card-text">${paganiHuayra.descripcion}</p>
    <p class="card-text">$ ${paganiHuayra.precio}</p>
    <a href="#" id="miBoton" class="btn btn-primary">Comprar</a>
</div>
</div>
`;
let miBoton = document.getElementById("miBoton");
miBoton.onclick = () => {
    console.log("Producto agregado al carro correctamente");
    carrito.push(paganiHuayra);
    console.log(carrito);
}


miBoton.onmouseover = () => {
    console.log("¿Te gusta? ¡Llevalo!");
    miBoton.className = "btn btn-danger";
}
miBoton.onmouseout = () => {
    miBoton.className = "btn btn-primary";
}

//EVENTOS DE TECLADO
let campoNombre = document.getElementById("nombre");
let campoEdad = document.getElementById("edad");

campoEdad.onchange = () => {
    console.log("Cambió el contenido en el campo edad");
    console.log("Contenido actualizado: " + campoEdad.value);
}


//EVENTO SUBMIT
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validarForm);

function validarForm(ev) {
    if ((campoNombre.value == "") || (campoEdad.value == "")) {
        ev.preventDefault();//evita que se envie el form y que se vacien los campos
        alert("Ingrese nombre y/o edad");
    }
}

//EVENTO DE TECLADO DETECTANDO EL ENTER//  //13 es el numero asignado por el codigo ASCII a la tecla ENTER//
function capturarEnter(e) {
    if (e.which == 13 || e.keycode == 13) {
        alert("PRESIONASTE ENTER!");
    }   
}