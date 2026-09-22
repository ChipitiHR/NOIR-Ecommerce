// =====================================================
// OBTENER ELEMENTOS DEL HTML
// =====================================================

const products =
    document.querySelectorAll(".product-card");


const categories =
    document.querySelectorAll(".category");


const searchInput =
    document.getElementById("searchInput");


const sortProducts =
    document.getElementById("sortProducts");


const productGrid =
    document.getElementById("productGrid");



// =====================================================
// FILTRAR PRODUCTOS POR CATEGORÍA
// =====================================================

categories.forEach(categoryButton => {

    categoryButton.addEventListener("click", function () {


        // Quitar active de todos los botones

        categories.forEach(button => {

            button.classList.remove("active");

        });


        // Agregar active al seleccionado

        this.classList.add("active");


        // Obtener categoría seleccionada

        const selectedCategory =
            this.getAttribute("data-category");



        // Revisar todos los productos

        products.forEach(product => {

            const productCategory =
                product.getAttribute("data-category");


            if (
                selectedCategory === "all" ||
                selectedCategory === productCategory
            ) {

                product.style.display = "";

            }

            else {

                product.style.display = "none";

            }

        });

    });

});



// =====================================================
// BUSCADOR
// =====================================================

if (searchInput) {

    searchInput.addEventListener("input", function () {


        const search =
            searchInput.value.toLowerCase().trim();



        products.forEach(product => {


            const productText =
                product.textContent.toLowerCase();


            if (productText.includes(search)) {

                product.style.display = "";

            }

            else {

                product.style.display = "none";

            }

        });

    });

}



// =====================================================
// ORDENAR PRODUCTOS POR PRECIO
// =====================================================

if (sortProducts) {

    sortProducts.addEventListener("change", function () {


        const option =
            this.value;


        const productArray =
            Array.from(products);



        // PRECIO MENOR A MAYOR

        if (option === "low") {

            productArray.sort((a, b) => {

                return (
                    Number(a.dataset.price) -
                    Number(b.dataset.price)
                );

            });

        }



        // PRECIO MAYOR A MENOR

        else if (option === "high") {

            productArray.sort((a, b) => {

                return (
                    Number(b.dataset.price) -
                    Number(a.dataset.price)
                );

            });

        }



        // FEATURED
        // Regresa al orden original

        else {

            productArray.sort((a, b) => {

                return (
                    Array.from(products).indexOf(a) -
                    Array.from(products).indexOf(b)
                );

            });

        }



        // Volver a insertar los productos

        productArray.forEach(product => {

            productGrid.appendChild(product);

        });

    });

}



// =====================================================
// HACER CLIC EN CUALQUIER PRODUCTO
// =====================================================

const clickableProducts =
    document.querySelectorAll(".clickable-product");



clickableProducts.forEach(product => {


    product.addEventListener("click", function () {


        // Crear objeto con la información
        // del producto seleccionado

        const selectedProduct = {


            brand:
                this.dataset.brand,


            name:
                this.dataset.name,


            price:
                this.dataset.price,


            image:
                this.dataset.image,


            category:
                this.dataset.category

        };



        // Guardar información en localStorage

        localStorage.setItem(
            "selectedProduct",
            JSON.stringify(selectedProduct)
        );



        // Redirigir a la segunda página

        window.location.href =
            "producto.html";

    });

});



// =====================================================
// MOSTRAR PRODUCTO GUARDADO EN CONSOLA
// =====================================================
// Esto es únicamente para comprobar que funciona.
// Puedes abrir Inspeccionar > Console.

const savedProduct =
    localStorage.getItem("selectedProduct");


if (savedProduct) {

    console.log(
        "Producto seleccionado:",
        JSON.parse(savedProduct)
    );

}

