const productosElegidos = [
    {
        id: "hoodie-campera-01",
        titulo: "Hoodie Champion Salmon",
        imagen: "./img/hoodie1.jpg",
        precio: 56000,
        categoria: {
            id: "hoodie-campera",
            nombre: "Hoodies y Camperas"
        }
    },
    {
        id: "hoodie-campera-02",
        titulo: "Hoodie Negro",
        imagen: "./img/hoodie2.jpg",
        precio: 47999,
        categoria: {
            id: "hoodie-campera",
            nombre: "Hoodies y Camperas"
        }
    },
    {
        id: "hoodie-campera-03",
        titulo: "Hoodie Cream",
        imagen: "./img/hoodie3.jpg",
        precio: 55000,
        categoria: {
            id: "hoodie-campera",
            nombre: "Hoodies y Camperas"
        }
    },
    {
        id: "hoodie-campera-04",
        titulo: "Hoodie Blanco",
        imagen: "./img/hoodie4.jpg",
        precio: 47999,
        categoria: {
            id: "hoodie-campera",
            nombre: "Hoodies y Camperas"
        }
    },
    {
        id: "hoodie-campera-05",
        titulo: "Campera Adidas Clasica",
        imagen: "./img/campera1.jpg",
        precio: 65000,
        categoria: {
            id: "hoodie-campera",
            nombre: "Hoodies y Camperas"
        }
    },
    {
        id: "hoodie-campera-06",
        titulo: "Campera Adidas Negra Retro",
        imagen: "./img/campera2.png",
        precio: 70999,
        categoria: {
            id: "hoodie-campera",
            nombre: "Hoodies y Camperas"
        }
    },
    {
        id: "hoodie-campera-07",
        titulo: "Campera Canelon Negra",
        imagen: "./img/campera3.jpg",
        precio: 115999,
        categoria: {
            id: "hoodie-campera",
            nombre: "Hoodies y Camperas"
        }
    },
    {
        id: "hoodie-campera-08",
        titulo: "Campera Puffer Gris",
        imagen: "./img/campera4.png",
        precio: 125000,
        categoria: {
            id: "hoodie-campera",
            nombre: "Hoodies y Camperas"
        }
    },
    // Pantalones
    {
        id: "pantalon-01",
        titulo: "Pantalon Chino Beige",
        imagen: "./img/pantalon1.jpg",
        precio: 35000,
        categoria: {
            id: "pantalon",
            nombre: "Pantalones"
        }
    },
    {
        id: "pantalon-02",
        titulo: "Pantalon Chino Blanco",
        imagen: "./img/pantalon2.jpg",
        precio: 40000,
        categoria: {
            id: "pantalon",
            nombre: "Pantalones"
        }
    },
    {
        id: "pantalon-03",
        titulo: "Pantalon Negro Clasico",
        imagen: "./img/pantalon3.jpg",
        precio: 30000,
        categoria: {
            id: "pantalon",
            nombre: "Pantalones"
        }
    },
    {
        id: "pantalon-04",
        titulo: "Pantalon Vestir Negro",
        imagen: "./img/pantalon4.jpg",
        precio: 45000,
        categoria: {
            id: "pantalon",
            nombre: "Pantalones"
        }
    },
    {
        id: "pantalon-05",
        titulo: "Pantalon Verde Militar",
        imagen: "./img/pantalon5.jpg",
        precio: 50000,
        categoria: {
            id: "pantalon",
            nombre: "Pantalones"
        }
    },
    // Remeras
    {
        id: "camiseta-01",
        titulo: "Remera Azul Basica",
        imagen: "./img/camiseta1.jpg",
        precio: 20000,
        categoria: {
            id: "camiseta",
            nombre: "Remeras"
        }
    },
    {
        id: "camiseta-02",
        titulo: "Camiseta Blanca Tropical",
        imagen: "./img/camiseta2.jpg",
        precio: 20000,
        categoria: {
            id: "camiseta",
            nombre: "Remeras"
        }
    },
    {
        id: "camiseta-03",
        titulo: "Camiseta Blanca Ground",
        imagen: "./img/camiseta3.jpg",
        precio: 22000,
        categoria: {
            id: "camiseta",
            nombre: "Remeras"
        }
    },
    {
        id: "camiseta-04",
        titulo: "Camiseta Roja Fit",
        imagen: "./img/camiseta4.jpg",
        precio: 22000,
        categoria: {
            id: "camiseta",
            nombre: "Remeras"
        }
    },
    {
        id: "camiseta-05",
        titulo: "Camiseta Marron Clasica",
        imagen: "./img/camiseta5.jpg",
        precio: 23000,
        categoria: {
            id: "camiseta",
            nombre: "Remeras"
        }
    },
    {
        id: "camiseta-06",
        titulo: "Remera Roja Clásica",
        imagen: "./img/camiseta6.jpg",
        precio: 23000,
        categoria: {
            id: "camiseta",
            nombre: "Remeras"
        }
    }
];

// Obtener elementos del DOM:
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

// Define el array de productos en el carrito.
let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productosEnCarrito");

// Si hay productos en el carrito en el Local Storage, los carga en el array de productos en el carrito.
if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} 
else {
    productosEnCarrito = [];
}

// Eventos.
function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = "";
    
    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">$${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>
        `;

        contenedorProductos.append(div);
    });
    // Actualizar los botones de agregar al carrito después de cargar los productos
    actualizarBotonesAgregar();
}

function actualizarBotonesAgregar() {
    const botonesAgregar = document.querySelectorAll(".producto-agregar"); // Obtener los botones de agregar nuevamente.
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

// Agregar productos al carrito.
function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productosElegidos.find(producto => producto.id === idBoton);

    // Verificar si el producto ya está en el carrito
    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        // Si el producto ya está en el carrito, incrementar la cantidad.
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    }
    else {
        productoAgregado.cantidad = 1; // Establecer la cantidad en 1
        productosEnCarrito.push(productoAgregado); // Añadir el producto al carrito.
    }

    actualizarNumerito();
    // Guardar el carrito en el localStorage.
    localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito));
}

// Actualizar el número en el carrito.
function actualizarNumerito() {
    // Calcular el número de productos en el carrito.
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}

// Cargar todos los productos al inicio
cargarProductos(productosElegidos);

// Filtrar productos por categoría
botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        // Elimina la clase "active" de todos los botones
        botonesCategorias.forEach(boton => boton.classList.remove("active")); 
        // Agrega la clase "active" al botón que se hizo click
        e.currentTarget.classList.add("active"); 

        if (e.currentTarget.id != "todos") {
            // Filtrar productos por la categoría seleccionada
            const productosFiltrados = productosElegidos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosFiltrados); // Cargar productos filtrados
            tituloPrincipal.innerText = productosFiltrados[0]?.categoria.nombre || "Categoría"; // Actualiza el título con la categoría seleccionada
        } 
        else {
            tituloPrincipal.innerText = "Todos los productos"; // Actualiza el título a "Todos los productos"
            cargarProductos(productosElegidos); // Cargar todos los productos si se selecciona "Todos"
        }
    });
});