const productos = [
    { id: 1, nombre: "Vigorón Mixto", precio: 2500, desc: "Yuca, chicharrón y ensalada" },
    { id: 2, nombre: "Empanada Gigante", precio: 1500, desc: "Carne o Pollo" },
    { id: 3, nombre: "Enyucado", precio: 1200, desc: "Sabor tradicional" }
];

let carrito = [];
let linkMapa = "";

function mostrarMenu() {
    const contenedor = document.getElementById('menu-container');
    productos.forEach(p => {
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
}

function agregar(id) {
    const prod = productos.find(p => p.id === id);
    carrito.push(prod);
    actualizarCarrito();
}

function actualizarCarrito() {
    const lista = document.getElementById('lista-carrito');
    const totalElemento = document.getElementById('total-precio');
    lista.innerHTML = "";
    let total = 0;

    carrito.forEach((p, index) => {
        total += p.precio;
        lista.innerHTML += `<p>✅ ${p.nombre} - ₡${p.precio}</p>`;
    });
    totalElemento.innerText = `₡${total}`;
}

function obtenerUbicacion() {
    const status = document.getElementById('status-geo');
    if (!navigator.geolocation) {
        status.innerText = "GPS no soportado";
    } else {
        status.innerText = "Localizando...";
        navigator.geolocation.getCurrentPosition((pos) => {
            linkMapa = `https://www.google.com/maps?q=${pos.coords.latitude},${pos.coords.longitude}`;
            status.innerText = "✅ Ubicación guardada";
            document.getElementById('btn-geo').style.background = "#238636";
        });
    }
}

function enviarPedido() {
    if (carrito.length === 0) return alert("Agrega productos primero");
    
    let mensaje = "🛍️ *Nuevo Pedido - Onde los Pasteles*\n\n";
    carrito.forEach(p => mensaje += `- ${p.nombre} (₡${p.precio})\n`);
    mensaje += `\n*Total: ${document.getElementById('total-precio').innerText}*`;
    
    if (linkMapa !== "") {
        mensaje += `\n\n📍 *Ubicación de entrega:* ${linkMapa}`;
    }

    // CAMBIA EL NUMERO AQUÍ (Ejemplo: 50688888888)
    const tel = "50671571325"; 
    window.open(`https://wa.me/${tel}?text=${encodeURIComponent(mensaje)}`);
}

mostrarMenu();
