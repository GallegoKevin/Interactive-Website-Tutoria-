# Registro de Productos Informáticos (JAVASCRIPT-HTML-CSS)

Este proyecto es una aplicación web sencilla que permite registrar productos informáticos, mostrando una lista de los productos registrados y permitiendo eliminarlos. También incluye un contador de los productos registrados.

## Descripción

La aplicación consta de un formulario para registrar productos informáticos con los siguientes campos:
- Nombre
- Marca
- Modelo
- Imagen (ruta o link)

Los productos registrados se muestran en tarjetas (cards) con la opción de `eliminar` y `editar` cada producto. Además, se muestra un contador de productos registrados que se actualiza en tiempo real y un mensaje de "No hay productos registrados" cuando la lista está vacía.

## Funcionalidades

- Registro de productos con validación de campos vacíos.
- Visualización de productos registrados en tarjetas con la imagen especificada.
- Eliminación de productos registrados.
- Edición de productos registrados.
- Contador de productos registrados.
- Mensaje de "No hay productos registrados" cuando la lista está vacía.

## Estructura del Proyecto

- `index.html`: Archivo HTML principal.
- `styles.css`: Archivo CSS para los estilos de la página.
- `app.js`: Archivos JavaScript que contienen la lógica de la aplicación.
- `readme.md`: Este archivo de documentación.
- `carpeta img`: Donde se encuentra la imagen que se muestra en caso que no se ubique la imagen  especificada.

## Comandos y Herramientas Usadas

### HTML
- Estructuración básica del formulario, lista de productos y contador.

### CSS
- Estilización de los elementos del formulario, tarjetas de productos y contador.

### JavaScript

- document.getElementById(): Utilizado para obtener elementos del DOM por su ID.
 ```javascript
  const nombre = document.getElementById('nombre').value;
```
- document.querySelector(): Utilizado para seleccionar elementos del DOM utilizando selectores de CSS.
```javascript
    document.querySelector('#conteo').classList.toggle('highlight');
```
- .textContent: Propiedad utilizada para establecer o devolver el contenido de texto de un nodo.
```javascript
    titulo.textContent = `${index + 1}° Producto`;
```
- .innerHTML: Propiedad utilizada para establecer o devolver el contenido HTML de un elemento.
```javascript
    productosDiv.innerHTML = '';
```
- .style.propiedad: Utilizado para modificar propiedades de estilo CSS directamente en un elemento.
```javascript
    titulo.style.color = '#fff';
```
- .classList.add(): Añade una clase al elemento.
```javascript
    productoCard.classList.add('producto-card');
```
- .classList.remove(): Elimina una clase del elemento.
```javascript
    document.getElementById('sin-productos').classList.remove('show');
```
- .classList.toggle(): Alterna una clase en el elemento.
```javascript
    document.querySelector('#conteo').classList.toggle('highlight');
```
- .createElement('p'): Crea un nuevo elemento HTML especificado por su etiqueta.
```javascript
    const titulo = document.createElement('p');
```
- addEventListener(evento, function): Añade un manejador de eventos al elemento.
```javascript
  eliminarBtn.addEventListener('click', () => eliminarProducto(index));
```
- DOM Traversing: Navegación entre elementos del DOM.
```javascript
const child = document.querySelector('#someElement').children[0];
const parent = document.querySelector('#someElement').parentElement;

```
Funciones aplicadas al proyecto:

- Registrar productos
- Eliminar productos
- Renderizar productos
- Abrir modal de edición
- Guardar cambios al editar un producto

# CAPTURAS DE WEBSITE 

- **`FORMULARIO DE REGISTRO`**

![form](https://i.ibb.co/bLxH0zv/form-registrar.png)



- **`LISTA DE PRODUCTOS REGISTRADOS`**

![form](https://i.ibb.co/KyVXNp0/LISTA-DE-REGISTRADOS.png)


- **`CONTADOR DE PRODUCTOS REGISTRADOS`** 

![form](https://i.ibb.co/7CM6CYz/conteo.png)