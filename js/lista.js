// =========================================================
// MI LISTA - ZAMANA Y PAPELERÍA
// =========================================================

const productosDisponibles =
    window.productos || [];


// =========================================================
// ELEMENTOS DE LA PÁGINA
// =========================================================

const quoteItems =
    document.getElementById("quoteItems");

const quoteProductCount =
    document.getElementById("quoteProductCount");

const quoteType =
    document.getElementById("quoteType");

const quoteTotal =
    document.getElementById("quoteTotal");

const customerName =
    document.getElementById("customerName");

const customerNotes =
    document.getElementById("customerNotes");

const sendWhatsApp =
    document.getElementById("sendWhatsApp");

const clearList =
    document.getElementById("clearList");

const floatingListLink =
    document.getElementById("floatingListLink");


// =========================================================
// LEER LISTA
// =========================================================

function leerLista() {

    let listaGuardada = [];

    try {

        listaGuardada =
            JSON.parse(
                localStorage.getItem("listaZamana")
                ||
                "[]"
            );

    } catch (error) {

        listaGuardada = [];

    }


    if (!Array.isArray(listaGuardada)) {

        return [];

    }


    return listaGuardada
        .map(

            function (item) {

                // Compatibilidad con listas antiguas
                // donde solamente se guardaba el ID.

                if (typeof item === "string") {

                    return {

                        id: item,

                        cantidad: 1,

                        variante: null

                    };

                }


                return {

                    id: item.id,

                    cantidad:
                        Number(item.cantidad) > 0
                            ?
                            Number(item.cantidad)
                            :
                            1,

                    variante:
                        item.variante || null

                };

            }

        )
        .filter(

            function (item) {

                return Boolean(item.id);

            }

        );

}


let lista =
    leerLista();


// =========================================================
// GUARDAR LISTA
// =========================================================

function guardarLista() {

    localStorage.setItem(

        "listaZamana",

        JSON.stringify(lista)

    );


    actualizarBotonFlotante();

}


// =========================================================
// RUTA DE IMÁGENES
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


    // lista.html está dentro de /pages/
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

        return "Por cotizar";

    }


    return "$"
        +
        Math.round(precio)
            .toLocaleString("es-CO");

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
        quoteType.value === "emprendedor"
        &&
        producto.aplicaDescuentoEmprendedor !== false
    ) {

        return Math.round(
            producto.precioDetal * 0.70
        );

    }


    return producto.precioDetal;

}


function textoPrecio(producto) {

    const precio =
        obtenerPrecio(producto);


    if (precio === null) {

        return "Por cotizar";

    }


    if (producto.precioDesde) {

        return "Desde "
            +
            formatearPrecio(precio);

    }


    return formatearPrecio(precio);

}


// =========================================================
// BUSCAR PRODUCTO
// =========================================================

function buscarProducto(id) {

    return productosDisponibles.find(

        function (producto) {

            return producto.id === id;

        }

    );

}


// =========================================================
// CONTADOR
// =========================================================

function cantidadTotal() {

    return lista.reduce(

        function (total, item) {

            return total
                +
                Number(item.cantidad || 1);

        },

        0

    );

}


function actualizarBotonFlotante() {

    if (!floatingListLink) {

        return;

    }


    const cantidad =
        cantidadTotal();


    floatingListLink.textContent =

        cantidad > 0
            ?
            `Mi lista (${cantidad})`
            :
            "Mi lista";

}


// =========================================================
// CAMBIAR CANTIDAD
// =========================================================

function aumentarCantidad(index) {

    if (!lista[index]) {

        return;

    }


    lista[index].cantidad++;


    guardarLista();

    mostrarLista();

}


function disminuirCantidad(index) {

    if (!lista[index]) {

        return;

    }


    if (lista[index].cantidad > 1) {

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


// =========================================================
// ELIMINAR PRODUCTO
// =========================================================

function eliminarProducto(index) {

    lista.splice(
        index,
        1
    );


    guardarLista();

    mostrarLista();

}


// =========================================================
// MOSTRAR LISTA
// =========================================================

function mostrarLista() {

    quoteItems.innerHTML =
        "";


    actualizarBotonFlotante();


    // =====================================================
    // LISTA VACÍA
    // =====================================================

    if (lista.length === 0) {

        quoteProductCount.textContent =
            "0 productos";


        quoteTotal.textContent =
            "$0";


        sendWhatsApp.disabled =
            true;


        clearList.disabled =
            true;


        quoteItems.innerHTML = `

            <div class="empty-list">

                <h3>
                    Tu lista está vacía
                </h3>

                <p>
                    Agrega productos desde el catálogo
                    para preparar tu cotización.
                </p>

                <a
                    href="catalogo.html?categoria=belleza"
                    class="btn btn-primary"
                >
                    Ver catálogo
                </a>

            </div>

        `;


        return;

    }


    sendWhatsApp.disabled =
        false;


    clearList.disabled =
        false;


    let totalGeneral =
        0;


    let unidadesValidas =
        0;


    // =====================================================
    // PRODUCTOS
    // =====================================================

    lista.forEach(

        function (item, index) {

            const producto =
                buscarProducto(item.id);


            if (!producto) {

                return;

            }


            const cantidad =
                Number(item.cantidad || 1);


            unidadesValidas +=
                cantidad;


            const precioUnitario =
                obtenerPrecio(producto);


            let subtotal =
                null;


            if (precioUnitario !== null) {

                subtotal =
                    precioUnitario
                    *
                    cantidad;


                totalGeneral +=
                    subtotal;

            }


            // =================================================
            // IMAGEN
            // =================================================

            let imagenHTML = `

                <div class="quote-item-image">

                    <div class="quote-item-placeholder">

                        Imagen no disponible

                    </div>

                </div>

            `;


            if (
                producto.imagenes
                &&
                producto.imagenes.length > 0
            ) {

                imagenHTML = `

                    <div class="quote-item-image">

                        <img
                            src="${rutaImagenPagina(
                                producto.imagenes[0]
                            )}"
                            alt="${producto.nombre}"
                        >

                    </div>

                `;

            }


            // =================================================
            // VARIANTE
            // =================================================

            let varianteHTML =
                "";


            if (item.variante) {

                varianteHTML = `

                    <p class="quote-item-variant">

                        Opción:

                        <strong>
                            ${item.variante}
                        </strong>

                    </p>

                `;

            }


            // =================================================
            // SUBTOTAL
            // =================================================

            const subtotalTexto =

                subtotal === null
                    ?
                    "Por cotizar"
                    :
                    formatearPrecio(subtotal);


            // =================================================
            // TARJETA
            // =================================================

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "quote-item";


            card.innerHTML = `

                ${imagenHTML}


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

                            ${textoPrecio(producto)}

                        </strong>

                    </p>

                </div>


                <div class="quote-item-controls">

                    <div class="quote-quantity">

                        <button
                            class="quote-decrease"
                            data-index="${index}"
                            type="button"
                        >

                            −

                        </button>


                        <span>

                            ${cantidad}

                        </span>


                        <button
                            class="quote-increase"
                            data-index="${index}"
                            type="button"
                        >

                            +

                        </button>

                    </div>


                    <p class="quote-item-subtotal">

                        ${subtotalTexto}

                    </p>


                    <button
                        class="remove-quote-item"
                        data-index="${index}"
                        type="button"
                    >

                        Eliminar

                    </button>

                </div>

            `;


            quoteItems.appendChild(
                card
            );

        }

    );


    // =====================================================
    // CONTADOR Y TOTAL
    // =====================================================

    quoteProductCount.textContent =

        unidadesValidas
        +
        (
            unidadesValidas === 1
                ?
                " producto"
                :
                " productos"
        );


    quoteTotal.textContent =
        formatearPrecio(
            totalGeneral
        );


    // =====================================================
    // PRODUCTOS NO ENCONTRADOS
    // =====================================================

    if (unidadesValidas === 0) {

        quoteItems.innerHTML = `

            <div class="empty-list">

                <h3>
                    No se encontraron los productos guardados
                </h3>

                <p>
                    Vacía la lista y agrega nuevamente
                    los productos desde el catálogo.
                </p>

            </div>

        `;

    }


    activarControles();

}


// =========================================================
// CONTROLES DE PRODUCTOS
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

                        aumentarCantidad(

                            Number(
                                boton.dataset.index
                            )

                        );

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

                        disminuirCantidad(

                            Number(
                                boton.dataset.index
                            )

                        );

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

                        eliminarProducto(

                            Number(
                                boton.dataset.index
                            )

                        );

                    }

                );

            }

        );

}


// =========================================================
// CAMBIO DE TIPO DE PRECIO
// =========================================================

quoteType.addEventListener(

    "change",

    mostrarLista

);


// =========================================================
// VACIAR LISTA
// =========================================================

clearList.addEventListener(

    "click",

    function () {

        if (lista.length === 0) {

            return;

        }


        const confirmar =
            confirm(
                "¿Quieres vaciar toda tu lista?"
            );


        if (!confirmar) {

            return;

        }


        lista = [];


        guardarLista();

        mostrarLista();

    }

);


// =========================================================
// WHATSAPP
// =========================================================

sendWhatsApp.addEventListener(

    "click",

    function () {

        if (lista.length === 0) {

            alert(
                "Tu lista está vacía."
            );

            return;

        }


        const tipoPrecio =

            quoteType.value === "emprendedor"
                ?
                "Precio emprendedor"
                :
                "Precio detal";


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
                "\n";

        }


        mensaje +=

            "Tipo de precio: "
            +
            tipoPrecio
            +
            "\n\n";


        let totalGeneral =
            0;


        let numeroProducto =
            1;


        lista.forEach(

            function (item) {

                const producto =
                    buscarProducto(
                        item.id
                    );


                if (!producto) {

                    return;

                }


                const cantidad =
                    Number(
                        item.cantidad || 1
                    );


                const precio =
                    obtenerPrecio(
                        producto
                    );


                mensaje +=

                    numeroProducto
                    +
                    ". "
                    +
                    producto.nombre
                    +
                    "\n";


                mensaje +=

                    "Cantidad: "
                    +
                    cantidad
                    +
                    "\n";


                if (item.variante) {

                    mensaje +=

                        "Opción: "
                        +
                        item.variante
                        +
                        "\n";

                }


                if (precio !== null) {

                    const subtotal =
                        precio
                        *
                        cantidad;


                    totalGeneral +=
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


                numeroProducto++;

            }

        );


        mensaje +=

            "Total estimado: "
            +
            formatearPrecio(
                totalGeneral
            );


        if (
            customerNotes.value.trim()
            !==
            ""
        ) {

            mensaje +=

                "\n\nNotas del pedido: "
                +
                customerNotes.value.trim();

        }


        mensaje +=

            "\n\n¿Me confirmas disponibilidad y valor final?";


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


// =========================================================
// INICIAR
// =========================================================

mostrarLista();