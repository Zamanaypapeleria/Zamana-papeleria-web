// =========================================================
// PRODUCTO - ZAMANA Y PAPELERÍA
// =========================================================


// =========================================================
// PRODUCTOS
// =========================================================

const listaProductos =
    window.productos || [];


// =========================================================
// PRODUCTO ACTUAL
// =========================================================

const parametros =
    new URLSearchParams(
        window.location.search
    );


const idProducto =
    parametros.get("id");


let producto =
    listaProductos.find(

        function (item) {

            return item.id === idProducto;

        }

    );


if (
    !producto
    &&
    listaProductos.length > 0
) {

    producto =
        listaProductos[0];

}


// =========================================================
// RUTA DE IMÁGENES
//
// productos.js guarda:
// assets/images/accesorios/estrellaclip.jpeg
//
// producto.html está dentro de /pages,
// por eso aquí agregamos ../
// =========================================================

function rutaImagenPagina(ruta) {

    if (!ruta) {

        return "";

    }


    if (
        ruta.startsWith("http://")
        ||
        ruta.startsWith("https://")
        ||
        ruta.startsWith("data:")
        ||
        ruta.startsWith("/")
    ) {

        return ruta;

    }


    return "../" + ruta;

}


// =========================================================
// PRECIOS
// =========================================================

function formatearPrecio(precio) {

    if (
        precio === null
        ||
        precio === undefined
    ) {

        return "Precio a cotizar";

    }


    return "$"
        +
        Math.round(precio)
            .toLocaleString(
                "es-CO"
            );

}


function textoPrecio(producto) {

    if (
        producto.precioDetal === null
        ||
        producto.precioDetal === undefined
    ) {

        return "Precio a cotizar";

    }


    if (
        producto.precioDesde === true
    ) {

        return "Desde "
            +
            formatearPrecio(
                producto.precioDetal
            );

    }


    return formatearPrecio(
        producto.precioDetal
    );

}


function calcularPrecioEmprendedor(
    producto
) {

    if (
        producto.aplicaDescuentoEmprendedor
        ===
        false
    ) {

        return null;

    }


    if (
        producto.precioDetal === null
        ||
        producto.precioDetal === undefined
    ) {

        return null;

    }


    return Math.round(

        producto.precioDetal
        *
        0.70

    );

}


// =========================================================
// ELEMENTOS DEL HTML
// =========================================================

const productName =
    document.getElementById(
        "productName"
    );


const productPrice =
    document.getElementById(
        "productPrice"
    );


const productWholesale =
    document.getElementById(
        "productWholesale"
    );


const productCategory =
    document.getElementById(
        "productCategory"
    );


const productSubcategory =
    document.getElementById(
        "productSubcategory"
    );


const productCategoryLink =
    document.getElementById(
        "productCategoryLink"
    );


const productPresentation =
    document.getElementById(
        "productPresentation"
    );


const productDescription =
    document.getElementById(
        "productDescription"
    );


const variantsSection =
    document.getElementById(
        "variantsSection"
    );


const variantButtons =
    document.getElementById(
        "variantButtons"
    );


const quantityElement =
    document.getElementById(
        "quantity"
    );


const mainProductImage =
    document.getElementById(
        "mainProductImage"
    );


const productThumbnails =
    document.getElementById(
        "productThumbnails"
    );


const recommendationGrid =
    document.getElementById(
        "recommendationGrid"
    );


const addToListButton =
    document.getElementById(
        "addToListButton"
    );


// =========================================================
// NOMBRES DE CATEGORÍAS
// =========================================================

const nombresCategorias = {

    belleza:
        "Belleza",

    papeleria:
        "Papelería",

    accesorios:
        "Accesorios",

    cajas:
        "Cajas"

};


// =========================================================
// MOSTRAR INFORMACIÓN DEL PRODUCTO
// =========================================================

if (producto) {

    productName.textContent =
        producto.nombre;


    productPrice.textContent =
        textoPrecio(
            producto
        );


    const precioEmprendedor =
        calcularPrecioEmprendedor(
            producto
        );


    if (
        precioEmprendedor !== null
    ) {

        productWholesale.textContent =

            "Precio emprendedor (-30%): "
            +
            formatearPrecio(
                precioEmprendedor
            );

    } else {

        productWholesale.textContent =
            "";

    }


    productCategory.textContent =
        nombresCategorias[
            producto.categoria
        ]
        ||
        producto.categoria;


    productSubcategory.textContent =
        producto.subcategoria;


    productCategoryLink.textContent =
        nombresCategorias[
            producto.categoria
        ]
        ||
        producto.categoria;


    productCategoryLink.href =

        "catalogo.html?categoria="
        +
        producto.categoria;


    productPresentation.textContent =

        "Presentación: "
        +
        producto.presentacion;


    productDescription.textContent =

        producto.descripcion

        ||

        "Consulta disponibilidad, colores, diseños o presentaciones disponibles por WhatsApp.";

}


// =========================================================
// GALERÍA
// =========================================================

function mostrarImagenPrincipal(
    ruta
) {

    mainProductImage.innerHTML = `

        <img
            src="${rutaImagenPagina(ruta)}"
            alt="${producto.nombre}"
        >

    `;

}


function cargarGaleria() {

    productThumbnails.innerHTML =
        "";


    // -----------------------------------------------------
    // SIN IMÁGENES
    // -----------------------------------------------------

    if (
        !producto.imagenes
        ||
        producto.imagenes.length === 0
    ) {

        mainProductImage.textContent =
            "Imagen pendiente";


        productThumbnails.style.display =
            "none";


        return;

    }


    // -----------------------------------------------------
    // PRIMERA IMAGEN
    // -----------------------------------------------------

    mostrarImagenPrincipal(
        producto.imagenes[0]
    );


    // -----------------------------------------------------
    // MINIATURAS
    // -----------------------------------------------------

    productThumbnails.style.display =
        "flex";


    producto.imagenes.forEach(

        function (
            imagen,
            index
        ) {

            const boton =
                document.createElement(
                    "button"
                );


            boton.type =
                "button";


            boton.className =
                "thumbnail";


            if (
                index === 0
            ) {

                boton.classList.add(
                    "active"
                );

            }


            boton.innerHTML = `

                <img
                    src="${rutaImagenPagina(imagen)}"
                    alt="${producto.nombre}"
                >

            `;


            boton.addEventListener(

                "click",

                function () {

                    document
                        .querySelectorAll(
                            ".thumbnail"
                        )
                        .forEach(

                            function (
                                miniatura
                            ) {

                                miniatura
                                    .classList
                                    .remove(
                                        "active"
                                    );

                            }

                        );


                    boton.classList.add(
                        "active"
                    );


                    mostrarImagenPrincipal(
                        imagen
                    );

                }

            );


            productThumbnails.appendChild(
                boton
            );

        }

    );

}


cargarGaleria();


// =========================================================
// VARIANTES
// =========================================================

let varianteSeleccionada =
    null;


variantButtons.innerHTML =
    "";


if (
    producto.variantes
    &&
    producto.variantes.length > 0
) {

    varianteSeleccionada =
        producto.variantes[0];


    variantsSection.style.display =
        "";


    producto.variantes.forEach(

        function (
            variante,
            index
        ) {

            const boton =
                document.createElement(
                    "button"
                );


            boton.type =
                "button";


            boton.className =
                "variant-button";


            boton.textContent =
                variante;


            if (
                index === 0
            ) {

                boton.classList.add(
                    "active"
                );

            }


            boton.addEventListener(

                "click",

                function () {

                    document
                        .querySelectorAll(
                            ".variant-button"
                        )
                        .forEach(

                            function (
                                item
                            ) {

                                item.classList
                                    .remove(
                                        "active"
                                    );

                            }

                        );


                    boton.classList.add(
                        "active"
                    );


                    varianteSeleccionada =
                        variante;

                }

            );


            variantButtons.appendChild(
                boton
            );

        }

    );

} else {

    variantsSection.style.display =
        "none";

}


// =========================================================
// CANTIDAD
// =========================================================

let cantidad =
    1;


document
    .getElementById(
        "increaseQuantity"
    )
    .addEventListener(

        "click",

        function () {

            cantidad++;


            quantityElement.textContent =
                cantidad;

        }

    );


document
    .getElementById(
        "decreaseQuantity"
    )
    .addEventListener(

        "click",

        function () {

            if (
                cantidad > 1
            ) {

                cantidad--;


                quantityElement.textContent =
                    cantidad;

            }

        }

    );


// =========================================================
// LISTA
// =========================================================

function leerLista() {

    let lista =
        JSON.parse(

            localStorage.getItem(
                "listaZamana"
            )

            ||

            "[]"

        );


    lista =
        lista.map(

            function (item) {

                if (
                    typeof item === "string"
                ) {

                    return {

                        id:
                            item,

                        cantidad:
                            1,

                        variante:
                            null

                    };

                }


                return item;

            }

        );


    return lista;

}


function guardarLista(
    lista
) {

    localStorage.setItem(

        "listaZamana",

        JSON.stringify(
            lista
        )

    );

}


function obtenerCantidadLista() {

    return leerLista()
        .reduce(

            function (
                total,
                item
            ) {

                return total
                    +
                    (
                        item.cantidad
                        ||
                        1
                    );

            },

            0

        );

}


function actualizarBotonLista() {

    const boton =
        document.getElementById(
            "floatingListLink"
        );


    if (!boton) {

        return;

    }


    const cantidadActual =
        obtenerCantidadLista();


    boton.textContent =

        cantidadActual > 0

            ?

            "Mi lista ("
            +
            cantidadActual
            +
            ")"

            :

            "Mi lista";

}


actualizarBotonLista();


// =========================================================
// AGREGAR A MI LISTA
// =========================================================

addToListButton.addEventListener(

    "click",

    function () {

        const lista =
            leerLista();


        const existente =
            lista.find(

                function (item) {

                    return (

                        item.id
                        ===
                        producto.id

                        &&

                        item.variante
                        ===
                        varianteSeleccionada

                    );

                }

            );


        if (
            existente
        ) {

            existente.cantidad +=
                cantidad;

        } else {

            lista.push({

                id:
                    producto.id,

                cantidad:
                    cantidad,

                variante:
                    varianteSeleccionada

            });

        }


        guardarLista(
            lista
        );


        actualizarBotonLista();


        addToListButton.textContent =
            "Agregado a mi lista";


        setTimeout(

            function () {

                addToListButton.textContent =
                    "Agregar a mi lista";

            },

            1200

        );

    }

);


// =========================================================
// WHATSAPP DIRECTO
// =========================================================

document
    .getElementById(
        "whatsappButton"
    )
    .addEventListener(

        "click",

        function () {

            let mensaje =

                "Hola, estoy interesada en "
                +
                producto.nombre
                +
                ".\n\nCantidad: "
                +
                cantidad;


            if (
                varianteSeleccionada
            ) {

                mensaje +=

                    "\nOpción: "
                    +
                    varianteSeleccionada;

            }


            mensaje +=

                "\nPrecio: "
                +
                textoPrecio(
                    producto
                );


            const numeroWhatsApp =
                "573508253530";


            const url =

                "https://wa.me/"
                +
                numeroWhatsApp
                +
                "?text="
                +
                encodeURIComponent(
                    mensaje
                );


            window.open(
                url,
                "_blank"
            );

        }

    );


// =========================================================
// RECOMENDACIONES
// =========================================================

recommendationGrid.innerHTML =
    "";


const recomendaciones =
    listaProductos
        .filter(

            function (item) {

                return (

                    item.categoria
                    ===
                    producto.categoria

                    &&

                    item.id
                    !==
                    producto.id

                );

            }

        )
        .slice(
            0,
            3
        );


recomendaciones.forEach(

    function (item) {

        const card =
            document.createElement(
                "article"
            );


        card.className =
            "recommendation-card";


        let imagenHTML;


        if (
            item.imagenes
            &&
            item.imagenes.length > 0
        ) {

            imagenHTML = `

                <div class="recommendation-image">

                    <img
                        src="${rutaImagenPagina(
                            item.imagenes[0]
                        )}"
                        alt="${item.nombre}"
                    >

                </div>

            `;

        } else {

            imagenHTML = `

                <div class="recommendation-image">

                    Imagen pendiente

                </div>

            `;

        }


        card.innerHTML = `

            ${imagenHTML}

            <h3>
                ${item.nombre}
            </h3>

            <p>
                ${textoPrecio(item)}
            </p>

        `;


        card.addEventListener(

            "click",

            function () {

                window.location.href =

                    "producto.html?id="
                    +
                    item.id;

            }

        );


        recommendationGrid.appendChild(
            card
        );

    }

);


// =========================================================
// VOLVER
// =========================================================

document
    .getElementById(
        "backButton"
    )
    .addEventListener(

        "click",

        function () {

            history.back();

        }

    );


// =========================================================
// BUSCADOR
// =========================================================

const searchButton =
    document.getElementById(
        "searchButton"
    );


const searchBox =
    document.getElementById(
        "searchBox"
    );


const searchInput =
    document.getElementById(
        "searchInput"
    );


const searchSubmit =
    document.getElementById(
        "searchSubmit"
    );


searchButton.addEventListener(

    "click",

    function () {

        searchBox.classList.toggle(
            "hidden"
        );

    }

);


function buscarProducto() {

    const texto =
        searchInput.value
            .trim()
            .toLowerCase();


    if (
        texto === ""
    ) {

        return;

    }


    const encontrado =
        listaProductos.find(

            function (item) {

                return item.nombre
                    .toLowerCase()
                    .includes(
                        texto
                    );

            }

        );


    if (
        encontrado
    ) {

        window.location.href =

            "producto.html?id="
            +
            encontrado.id;

    } else {

        alert(
            "No encontramos ese producto."
        );

    }

}


searchSubmit.addEventListener(

    "click",

    buscarProducto

);


searchInput.addEventListener(

    "keydown",

    function (event) {

        if (
            event.key === "Enter"
        ) {

            buscarProducto();

        }

    }

);