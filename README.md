# NOIR. — E-commerce Fashion Website

## Descripción del proyecto

NOIR. es un prototipo de una tienda de comercio electrónico enfocada en ropa, calzado y accesorios de diseñador. El proyecto fue desarrollado con HTML, CSS, Bootstrap y JavaScript y está compuesto por tres páginas enlazadas entre sí.

La primera página funciona como catálogo general de productos. La segunda muestra la información específica del producto seleccionado y permite elegir una talla y agregarlo al carrito. La tercera corresponde al checkout, donde se muestra el resumen de la compra y se simula el proceso de envío y pago.

## Tecnologías utilizadas

- HTML
- CSS
- JavaScript
- Bootstrap
- LocalStorage
- Visual Studio Code

## Funcionamiento

1. **Catálogo (`Noir.html`)**: muestra los diferentes productos disponibles y permite seleccionar cualquiera de ellos.
2. **Producto (`producto.html`)**: recibe la información del artículo seleccionado, muestra su imagen, marca, nombre y precio, y permite seleccionar una talla antes de agregarlo al carrito.
3. **Checkout (`checkout.html`)**: recibe la información del producto agregado al carrito y muestra el resumen de la compra. También incluye un formulario de información de envío y una simulación del proceso de pago.

JavaScript y LocalStorage permiten conservar la información del producto seleccionado durante la navegación entre las diferentes páginas.

## Prompt utilizado

> Genera el código HTML, CSS, JavaScript y Bootstrap para desarrollar un sitio web de e-commerce basado en los prototipos que te proporcioné. El sitio debe tener tres páginas enlazadas: una página principal con el catálogo de productos, una página para visualizar el producto seleccionado y elegir su talla, y una página de checkout. Cualquier producto del catálogo debe poder seleccionarse y su información, como imagen, marca, nombre, precio y talla, debe conservarse al pasar de una página a otra. El diseño debe ser responsivo y mantener el estilo visual de los prototipos.

## Archivos principales

```text
NOIR-Ecommerce/
├── Noir.html
├── producto.html
├── checkout.html
├── styles.css
├── producto.css
├── checkout.css
├── script.js
├── producto.js
├── checkout.js
└── imágenes y archivos de Bootstrap
```

## Conclusión

El desarrollo de este proyecto permitió transformar los prototipos realizados previamente en un sitio web funcional de comercio electrónico. Se desarrollaron tres páginas conectadas entre sí, haciendo posible seleccionar diferentes productos desde el catálogo, consultar la información de cada artículo, elegir una talla y continuar hasta un proceso de checkout.

Durante el proyecto se aplicaron conocimientos de HTML para estructurar las páginas, CSS y Bootstrap para crear el diseño y hacerlo responsivo, y JavaScript para agregar interactividad y conectar el funcionamiento de las diferentes páginas. También se utilizó LocalStorage para conservar la información del producto seleccionado durante la navegación. En conclusión, este proyecto permitió integrar los conocimientos aprendidos durante el curso y comprender mejor cómo diferentes tecnologías web pueden trabajar en conjunto para crear una experiencia de compra funcional e interactiva.

> **Nota:** El checkout es una simulación académica y no procesa pagos reales.
