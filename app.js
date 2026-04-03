const menu = [
    { id: 1, categoria: "PASTELES", nombre: "Pastel de Pizza", desc: "Sabor tradicional pizza", precio: 1000 },
    { id: 2, categoria: "PASTELES", nombre: "Pastel Nacho", desc: "Sabor nacho especial", precio: 1000 },
    { id: 3, categoria: "PASTELES", nombre: "Pastel Pollo", desc: "Pollo mechado premium", precio: 1000 },
    { id: 4, categoria: "EMPANADAS", nombre: "Empanada de Queso", desc: "Queso tico fresco", precio: 800 }
];

let pedido = [];

function cargarMenu() {
    const container = document.getElementById('categorias-container');
    const categorias = [...new Set(menu.map(p => p.categoria))];

    container.innerHTML = '';
    categorias.forEach(cat => {
        let html = `<h2 class="categoria-titulo">${cat}</h2>`;
        menu.filter(p => p.categoria === cat).forEach(prod => {
            html += `
                <div class="producto-card">
                    <div class="info-prod">
                        <h3>${prod.nombre}</h3>
                        <p>${prod.desc}</p>
                        <span class="precio">₡${prod.precio}</span>
                    </div>
                    <button class="btn-mas" onclick="agregar(${prod.id})">+</button>
                </div>`;
        });
        container.innerHTML += html;
    });
}

function agregar(id) {
    const p = menu.find(prod => prod.id === id);
    pedido.push({...p});
    actualizarCarrito();
}

// ESTA ES LA FUNCIÓN QUE BORRA CON LA "X"
function borrarItem(index) {
    pedido.splice(index, 1);
    actualizarCarrito();
}

function actualizarCarrito() {
    const lista = document.getElementById('items-pedido');
    const totalSpan = document.getElementById('monto-total');
    let total = 0;

    lista.innerHTML = '';
    pedido.forEach((item, index) => {
        total += item.precio;
        lista.innerHTML += `
            <div class="item-carrito">
                <span>✅ ${item.nombre}</span>
                <span>₡${item.precio} <button class="btn-borrar" onclick="borrarItem(${index})">X</button></span>
            </div>`;
    });
    totalSpan.innerText = total;
}

window.onload = cargarMenu;
