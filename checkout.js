// =====================================================
// PRODUCTO POR DEFECTO
// =====================================================

const defaultProduct = {

    brand: "GOLDEN GOOSE",

    name: "Super-Star Leather Sneakers",

    price: 530,

    image: "GoldenRed.avif",

    size: "S",

    quantity: 1

};


// =====================================================
// OBTENER PRODUCTO DE LA PÁGINA 2
// =====================================================

let product = defaultProduct;


const savedProduct =
    localStorage.getItem("checkoutProduct");


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
            "No se pudo cargar el producto."
        );

    }

}


// =====================================================
// ELEMENTOS DEL RESUMEN
// =====================================================

const summaryImage =
    document.getElementById("summaryImage");


const summaryBrand =
    document.getElementById("summaryBrand");


const summaryName =
    document.getElementById("summaryName");


const summarySize =
    document.getElementById("summarySize");


const subtotal =
    document.getElementById("subtotal");


const total =
    document.getElementById("total");


const cartCounter =
    document.getElementById("cartCounter");


// =====================================================
// MOSTRAR PRODUCTO
// =====================================================

summaryImage.src =
    product.image;


summaryImage.alt =
    product.name;


summaryBrand.textContent =
    product.brand;


summaryName.textContent =
    product.name;


summarySize.textContent =
    "Size: " + product.size;


const formattedPrice =
    "$" +
    Number(product.price).toLocaleString("en-US");


subtotal.textContent =
    formattedPrice;


total.textContent =
    formattedPrice;


// =====================================================
// CONTADOR DEL CARRITO
// =====================================================

const cart =
    JSON.parse(
        localStorage.getItem("noirCart")
    ) || [];


cartCounter.textContent =
    cart.length || 1;


// =====================================================
// SHIPPING
// =====================================================

const shippingForm =
    document.getElementById("shippingForm");


const paymentForm =
    document.getElementById("paymentForm");


const shippingStep =
    document.getElementById("shippingStep");


const paymentStep =
    document.getElementById("paymentStep");


const backToShipping =
    document.getElementById("backToShipping");


const orderConfirmation =
    document.getElementById("orderConfirmation");


// =====================================================
// CONTINUE TO PAYMENT
// =====================================================

shippingForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        // Ocultar Shipping

        shippingForm.style.display =
            "none";


        // Mostrar Payment

        paymentForm.style.display =
            "block";


        // Cambiar indicador

        shippingStep.classList.remove(
            "active"
        );


        paymentStep.classList.add(
            "active"
        );


        window.scrollTo({
            top: 100,
            behavior: "smooth"
        });

    }
);


// =====================================================
// VOLVER A SHIPPING
// =====================================================

backToShipping.addEventListener(
    "click",
    function () {


        paymentForm.style.display =
            "none";


        shippingForm.style.display =
            "block";


        paymentStep.classList.remove(
            "active"
        );


        shippingStep.classList.add(
            "active"
        );

    }
);


// =====================================================
// FORMATO DEL NÚMERO DE TARJETA
// =====================================================

const cardNumber =
    document.getElementById("cardNumber");


cardNumber.addEventListener(
    "input",
    function () {


        let value =
            this.value.replace(/\D/g, "");


        value =
            value.substring(0, 16);


        const groups =
            value.match(/.{1,4}/g);


        this.value =
            groups ? groups.join(" ") : "";

    }
);


// =====================================================
// FECHA DE EXPIRACIÓN
// =====================================================

const expiration =
    document.getElementById("expiration");


expiration.addEventListener(
    "input",
    function () {


        let value =
            this.value.replace(/\D/g, "");


        value =
            value.substring(0, 4);


        if (value.length >= 3) {

            value =
                value.substring(0, 2) +
                "/" +
                value.substring(2);

        }


        this.value =
            value;

    }
);


// =====================================================
// CVV SOLO NÚMEROS
// =====================================================

const cvv =
    document.getElementById("cvv");


cvv.addEventListener(
    "input",
    function () {

        this.value =
            this.value
                .replace(/\D/g, "")
                .substring(0, 4);

    }
);


// =====================================================
// PLACE ORDER
// =====================================================

paymentForm.addEventListener(
    "submit",
    function (event) {


        event.preventDefault();


        // Esto es únicamente una simulación.
        // No se procesa ningún pago real.


        paymentForm.style.display =
            "none";


        orderConfirmation.style.display =
            "block";


        // Vaciar carrito

        localStorage.removeItem(
            "noirCart"
        );


        localStorage.removeItem(
            "checkoutProduct"
        );


        cartCounter.textContent =
            "0";


        window.scrollTo({
            top: 100,
            behavior: "smooth"
        });

    }
);


// =====================================================
// COMPROBACIÓN
// =====================================================

console.log(
    "Producto en checkout:",
    product
);