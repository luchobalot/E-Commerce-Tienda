// Obtener los elementos del DOM
productosEnCarrito = localStorage.getItem("productosEnCarrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelector("#carrito-producto-eliminar");

function cargarProducosCarrito() {

    if (productosEnCarrito) {

        productosEnCarrito = JSON.parse(localStorage.getItem("productosEnCarrito"));

        contenedorCarritoVacio.classList.add("disabled"); // Oculta el contenedor de carrito vacío
        contenedorCarritoProductos.classList.remove("disabled"); // Muestra el contenedor de productos
        contenedorCarritoAcciones.classList.remove("disabled"); // Muestra el contenedor de acciones
        contenedorCarritoComprado.classList.add("disabled"); // Oculta el contenedor de carrito comprado
    
        contenedorCarritoProductos.innerHTML = ""; // Limpiar el contenedor de productos
    
        // Crear elementos para cada producto en el carrito.
        productosEnCarrito.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
    
            div.innerHTML = `
                <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="carrito-producto-titulo">
                    <small>Producto:</small>
                    <h3>${producto.titulo}</h3>
                </div>
                <div class="carrito-producto-cantidad">
                    <small>Cantidad</small>
                    <p>${producto.cantidad}</p>	
                </div>
                <div class="carrito-producto-precio">
                    <small>Precio</small>
                    <p>$${producto.precio}</p>	
                </div>
                <div class="carrito-producto-subtotal">
                    <small>Subtotal</small>
                    <p>$${producto.precio * producto.cantidad}</p>	
                </div>
                <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash"></i></button>
            `;
    
            contenedorCarritoProductos.append(div);
        });
        
    }
    else {
        contenedorCarritoVacio.classList.remove("disabled"); 
        contenedorCarritoProductos.classList.add("disabled"); 
        contenedorCarritoAcciones.classList.add("disabled"); 
        contenedorCarritoComprado.classList.add("disabled");
    }

    actualizarBotonesEliminar();
}

cargarProducosCarrito();


// Eliminar producto del carrito.
function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto");
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

function eliminarDelCarrito(e) {
    const idBoton = event.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    productosEnCarrito.splice(index, 1);
    cargarProducosCarrito();

    localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito));
}

