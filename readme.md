# Registro de Productos Informáticos (JAVASCRIPT-HTML-CSS)
![form](https://i.ibb.co/3RK3961/completo.png)


Este proyecto es una aplicación web sencilla que permite registrar productos informáticos, mostrando una lista de los productos registrados y permitiendo eliminarlos. También incluye un contador de los productos registrados.

## Detalle:

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

## Estructura del Website

- `index.html`: Archivo HTML principal.
- `styles.css`: Archivo CSS para los estilos de la página.
- `app.js`: Archivos JavaScript que contienen la lógica de la aplicación.
- `readme.md`: Este archivo de documentación.
- `carpeta img`: Donde se encuentra la imagen que se muestra en caso que no se ubique la imagen  especificada.
- `carpeta fonts`: Donde se encuentra guardado las fuentes

## Herramientas Usadas

### HTML
- Estructuración básica del formulario, lista de productos y contador.

### CSS
- Estilización de los elementos del formulario, tarjetas de productos y contador.

### JavaScript

1. Documento:

- `document.getElementById():` Utilizado para obtener elementos del DOM por su ID.

- `document.querySelector():` Utilizado para seleccionar elementos del DOM utilizando selectores de CSS.

2. Modificar Elemento: 

- `.textContent:` Propiedad utilizada para establecer o devolver el contenido de texto de un nodo.

- `.innerHTML:` Propiedad utilizada para establecer o devolver el contenido HTML de un elemento.

3.  Modificar estilo:

- `.style.propiedad:` Utilizado para modificar propiedades de estilo CSS directamente en un elemento.

- `.classList.add():` Añade una clase al elemento.

- `.classList.toggle():` Alterna una clase en el elemento.

5. crear elemento:

- `.createElement('p'):` Crea un nuevo elemento HTML especificado por su etiqueta.

6. Eventos:

- `addEventListener(evento, function):` Añade un manejador de eventos al elemento.

Funciones aplicadas al proyecto:

- `Registrar productos`
- `Eliminar productos`
- `Renderizar productos`
- `Abrir modal de edición`
- `Guardar cambios al editar un producto`

# CAPTURAS DE WEBSITE 

- **`FORMULARIO DE REGISTRO`**

![form](https://i.ibb.co/bLxH0zv/form-registrar.png)



- **`LISTA DE PRODUCTOS REGISTRADOS`**

![form](https://i.ibb.co/KyVXNp0/LISTA-DE-REGISTRADOS.png)


- **`CONTADOR DE PRODUCTOS REGISTRADOS`** 

![form](https://i.ibb.co/7CM6CYz/conteo.png)


# GIF DE WEBSITE

- **`REGISTRAR PRODUCTOS`**
![img](https://s12.gifyu.com/images/SYxN4.gif)


- **`EDITAR Y ELIMINAR PRODUCTOS`**
![form](https://i.ibb.co/YcbHPBW/EDIT-DELIT-online-video-cutter-com-1.gif)
