const productos = [
    { id: 1, categoria: "Pasteles", nombre: "Pastel de Pizza", precio: 1000, desc: "Sabor tradicional pizza" },
    { id: 2, categoria: "Pasteles", nombre: "Pastel Nacho", precio: 1000, desc: "Sabor nacho especial" },
    { id: 3, categoria: "Pasteles", nombre: "Pastel Arreglado", precio: 1500, desc: "Con ensalada y salsas" },
    { id: 4, categoria: "Pasteles", nombre: "Pastel Papa con Carne", precio: 1000, desc: "Relleno tradicional" },
    { id: 5, categoria: "Empanadas", nombre: "Empanada Papa con Carne", precio: 1000, desc: "Crujiente y calientita" },
    { id: 29, categoria: "Promociones", nombre: "2x Empanadas", precio: 1500, desc: "Aplica en seleccionadas" },
    { id: 30, categoria: "Promociones", nombre: "2x Pasteles", precio: 1500, desc: "Aplica en seleccionados" }
];

let carrito = [];
let linkMapa = "";

function mostrarMenu() {
    const contenedor = document.getElementById('menu-container');
    if(!contenedor) return;
    contenedor.innerHTML = "";
    const categorias = [...new Set(productos.map(p => p.categoria))];
    categorias.forEach(categoria => {
        contenedor.innerHTML += `<h2 class="titulo-categoria">${categoria}</h2>`;
        productos.filter(p => p.categoria === categoria).forEach(p => {
            contenedor.innerHTML += `
                <div class="producto-card">
                    <div class="info-prod">
                        <h3>${p.nombre}</h3>
                        <p>${p.desc}</p>
                        <strong>₡${p.precio}</strong>
                    </div>
                    <button class="btn-add" onclick="agregar(${p.id})">+</button>
                </div>`;
        });
    });
}

function agregar(id) {
    const prod = productos.find(p => p.id === id);
    carrito.push({...prod});
    actualizarCarrito();
}

function actualizarCarrito() {
    const lista = document.getElementById('lista-carrito');
    const totalElemento = document.getElementById('total-precio');
    lista.innerHTML = "";
    let total = 0;

    carrito.forEach((p, index) => {
        total += p.precio;
        lista.innerHTML += `
            <div class="item-pedido">
                <span>✅ ${p.nombre} - ₡${p.precio}</span>
                <button class="btn-x" onclick="eliminarProducto(${index})">✕</button>
            </div>`;
    });
    totalElemento.innerText = `₡${total}`;
}

function eliminarProducto(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

function obtenerUbicacion() {
    const status = document.getElementById('status-geo');
    status.innerText = "Localizando...";
    navigator.geolocation.getCurrentPosition((pos) => {
        linkMapa = `https://www.google.com/maps?q=${pos.coords.latitude},${pos.coords.longitude}`;
        status.innerText = "Ubicación Guardada ✅";
        document.getElementById('btn-geo').style.background = "#e8f0fe";
    }, () => {
        status.innerText = "❌ Error de GPS";
    });
}

function enviarPedido() {
    if (carrito.length === 0) return alert("Agrega productos primero");
    let mensaje = "🛍️ *Nuevo Pedido - Onde los Pasteles*\n\n";
    carrito.forEach(p => mensaje += `- ${p.nombre} (₡${p.precio})\n`);
    mensaje += `\n*Total: ${document.getElementById('total-precio').innerText}*`;
    if (linkMapa !== "") mensaje += `\n\n📍 *Ubicación:* ${linkMapa}`;
    window.open(`https://wa.me/50671571325?text=${encodeURIComponent(mensaje)}`);
}

mostrarMenu();
