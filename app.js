// 1. TU LISTA ORIGINAL DE PRODUCTOS
const productos = [
    { id: 1, nombre: "Pastel de Pollo", precio: 1000, categoria: "Pasteles" },
    { id: 2, nombre: "Pastel de Carne", precio: 1000, categoria: "Pasteles" },
    { id: 3, nombre: "Empanada de Queso", precio: 800, categoria: "Empanadas" },
    { id: 4, nombre: "Empanada de Frijol", precio: 800, categoria: "Empanadas" },
    { id: 5, nombre: "Pollo Frito (Pieza)", precio: 1200, categoria: "Pollo" },
    { id: 6, nombre: "Vigorón Mixto", precio: 2500, categoria: "Especiales" }
    // Aquí puedes seguir pegando el resto de tus productos exactamente igual
];

let carrito = [];

// 2. FUNCIÓN PARA AGREGAR (SIN CAMBIOS)
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    renderizarCarrito();
}

// 3. LA FUNCIÓN DE LA "X" (PARA BORRAR SIN ARRUINAR EL RESTO)
function eliminarDelCarrito(index) {
    // Elimina solo el elemento seleccionado por su posición
    carrito.splice(index, 1);
    renderizarCarrito();
}

// 4. RENDERIZADO DEL CARRITO CON EL BOTÓN DE BORRADO
function renderizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const totalElemento = document.getElementById('total');
    let total = 0;
    
    listaCarrito.innerHTML = ''; // Limpiar antes de mostrar

    carrito.forEach((item, index) => {
        total += item.precio;
        const div = document.createElement('div');
        div.className = 'item-carrito';
        div.innerHTML = `
            <span>${item.nombre} - ₡${item.precio}</span>
            <button onclick="eliminarDelCarrito(${index})" class="btn-borrar">X</button>
        `;
        listaCarrito.appendChild(div);
    });

    totalElemento.innerText = total;
}

// 5. FUNCIÓN PARA EL PEDIDO (ESTRUCTURA JSON PARA MANYCHAT)
function enviarPedido() {
    if (carrito.length === 0) {
        alert("El carrito está vacío");
        return;
    }

    const pedidoData = {
        productos: carrito.map(i => i.nombre),
        total: carrito.reduce((sum, i) => sum + i.precio, 0),
        fecha: new Date().toLocaleString()
    };

    console.log("Datos para ManyChat:", JSON.stringify(pedidoData));
    alert("Pedido listo para procesar");
}
