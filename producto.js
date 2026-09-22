// =====================================================
// PRODUCTO POR DEFECTO
// =====================================================
//
// Si abres producto.html directamente,
// se mostrará Golden Goose.
//
// Si llegas desde Noir.html,
// se mostrará el producto que seleccionaste.
// =====================================================

const defaultProduct = {

    brand: "GOLDEN GOOSE",

    name: "Super-Star Leather Sneakers",

    price: 530,

    image: "GoldenRed.avif",

    category: "sneakers"

};



// =====================================================
// OBTENER PRODUCTO SELECCIONADO
// =====================================================

let product = defaultProduct;


const savedProduct =
    localStorage.getItem("selectedProduct");


if (savedProduct) {

    try {

        const parsedProduct =
            JSON.parse(savedProduct);


        if (parsedProduct) {

            product = {

                ...defaultProduct,

                ...parsedProduct

            };

        }

    }

    catch (error) {

        console.log(
            "No se pudo cargar el producto seleccionado."
        );

    }

}



// =====================================================
// ELEMENTOS DEL HTML
// =====================================================

const productBrand =
    document.getElementById("productBrand");


const productName =
    document.getElementById("productName");


const productPrice =
    document.getElementById("productPrice");


const breadcrumbProduct =
    document.getElementById("breadcrumbProduct");


const mainProductImage =
    document.getElementById("mainProductImage");


const sizeButtons =
    document.querySelectorAll(".size-button");


const sizeMessage =
    document.getElementById("sizeMessage");


const addToBag =
    document.getElementById("addToBag");


const cartCounter =
    document.getElementById("cartCounter");


const wishlistButton =
    document.getElementById("wishlistButton");



// =====================================================
// MOSTRAR MARCA
// =====================================================

if (productBrand) {

    productBrand.textContent =
        product.brand;

}



// =====================================================
// MOSTRAR NOMBRE
// =====================================================

if (productName) {

    productName.textContent =
        product.name;

}



// =====================================================
// MOSTRAR PRECIO
// =====================================================

if (productPrice) {

    productPrice.textContent =
        "$" +
        Number(product.price).toLocaleString("en-US");

}



// =====================================================
// BREADCRUMB
// =====================================================

if (breadcrumbProduct) {

    breadcrumbProduct.textContent =
        product.name;

}



// =====================================================
// MOSTRAR UNA SOLA IMAGEN
// =====================================================

if (mainProductImage) {

    mainProductImage.src =
        product.image;


    mainProductImage.alt =
        product.name;

}



// =====================================================
// SELECCIÓN DE TALLA
// =====================================================

let selectedSize = null;


sizeButtons.forEach(function (button) {


    button.addEventListener(
        "click",
        function () {


            // Quitar selección anterior

            sizeButtons.forEach(
                function (sizeButton) {

                    sizeButton.classList.remove(
                        "active"
                    );

                }
            );



            // Seleccionar talla actual

            this.classList.add(
                "active"
            );


            selectedSize =
                this.dataset.size;



            // Quitar mensaje de error

            if (sizeMessage) {

                sizeMessage.style.display =
                    "none";

            }


        }
    );


});



// =====================================================
// CARGAR CARRITO
// =====================================================

let cart = [];


const savedCart =
    localStorage.getItem("noirCart");


if (savedCart) {

    try {

        cart =
            JSON.parse(savedCart) || [];

    }

    catch (error) {

        cart = [];

    }

}



// =====================================================
// CONTADOR DEL CARRITO
// =====================================================

if (cartCounter) {

    cartCounter.textContent =
        cart.length;

}



// =====================================================
// ADD TO BAG
// =====================================================

if (addToBag) {


    addToBag.addEventListener(
        "click",
        function () {


            // ==========================================
            // COMPROBAR TALLA
            // ==========================================

            if (!selectedSize) {


                if (sizeMessage) {

                    sizeMessage.style.display =
                        "block";

                }


                return;

            }



            // ==========================================
            // CREAR PRODUCTO PARA EL CARRITO
            // ==========================================

            const cartProduct = {


                brand:
                    product.brand,


                name:
                    product.name,


                price:
                    Number(product.price),


                image:
                    product.image,


                size:
                    selectedSize,


                quantity:
                    1


            };



            // ==========================================
            // AGREGAR PRODUCTO
            // ==========================================

            cart.push(
                cartProduct
            );



            // ==========================================
            // GUARDAR CARRITO
            // ==========================================

            localStorage.setItem(

                "noirCart",

                JSON.stringify(cart)

            );



            // ==========================================
            // GUARDAR PRODUCTO PARA CHECKOUT
            // ==========================================

            localStorage.setItem(

                "checkoutProduct",

                JSON.stringify(cartProduct)

            );



            // ==========================================
            // ACTUALIZAR CONTADOR
            // ==========================================

            if (cartCounter) {

                cartCounter.textContent =
                    cart.length;

            }



            // ==========================================
            // CAMBIAR TEXTO
            // ==========================================

            addToBag.textContent =
                "ADDED TO BAG";



            // ==========================================
            // IR A CHECKOUT
            // ==========================================

            setTimeout(
                function () {

                    window.location.href =
                        "checkout.html";

                },

                500
            );


        }
    );


}



// =====================================================
// WISHLIST
// =====================================================

if (wishlistButton) {


    wishlistButton.addEventListener(
        "click",
        function () {


            this.classList.toggle(
                "active"
            );



            const icon =
                this.querySelector("i");


            const text =
                this.querySelector("span");



            // AGREGADO

            if (
                this.classList.contains("active")
            ) {


                if (icon) {

                    icon.classList.remove(
                        "bi-heart"
                    );


                    icon.classList.add(
                        "bi-heart-fill"
                    );

                }


                if (text) {

                    text.textContent =
                        "ADDED TO WISHLIST";

                }


            }


            // ELIMINADO

            else {


                if (icon) {

                    icon.classList.remove(
                        "bi-heart-fill"
                    );


                    icon.classList.add(
                        "bi-heart"
                    );

                }


                if (text) {

                    text.textContent =
                        "WISHLIST";

                }


            }


        }
    );


}



// =====================================================
// COMPROBACIÓN
// =====================================================

console.log(
    "Producto seleccionado:",
    product
);