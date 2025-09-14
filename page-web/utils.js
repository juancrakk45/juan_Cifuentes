// --- DATOS ---
const productos = [
    {
        id: 1,
        nombre: "The Legend of Zelda: Tears of the Kingdom",
        precio: 69.99,
        imagen: "https://placehold.co/300x180/1e1e1e/00ff9d?text=Zelda",
        descripcion: "Únete a Link en una nueva aventura por las tierras de Hyrule y más allá."
    },
    {
        id: 2,
        nombre: "Elden Ring",
        precio: 59.99,
        imagen: "https://placehold.co/300x180/1e1e1e/ffcc00?text=Elden+Ring",
        descripcion: "Un RPG de mundo abierto creado por FromSoftware y George R.R. Martin."
    },
    {
        id: 3,
        nombre: "Dead by Daylight",
        precio: 53.98,
        imagen: "https://placehold.co/300x180/1e1e1e/ff5555?text=DbD",
        descripcion: "Un juego de terror multijugador asimétrico: ¿serás sobreviviente o asesino?"
    },
    {
        id: 4,
        nombre: "Hogwarts Legacy",
        precio: 59.99,
        imagen: "https://placehold.co/300x180/1e1e1e/8a2be2?text=Hogwarts",
        descripcion: "Vive tu propia aventura en el mundo mágico de Harry Potter."
    },
    {
        id: 5,
        nombre: "God of War Ragnarök",
        precio: 64.99,
        imagen: "https://placehold.co/300x180/1e1e1e/ff0000?text=GoW",
        descripcion: "Kratos y Atreus se enfrentan a dioses y bestias en el fin del mundo nórdico."
    },
    {
        id: 6,
        nombre: "Minecraft",
        precio: 29.99,
        imagen: "https://placehold.co/300x180/1e1e1e/00ccff?text=Minecraft",
        descripcion: "Explora, construye y sobrevive en un mundo de bloques infinito."
    },
    {
        id: 7,
        nombre: "Grand Theft Auto V",
        precio: 39.99,
        imagen: "https://placehold.co/300x180/1e1e1e/ffff00?text=GTA+V",
        descripcion: "Explora Los Santos en un sandbox lleno de acción y posibilidades."
    },
    {
        id: 8,
        nombre: "Resident Evil 4 Remake",
        precio: 59.99,
        imagen: "https://placehold.co/300x180/1e1e1e/008000?text=RE4",
        descripcion: "Revive la icónica historia de Leon S. Kennedy en un remake lleno de terror y acción."
    },
    {
        id: 9,
        nombre: "Fortnite",
        precio: 0.00,
        imagen: "https://placehold.co/300x180/1e1e1e/ff69b4?text=Fortnite",
        descripcion: "Battle Royale gratuito con eventos espectaculares y construcción estratégica."
    },
    {
        id: 10,
        nombre: "Cyberpunk 2077",
        precio: 49.99,
        imagen: "https://placehold.co/300x180/1e1e1e/00ffff?text=Cyberpunk",
        descripcion: "Sumérgete en Night City, una metrópolis futurista llena de peligros y tecnología."
    }
];


let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// --- UTILIDADES ---
function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function actualizarContadorCarrito() {
    const contador = document.getElementById('contador-carrito');
    if (contador) {
        const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
        contador.textContent = totalItems;
    }
}

function calcularTotal() {
    return carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0).toFixed(2);
}

// --- RENDERIZADO ---
function renderizarHeader() {
    return `
        <header>
            <h1>🎮 GameStore</h1>
            <nav>
                <a href="#inicio">Inicio</a>
                <a href="#carrito">🛒 Carrito (<span id="contador-carrito">0</span>)</a>
            </nav>
        </header>
    `;
}

function renderizarFooter() {
    return `
        <footer>
            <p>&copy; 2025 GameStore - Todos los derechos reservados</p>
        </footer>
    `;
}

function renderizarInicio() {
    return `
        <main>
            <section class="buscador">
                <input type="text" id="buscador" placeholder="Buscar juego...">
                <button onclick="buscarJuegos()">🔍 Buscar</button>
            </section>
            <section id="catalogo" class="catalogo">
                ${productos.map(p => `
                    <div class="tarjeta">
                        <img src="${p.imagen}" alt="${p.nombre}">
                        <h3>${p.nombre}</h3>
                        <p class="precio">$${p.precio.toFixed(2)}</p>
                        <button onclick="agregarAlCarrito(${p.id})">Agregar al carrito</button>
                        <button onclick="navegar('detalle/${p.id}')">Ver detalle</button>
                    </div>
                `).join('')}
            </section>
        </main>
    `;
}

function renderizarDetalle(id) {
    const producto = productos.find(p => p.id === id);
    if (!producto) {
        return `<main><p style="text-align:center; padding:3rem;">Producto no encontrado.</p></main>`;
    }
    return `
        <main>
            <section class="detalle-producto">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h2>${producto.nombre}</h2>
                <p class="precio">$${producto.precio.toFixed(2)}</p>
                <p>${producto.descripcion}</p>
                <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
                <button onclick="navegar('inicio')" style="margin-left:1rem;">← Volver</button>
            </section>
        </main>
    `;
}

function renderizarCarrito() {
    return `
        <main>
            <section class="lista-carrito">
                ${carrito.length === 0 
                    ? '<p style="text-align:center">El carrito está vacío.</p>' 
                    : carrito.map(item => `
                        <div class="item-carrito">
                            <div>
                                <h4>${item.nombre}</h4>
                                <p>$${item.precio.toFixed(2)} x ${item.cantidad}</p>
                            </div>
                            <button onclick="eliminarDelCarrito(${item.id})">🗑️ Eliminar</button>
                        </div>
                    `).join('')
                }
            </section>
            <div class="total">
                <h3>Total: $<span id="total-carrito">${calcularTotal()}</span></h3>
                <button onclick="vaciarCarrito()">Vaciar Carrito</button>
                <button onclick="finalizarCompra()">Finalizar Compra</button>
            </div>
        </main>
    `;
}

function renderizarPagina(ruta) {
    let contenido = '';
    
    if (ruta === 'inicio' || ruta === '') {
        contenido = renderizarInicio();
    } else if (ruta.startsWith('detalle/')) {
        const id = parseInt(ruta.split('/')[1]);
        contenido = renderizarDetalle(id);
    } else if (ruta === 'carrito') {
        contenido = renderizarCarrito();
    } else {
        contenido = `<main><p style="text-align:center; padding:3rem;">Página no encontrada.</p></main>`;
    }

    document.getElementById('app').innerHTML = `
        ${renderizarHeader()}
        ${contenido}
        ${renderizarFooter()}
    `;

    // Actualizar contador después de renderizar
    actualizarContadorCarrito();

    // Si es carrito, actualizar total
    if (ruta === 'carrito') {
        document.getElementById('total-carrito').textContent = calcularTotal();
    }
}

// --- FUNCIONES DEL CARRITO ---
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    if (!producto) return;

    const itemExistente = carrito.find(item => item.id === id);
    if (itemExistente) {
        itemExistente.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    guardarCarrito();
    actualizarContadorCarrito();
    alert(`${producto.nombre} agregado al carrito.`);
}

function eliminarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    guardarCarrito();
    actualizarContadorCarrito();
    renderizarPagina('carrito'); // Re-renderizar carrito
}

function vaciarCarrito() {
    carrito = [];
    guardarCarrito();
    actualizarContadorCarrito();
    renderizarPagina('carrito');
}

function finalizarCompra() {
    if (carrito.length === 0) {
        alert('El carrito está vacío.');
        return;
    }
    alert(`✅ ¡Compra finalizada!\nTotal: $${calcularTotal()}\nGracias por su compra.`);
    vaciarCarrito();
}

// --- NAVEGACIÓN ---
function navegar(ruta) {
    window.location.hash = ruta;
    renderizarPagina(ruta);
}

function buscarJuegos() {
    const input = document.getElementById('buscador');
    const termino = input.value.toLowerCase().trim();
    if (!termino) {
        renderizarPagina('inicio');
        return;
    }

    const resultados = productos.filter(p => 
        p.nombre.toLowerCase().includes(termino)
    );

    const catalogo = document.getElementById('catalogo');
    if (catalogo) {
        catalogo.innerHTML = resultados.map(p => `
            <div class="tarjeta">
                <img src="${p.imagen}" alt="${p.nombre}">
                <h3>${p.nombre}</h3>
                <p class="precio">$${p.precio.toFixed(2)}</p>
                <button onclick="agregarAlCarrito(${p.id})">Agregar al carrito</button>
                <button onclick="navegar('detalle/${p.id}')">Ver detalle</button>
            </div>
        `).join('');
    }
}

// --- INICIALIZACIÓN ---
function init() {
    // Manejar cambios en la URL (hash)
    window.addEventListener('hashchange', () => {
        const ruta = window.location.hash.replace('#', '') || 'inicio';
        renderizarPagina(ruta);
    });

    // Cargar página inicial
    const rutaInicial = window.location.hash.replace('#', '') || 'inicio';
    renderizarPagina(rutaInicial);

    // Actualizar contador al cargar
    actualizarContadorCarrito();
}

// Iniciar app cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', init);
