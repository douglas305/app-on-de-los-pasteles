const productos = [
    // --- CATEGORÍA: PASTELES ---
    { id: 1, categoria: "Pasteles", nombre: "Pastel de Pizza", precio: 1000, desc: "Sabor tradicional pizza" },
    { id: 2, categoria: "Pasteles", nombre: "Pastel Nacho", precio: 1000, desc: "Sabor nacho especial" },
    { id: 3, categoria: "Pasteles", nombre: "Pastel Arreglado", precio: 1500, desc: "Con ensalada y salsas" },
    { id: 4, categoria: "Pasteles", nombre: "Pastel Papa con Carne", precio: 1000, desc: "Relleno tradicional" },

    // --- CATEGORÍA: EMPANADAS ---
    { id: 5, categoria: "Empanadas", nombre: "Empanada Papa con Carne", precio: 1000, desc: "Crujiente y calientita" },
    { id: 6, categoria: "Empanadas", nombre: "Empanada Frijol y Chicharrón", precio: 1000, desc: "Combinación perfecta" },
    { id: 7, categoria: "Empanadas", nombre: "Empanada de Pinto", precio: 1000, desc: "Pinto 100% tico" },
    { id: 8, categoria: "Empanadas", nombre: "Empanada de Queso", precio: 1000, desc: "Mucho queso fundido" },
    { id: 9, categoria: "Empanadas", nombre: "Empanada Arreglada", precio: 1500, desc: "Con ensalada y salsas" },

    // --- CATEGORÍA: ENYUCADOS ---
    { id: 10, categoria: "Enyucados", nombre: "Enyucado de Carne", precio: 1300, desc: "Masa de yuca con carne" },
    { id: 11, categoria: "Enyucados", nombre: "Enyucado de Chicharrón", precio: 1300, desc: "Masa de yuca con chicharrón" },
    { id: 12, categoria: "Enyucados", nombre: "Enyucado Arreglado", precio: 1500, desc: "Con ensalada y salsas" },

    // --- CATEGORÍA: POLLO FRITO ---
    { id: 13, categoria: "Pollo Frito", nombre: "Cuarto y Muslo", precio: 1600, desc: "Pollo frito crujiente" },

    // --- CATEGORÍA: BEBIDAS NATURALES ---
    { id: 14, categoria: "Bebidas Naturales", nombre: "Mozote", precio: 1200, desc: "Refrescante natural" },
    { id: 15, categoria: "Bebidas Naturales", nombre: "Piña con Arroz", precio: 1200, desc: "Receta de la casa" },
    { id: 16, categoria: "Bebidas Naturales", nombre: "Naranja Zanahoria", precio: 1200, desc: "Vitamínico y fresco" },
    { id: 17, categoria: "Bebidas Naturales", nombre: "Flor de Jamaica", precio: 1200, desc: "Natural y fría" },
    { id: 18, categoria: "Bebidas Naturales", nombre: "Resbaladera Agua", precio: 1200, desc: "Sabor tradicional" },
    { id: 19, categoria: "Bebidas Naturales", nombre: "Resbaladera Leche", precio: 1500, desc: "Cremosa y dulce" },
    { id: 20, categoria: "Bebidas Naturales", nombre: "Horchata Agua", precio: 1200, desc: "Clásica" },
    { id: 21, categoria: "Bebidas Naturales", nombre: "Horchata Leche", precio: 1500, desc: "Muy cremosa" },
    { id: 22, categoria: "Bebidas Naturales", nombre: "Cas", precio: 1000, desc: "Ácido y refrescante" },
    { id: 23, categoria: "Bebidas Naturales", nombre: "Frutas", precio: 1000, desc: "Mezcla de frutas" },
    { id: 24, categoria: "Bebidas Naturales", nombre: "Té Frío", precio: 1000, desc: "Con limón" },

    // --- CATEGORÍA: GASEOSAS Y AGUA ---
    { id: 25, categoria: "Gaseosas y Agua", nombre: "Coca Cola 355ml", precio: 700, desc: "Lata fría" },
    { id: 26, categoria: "Gaseosas y Agua", nombre: "Botella de Agua", precio: 800, desc: "Hidratación pura" },

    // --- CATEGORÍA: CAFÉ ---
    { id: 27, categoria: "Café", nombre: "Café Negro", precio: 800, desc: "Café de exportación" },
    { id: 28, categoria: "Café", nombre: "Café con Leche", precio: 900, desc: "Calientito" },

    // --- CATEGORÍA: PROMOCIONES ---
    { id: 29, categoria: "Promociones (Después de 1pm)", nombre: "2x Empanadas", precio: 1500, desc: "Aplica en seleccionadas" },
    { id: 30, categoria: "Promociones (Después de 1pm)", nombre: "2x Pasteles", precio: 1500, desc: "Aplica en seleccionados" }
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
        const prods = productos.filter(p => p.categoria === categoria);
        
        prods.forEach(p => {
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
    carrito.push(prod);
    actualizarCarrito();
}

function actualizarCarrito() {
    const lista = document.getElementById('lista-carrito');
    const totalElemento = document.getElementById('total-precio');
    if(!lista || !totalElemento) return;
    lista.innerHTML = "";
    let total = 0;

    carrito.forEach((p, index) => {
        total += p.precio;
        lista.innerHTML += `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; background: rgba(255,255,255,0.1); padding: 8px; border-radius: 8px;">
                <span style="color: white;">✅ ${p.nombre} - ₡${p.precio}</span>
                <button onclick="eliminarProducto(${index})" style="background: #ff4d4d; color: white; border: none; border-radius: 5px; padding: 5px 10px; cursor: pointer; font-weight: bold;">X</button>
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
    if (!navigator.geolocation) {
        status.innerText = "GPS no soportado";
    } else {
        status.innerText = "Localizando...";
        navigator.geolocation.getCurrentPosition((pos) => {
            linkMapa = `https://www.google.com/maps?q=${pos.coords.latitude},${pos.coords.longitude}`;
            status.innerText = "✅ Ubicación guardada";
            document.getElementById('btn-geo').style.background = "#238636";
        }, () => {
            status.innerText = "❌ Error al obtener ubicación";
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

    const tel = "50671571325"; 
    window.open(`https://wa.me/${tel}?text=${encodeURIComponent(mensaje)}`);
}

mostrarMenu();
