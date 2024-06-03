document.getElementById('registrar').addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value;
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const imagen = document.getElementById('imagen').value;

    if (!nombre || !marca || !modelo || !imagen) {
        alert('Todos los campos son obligatorios');
        return;
    }

    const producto = {
        nombre,
        marca,
        modelo,
        imagen
    };

    addProducto(producto);

    document.getElementById('nombre').value = '';
    document.getElementById('marca').value = '';
    document.getElementById('modelo').value = '';
    document.getElementById('imagen').value = '';
});

let productos = [];
let editIndex = -1;

function addProducto(producto) {
    productos.push(producto);
    renderProductos();
}

function eliminarProducto(index) {
    productos.splice(index, 1);
    renderProductos();
}

function renderProductos() {
    const productosDiv = document.getElementById('productos-registrados');
    productosDiv.innerHTML = '';

    if (productos.length === 0) {
        document.getElementById('sin-productos').style.display = 'block';
    } else {
        document.getElementById('sin-productos').style.display = 'none';
    }

    productos.forEach((producto, index) => {
        const productoCard = document.createElement('div');
        productoCard.classList.add('producto-card');
        
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

        const textoDiv = document.createElement('div');
        textoDiv.classList.add('texto-div');
        
        const nombre = document.createElement('p');
        nombre.textContent = producto.nombre;
        nombre.classList.add('nombre-centrado');
        textoDiv.appendChild(nombre);

        const marcaTexto = document.createElement('p');
        marcaTexto.innerHTML = `<span class="txt-marca">Marca :</span> ${producto.marca}`;
        textoDiv.appendChild(marcaTexto);



        const modeloTexto = document.createElement('p');
        modeloTexto.innerHTML = `<span class="txt-marca">Modelo:</span> ${producto.modelo}`;
        textoDiv.appendChild(modeloTexto);

        productoCard.appendChild(textoDiv);

        const img = document.createElement('img');
        img.src = producto.imagen;
        img.alt = producto.nombre;
        img.onerror = function() {
            this.onerror = null;
            this.src = './img/notfound.png';
        };
        productoCard.appendChild(img);

        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.classList.add('eliminar');
        eliminarBtn.addEventListener('click', () => eliminarProducto(index));
        productoCard.appendChild(eliminarBtn);

        const editarBtn = document.createElement('button');
        editarBtn.textContent = 'Editar';
        editarBtn.classList.add('editar');
        editarBtn.addEventListener('click', () => abrirModal(index));
        productoCard.appendChild(editarBtn);

        productosDiv.appendChild(productoCard);
    });

    document.getElementById('conteo').textContent = productos.length;
}

document.getElementById('contar').addEventListener('click', function() {
    alert(`Número de productos registrados: ${productos.length}`);
    document.querySelector('#conteo').classList.toggle('highlight');
});

function abrirModal(index) {
    editIndex = index;
    const producto = productos[index];
    document.getElementById('editNombre').value = producto.nombre;
    document.getElementById('editMarca').value = producto.marca;
    document.getElementById('editModelo').value = producto.modelo;
    document.getElementById('editImagen').value = producto.imagen;
    document.getElementById('editModal').style.display = 'block';
}

document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('editModal').style.display = 'none';
});

document.getElementById('saveChanges').addEventListener('click', function() {
    const nombre = document.getElementById('editNombre').value;
    const marca = document.getElementById('editMarca').value;
    const modelo = document.getElementById('editModelo').value;
    const imagen = document.getElementById('editImagen').value;

    if (!nombre || !marca || !modelo || !imagen) {
        alert('Todos los campos son obligatorios');
        return;
    }

    productos[editIndex] = { nombre, marca, modelo, imagen };
    document.getElementById('editModal').style.display = 'none';
    renderProductos();
});

renderProductos();


