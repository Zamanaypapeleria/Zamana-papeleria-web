const productosDisponibles =
    window.productos || [];


const quoteItems =
    document.getElementById(
        "quoteItems"
    );

const emptyQuote =
    document.getElementById(
        "emptyQuote"
    );

const quoteSummary =
    document.getElementById(
        "quoteSummary"
    );

const quoteProductCount =
    document.getElementById(
        "quoteProductCount"
    );

const quoteType =
    document.getElementById(
        "quoteType"
    );

const quoteTotal =
    document.getElementById(
        "quoteTotal"
    );

const pendingPriceMessage =
    document.getElementById(
        "pendingPriceMessage"
    );

const customerName =
    document.getElementById(
        "customerName"
    );

const customerNotes =
    document.getElementById(
        "customerNotes"
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


    return lista.map(

        function (item) {

            if (
                typeof item === "string"
            ) {

                return {

                    id: item,

                    cantidad: 1,

                    variante: null

                };

            }


            return item;

        }

    );

}


let lista =
    leerLista();


function guardarLista() {

    localStorage.setItem(

        "listaZamana",

        JSON.stringify(
            lista
        )

    );

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

        return "Por cotizar";

    }


    return "$"
        +
        Math.round(precio)
            .toLocaleString(
                "es-CO"
            );

}


function obtenerPrecio(producto) {

    if (
        producto.precioDetal === null
        ||
        producto.precioDetal === undefined
    ) {

        return null;

    }


    if (
        quoteType.value
        ===
        "emprendedor"

        &&

        producto.aplicaDescuentoEmprendedor
        !==
        false
    ) {

        return Math.round(

            producto.precioDetal
            *
            0.70

        );

    }


    return producto.precioDetal;

}


// =========================================================
// MOSTRAR LISTA
// =========================================================

function mostrarLista() {

    quoteItems.innerHTML =
        "";


    if (
        lista.length === 0
    ) {

        emptyQuote.classList.remove(
            "hidden"
        );

        quoteSummary.classList.add(
            "quote-summary-disabled"
        );

        quoteProductCount.textContent =
            "0";

        quoteTotal.textContent =
            "$0";

        return;

    }


    emptyQuote.classList.add(
        "hidden"
    );

    quoteSummary.classList.remove(
        "quote-summary-disabled"
    );


    const unidades =
        lista.reduce(

            function (total, item) {

                return total
                    +
                    item.cantidad;

            },

            0

        );


    quoteProductCount.textContent =
        unidades;


    let total = 0;

    let pendientes = 0;


    lista.forEach(

        function (item, index) {

            const producto =
                productosDisponibles.find(

                    function (p) {

                        return p.id
                            ===
                            item.id;

                    }

                );


            if (
                !producto
            ) {
                return;
            }


            const precio =
                obtenerPrecio(
                    producto
                );


            let subtotal =
                null;


            if (
                precio !== null
            ) {

                subtotal =
                    precio
                    *
                    item.cantidad;


                total +=
                    subtotal;

            } else {

                pendientes++;

            }


            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "quote-item";


            let varianteHTML =
                "";


            if (
                item.variante
            ) {

                varianteHTML = `

                    <p class="quote-item-variant">

                        Opción:

                        <strong>
                            ${item.variante}
                        </strong>

                    </p>

                `;

            }


            card.innerHTML = `

                <div class="quote-item-image">

                    <div class="quote-item-placeholder">

                        Imagen pendiente

                    </div>

                </div>


                <div class="quote-item-info">

                    <p class="card-subcategory">

                        ${producto.subcategoria}

                    </p>

                    <h3>

                        ${producto.nombre}

                    </h3>

                    <p class="quote-item-presentation">

                        ${producto.presentacion}

                    </p>

                    ${varianteHTML}

                    <p class="quote-item-unit-price">

                        Precio unitario:

                        <strong>

                            ${formatearPrecio(
                                precio
                            )}

                        </strong>

                    </p>

                </div>


                <div class="quote-item-controls">

                    <div class="quote-quantity">

                        <button
                            class="quote-decrease"
                            data-index="${index}">

                            −

                        </button>

                        <span>

                            ${item.cantidad}

                        </span>

                        <button
                            class="quote-increase"
                            data-index="${index}">

                            +

                        </button>

                    </div>


                    <p class="quote-item-subtotal">

                        ${
                            subtotal === null
                                ?
                                "Por cotizar"
                                :
                                formatearPrecio(
                                    subtotal
                                )
                        }

                    </p>


                    <button
                            class="remove-quote-item"
                            data-index="${index}">

                        Eliminar

                    </button>

                </div>

            `;


            quoteItems.appendChild(
                card
            );

        }

    );


    quoteTotal.textContent =
        formatearPrecio(
            total
        );


    if (
        pendientes > 0
    ) {

        pendingPriceMessage
            .classList
            .remove(
                "hidden"
            );


        pendingPriceMessage.textContent =

            pendientes
            +
            (
                pendientes === 1
                    ?
                    " producto tiene precio por cotizar."
                    :
                    " productos tienen precio por cotizar."
            );

    } else {

        pendingPriceMessage
            .classList
            .add(
                "hidden"
            );

    }


    activarControles();

}


// =========================================================
// CONTROLES
// =========================================================

function activarControles() {

    document
        .querySelectorAll(
            ".quote-increase"
        )
        .forEach(

            function (boton) {

                boton.addEventListener(

                    "click",

                    function () {

                        const index =
                            Number(
                                boton.dataset.index
                            );


                        lista[index].cantidad++;


                        guardarLista();

                        mostrarLista();

                    }

                );

            }

        );


    document
        .querySelectorAll(
            ".quote-decrease"
        )
        .forEach(

            function (boton) {

                boton.addEventListener(

                    "click",

                    function () {

                        const index =
                            Number(
                                boton.dataset.index
                            );


                        if (
                            lista[index].cantidad > 1
                        ) {

                            lista[index].cantidad--;

                        } else {

                            lista.splice(
                                index,
                                1
                            );

                        }


                        guardarLista();

                        mostrarLista();

                    }

                );

            }

        );


    document
        .querySelectorAll(
            ".remove-quote-item"
        )
        .forEach(

            function (boton) {

                boton.addEventListener(

                    "click",

                    function () {

                        lista.splice(

                            Number(
                                boton.dataset.index
                            ),

                            1

                        );


                        guardarLista();

                        mostrarLista();

                    }

                );

            }

        );

}


// =========================================================
// CAMBIO DE PRECIO
// =========================================================

quoteType.addEventListener(

    "change",

    mostrarLista

);


// =========================================================
// VACIAR
// =========================================================

document
    .getElementById(
        "clearQuote"
    )
    .addEventListener(

        "click",

        function () {

            lista = [];

            guardarLista();

            mostrarLista();

        }

    );


// =========================================================
// WHATSAPP
// =========================================================

document
    .getElementById(
        "sendQuoteWhatsapp"
    )
    .addEventListener(

        "click",

        function () {

            if (
                lista.length === 0
            ) {

                alert(
                    "Tu lista está vacía."
                );

                return;

            }


            let mensaje =
                "Hola, quiero cotizar el siguiente pedido en Zamana y Papelería:\n\n";


            if (
                customerName.value.trim()
                !==
                ""
            ) {

                mensaje +=

                    "Nombre: "
                    +
                    customerName.value.trim()
                    +
                    "\n\n";

            }


            let total = 0;


            lista.forEach(

                function (item, index) {

                    const producto =
                        productosDisponibles.find(

                            function (p) {

                                return p.id
                                    ===
                                    item.id;

                            }

                        );


                    if (
                        !producto
                    ) {
                        return;
                    }


                    const precio =
                        obtenerPrecio(
                            producto
                        );


                    mensaje +=

                        (index + 1)
                        +
                        ". "
                        +
                        producto.nombre
                        +
                        "\n";


                    mensaje +=

                        "Cantidad: "
                        +
                        item.cantidad
                        +
                        "\n";


                    if (
                        item.variante
                    ) {

                        mensaje +=

                            "Opción: "
                            +
                            item.variante
                            +
                            "\n";

                    }


                    if (
                        precio !== null
                    ) {

                        const subtotal =
                            precio
                            *
                            item.cantidad;


                        total +=
                            subtotal;


                        mensaje +=

                            "Precio unitario: "
                            +
                            formatearPrecio(
                                precio
                            )
                            +
                            "\n";


                        mensaje +=

                            "Subtotal: "
                            +
                            formatearPrecio(
                                subtotal
                            )
                            +
                            "\n\n";

                    } else {

                        mensaje +=

                            "Precio: por cotizar\n\n";

                    }

                }

            );


            mensaje +=

                "Total estimado: "
                +
                formatearPrecio(
                    total
                )
                +
                "\n";


            if (
                customerNotes.value
                    .trim()
                !==
                ""
            ) {

                mensaje +=

                    "\nObservaciones: "
                    +
                    customerNotes.value.trim()
                    +
                    "\n";

            }


            mensaje +=

                "\n¿Me confirmas disponibilidad y valor final?";


            window.open(

                "https://wa.me/573508253530?text="
                +
                encodeURIComponent(
                    mensaje
                ),

                "_blank"

            );

        }

    );


mostrarLista();