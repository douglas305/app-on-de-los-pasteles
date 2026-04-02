const productos = [
  { "id": 1, "nombre": "Empanada Gigante", "precio": 1500 },
  { "id": 2, "nombre": "Vigorón Mixto", "precio": 2500 },
  { "id": 3, "nombre": "Enyucado", "precio": 1200 },
  { "id": 4, "nombre": "Refresco Natural", "precio": 1000 }
];

let carrito = [];
let total = 0;

// Reemplaza estos números con los tuyos
const numerosWhatsApp = ["50671571325", "50677777777"]; 

function cargarMenu() {
    const contenedor = document.getElementById('menu-container');
    if(!contenedor) return; // Seguridad
    
    contenedor.innerHTML = ""; // Limpiar antes de cargar
    
    productos.forEach(p => {
        const div = document.createElement('div');
        div.className = 'producto';
        div.innerHTML = `
            <div>
                <strong>${p.nombre}</strong><br>
                ₡${p.precio}
            </div>
            <button onclick="agregarAlCarrito('${p.nombre}', ${p.precio})">Agregar</button>
        `;
        contenedor.appendChild(div);
    });
}

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;
    document.getElementById('total-precio').textContent = total;
    
    const lista = document.getElementById('lista-carrito');
    const li = document.createElement('li');
    li.textContent = `${nombre} - ₡${precio}`;
    lista.appendChild(li);
}

function enviarPedido() {
    if (carrito.length === 0) return alert("Carrito vacío");
    
    let texto = "Pedido Onde los Pasteles:\n";
    carrito.forEach(i => texto += `- ${i.nombre}\n`);
    texto += `Total: ₡${total}`;
    
    const num = numerosWhatsApp[Math.floor(Math.random() * numerosWhatsApp.length)];
    window.open(`https://wa.me/${num}?text=${encodeURIComponent(texto)}`, '_blank');
}

// ESTA LÍNEA ES LA QUE HACE QUE SE VEAN LOS PRODUCTOS:
window.onload = cargarMenu;