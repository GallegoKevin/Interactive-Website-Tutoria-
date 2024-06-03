// Evento para el botón 'Registrar'
document.getElementById('registrar').addEventListener('click', function() {

    // Obtener los valores de los campos de entrada
    const nombre = document.getElementById('nombre').value;
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const imagen = document.getElementById('imagen').value;

    // Comprobar si algún campo está vacío
    if (!nombre || !marca || !modelo || !imagen) {
        alert('Todos los campos son obligatorios'); // Alertar al usuario que complete todos los campos
        return;
    }

    // Crear un objeto producto
    const producto = {
        nombre,
        marca,
        modelo,
        imagen
    };

    // Agregar el producto a la lista
    addProducto(producto);

    // Limpiar los campos de entrada
    document.getElementById('nombre').value = '';
    document.getElementById('marca').value = '';
    document.getElementById('modelo').value = '';
    document.getElementById('imagen').value = '';
});

// Array para almacenar productos
let productos = [];
// Índice del producto que se está editando
let editIndex = -1;

// Función para agregar un producto a la lista
function addProducto(producto) {
    productos.push(producto);
    renderProductos();
}

// Función para eliminar un producto de la lista
function eliminarProducto(index) {
    productos.splice(index, 1);
    renderProductos();
}

// Función para renderizar productos en la página web
function renderProductos() {
    const productosDiv = document.getElementById('productos-registrados');
    productosDiv.innerHTML = '';

    // Mostrar mensaje si no hay productos
    if (productos.length === 0) {
        document.getElementById('sin-productos').style.display = 'block';
    } else {
        document.getElementById('sin-productos').style.display = 'none';
    }

    // Iterar a través del array de productos
    productos.forEach((producto, index) => {
        // Crear elementos HTML para cada producto
        const productoCard = document.createElement('div');
        productoCard.classList.add('producto-card');
        
        // Crear elemento título
        const titulo = document.createElement('p');
        titulo.textContent = `${index + 1}° Producto`; 
        titulo.style.background = 'linear-gradient(to right, rgb(80 92 141), rgb(77 170 141))'; 
        titulo.style.borderRadius = '5px';
        titulo.style.padding = '5px'; 
        titulo.style.color = '#fff'; 
        titulo.style.fontSize = '1rem';
        titulo.style.textAlign = 'center'; 
        titulo.style.boxShadow = '2px 2px 4px rgba(238, 255, 254)';
        titulo.style.marginBottom = '10px'; 
        productoCard.appendChild(titulo);

        // Crear div para los detalles del producto
        const textoDiv = document.createElement('div');
        textoDiv.classList.add('texto-div');
        
        // Crear elemento para el nombre del producto
        const nombre = document.createElement('p');
        nombre.textContent = producto.nombre;
        nombre.classList.add('nombre-centrado');
        textoDiv.appendChild(nombre);

        // Crear elemento para la marca del producto
        const marcaTexto = document.createElement('p');
        marcaTexto.innerHTML = `<span class="txt-marca">Marca :</span> ${producto.marca}`;
        textoDiv.appendChild(marcaTexto);

        // Crear elemento para el modelo del producto
        const modeloTexto = document.createElement('p');
        modeloTexto.innerHTML = `<span class="txt-marca">Modelo:</span> ${producto.modelo}`;
        textoDiv.appendChild(modeloTexto);

        productoCard.appendChild(textoDiv);

        // Crear elemento de imagen para el producto
        const img = document.createElement('img');
        img.src = producto.imagen;
        img.alt = producto.nombre;
        img.onerror = function() {
            this.onerror = null;
            this.src = './img/notfound.png';
        };
        productoCard.appendChild(img);

        // Crear botón de eliminar para el producto
        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.classList.add('eliminar');
        eliminarBtn.addEventListener('click', () => eliminarProducto(index));
        productoCard.appendChild(eliminarBtn);

        // Crear botón de editar para el producto
        const editarBtn = document.createElement('button');
        editarBtn.textContent = 'Editar';
        editarBtn.classList.add('editar');
        editarBtn.addEventListener('click', () => abrirModal(index));
        productoCard.appendChild(editarBtn);

        // Agregar la tarjeta del producto al contenedor de productos
        productosDiv.appendChild(productoCard);
    });

    // Actualizar visualización de cantidad de productos
    document.getElementById('conteo').textContent = productos.length;
}

// Evento para el botón 'Contar'
document.getElementById('contar').addEventListener('click', function() {
    alert(`Número de productos registrados: ${productos.length}`); 
    document.querySelector('#conteo').classList.toggle('highlight');
});

// Función para abrir el modal de edición para un producto
function abrirModal(index) {
    editIndex = index;
    const producto = productos[index];
    // Rellenar los campos del modal de edición con los detalles del producto
    document.getElementById('editNombre').value = producto.nombre;
    document.getElementById('editMarca').value = producto.marca;
    document.getElementById('editModelo').value = producto.modelo;
    document.getElementById('editImagen').value = producto.imagen;
    document.getElementById('editModal').style.display = 'block'; 
}

// Evento para cerrar el modal de edición
document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('editModal').style.display = 'none'; 
});

// Evento para guardar los cambios realizados en el modal de edición

document.getElementById('saveChanges').addEventListener('click', function() {
    
    // Obtener los valores editados de los campos de entrada
    const nombre = document.getElementById('editNombre').value;
    const marca = document.getElementById('editMarca').value;
    const modelo = document.getElementById('editModelo').value;
    const imagen = document.getElementById('editImagen').value;

    // Comprobar si algún campo está vacío
    if (!nombre || !marca || !modelo || !imagen) {
        alert('Todos los campos son obligatorios'); // Alertar al usuario que complete todos los campos
        return;
    }

    // Actualizar detalles del producto en el array
    productos[editIndex] = { nombre, marca, modelo, imagen };
    document.getElementById('editModal').style.display = 'none'; // Ocultar el modal 
    renderProductos(); // Renderizar la lista de productos actualizada
});

// Renderizar los productos inicialmente
renderProductos();

