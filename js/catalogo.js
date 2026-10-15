// =========================================================
// CATÁLOGO - ZAMANA Y PAPELERÍA
// =========================================================


// =========================================================
// PRODUCTOS
// =========================================================

const productosCatalogo =
    window.productos || [];


// =========================================================
// PARÁMETROS DE LA URL
// =========================================================

const parametros =
    new URLSearchParams(
        window.location.search
    );


let categoriaActual =
    parametros.get("categoria")
    ||
    "papeleria";


const categoriasValidas = [
    "papeleria",
    "belleza",
    "accesorios",
    "cajas"
];


if (
    !categoriasValidas.includes(
        categoriaActual
    )
) {

    categoriaActual =
        "papeleria";

}


// =========================================================
// NOMBRES DE CATEGORÍAS
// =========================================================

const nombresCategorias = {

    papeleria:
        "Papelería",

    belleza:
        "Belleza",

    accesorios:
        "Accesorios",

    cajas:
        "Cajas"

};


// =========================================================
// ELEMENTOS DEL HTML
// =========================================================

const catalogTitle =
    document.getElementById(
        "catalogTitle"
    );


const breadcrumbCategory =
    document.getElementById(
        "breadcrumbCategory"
    );


const productCount =
    document.getElementById(
        "productCount"
    );


const productsContainer =
    document.getElementById(
        "catalogProducts"
    );


const filterButton =
    document.getElementById(
        "filterButton"
    );


const filterPanel =
    document.getElementById(
        "filterPanel"
    );


const filterOverlay =
    document.getElementById(
        "filterOverlay"
    );


const closeFilter =
    document.getElementById(
        "closeFilter"
    );


const filterOptions =
    document.getElementById(
        "filterOptions"
    );


const filterCategoryTitle =
    document.getElementById(
        "filterCategoryTitle"
    );


const applyFilters =
    document.getElementById(
        "applyFilters"
    );


const clearFilters =
    document.getElementById(
        "clearFilters"
    );


const sortProducts =
    document.getElementById(
        "sortProducts"
    );


const pagination =
    document.getElementById(
        "pagination"
    );


const beautySectionSelector =
    document.getElementById(
        "beautySectionSelector"
    );


const beautySubcategorySelect =
    document.getElementById(
        "beautySubcategorySelect"
    );


// =========================================================
// TÍTULOS
// =========================================================

catalogTitle.textContent =
    nombresCategorias[
        categoriaActual
    ];


breadcrumbCategory.textContent =
    nombresCategorias[
        categoriaActual
    ];


filterCategoryTitle.textContent =

    categoriaActual === "cajas"

        ?

        "Tipos de cajas"

        :

        "Subcategorías de "
        +
        nombresCategorias[
            categoriaActual
        ];


// =========================================================
// RUTA DE LAS IMÁGENES
// =========================================================
//
// En productos.js guardamos:
//
// assets/images/accesorios/estrellaclip.jpeg
//
// Pero catalogo.html está dentro de /pages.
//
// Por eso agregamos ../
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
// PRODUCTOS DE LA CATEGORÍA
// =========================================================

const productosCategoria =
    productosCatalogo.filter(

        function (producto) {

            return producto.categoria
                ===
                categoriaActual;

        }

    );


// =========================================================
// ORDEN ESPECIAL DE BELLEZA
// =========================================================

function ordenarBelleza(lista) {

    if (
        categoriaActual !== "belleza"
    ) {

        return [...lista];

    }


    const orden = {

        "Pestañas": 1,

        "Maquillaje": 2,

        "Uñas": 3

    };


    return [...lista].sort(

        function (a, b) {

            return (
                orden[a.subcategoria] || 99
            )
                -
                (
                    orden[b.subcategoria] || 99
                );

        }

    );

}


let productosFiltrados =
    ordenarBelleza(
        productosCategoria
    );


// =========================================================
// SELECTOR BELLEZA
// =========================================================

if (
    categoriaActual === "belleza"
    &&
    beautySectionSelector
) {

    beautySectionSelector
        .classList
        .remove(
            "hidden"
        );

}


if (
    beautySubcategorySelect
) {

    beautySubcategorySelect
        .addEventListener(

            "change",

            function () {

                const valor =
                    beautySubcategorySelect.value;


                if (
                    valor === "all"
                ) {

                    productosFiltrados =
                        ordenarBelleza(
                            productosCategoria
                        );

                } else {

                    productosFiltrados =
                        productosCategoria.filter(

                            function (producto) {

                                return producto.subcategoria
                                    ===
                                    valor;

                            }

                        );

                }


                paginaActual = 1;

                mostrarProductos();

            }

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

        return "Precio a cotizar";

    }


    return "$"
        +
        Math.round(
            precio
        ).toLocaleString(
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
        producto.precioDesde
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


function precioEmprendedor(producto) {

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
// FILTROS
// =========================================================

const subcategorias = [

    ...new Set(

        productosCategoria.map(

            function (producto) {

                return producto.subcategoria;

            }

        )

    )

];


filterOptions.innerHTML =
    "";


subcategorias.forEach(

    function (subcategoria) {

        const label =
            document.createElement(
                "label"
            );


        label.className =
            "filter-option";


        label.innerHTML = `

            <input
                type="checkbox"
                value="${subcategoria}"
            >

            <span>
                ${subcategoria}
            </span>

        `;


        filterOptions.appendChild(
            label
        );

    }

);


// =========================================================
// PAGINACIÓN
// =========================================================

const productosPorPagina =
    12;


let paginaActual =
    1;


// =========================================================
// MOSTRAR PRODUCTOS
// =========================================================

function mostrarProductos() {

    productsContainer.innerHTML =
        "";


    productCount.textContent =

        productosFiltrados.length

        +

        (
            productosFiltrados.length === 1

                ?

                " producto"

                :

                " productos"
        );


    // -----------------------------------------------------
    // NO HAY PRODUCTOS
    // -----------------------------------------------------

    if (
        productosFiltrados.length === 0
    ) {

        productsContainer.innerHTML = `

            <div class="empty-products">

                No hay productos disponibles.

            </div>

        `;


        pagination.innerHTML =
            "";


        return;

    }


    // -----------------------------------------------------
    // PRODUCTOS DE LA PÁGINA ACTUAL
    // -----------------------------------------------------

    const inicio =
        (
            paginaActual - 1
        )
        *
        productosPorPagina;


    const productosPagina =
        productosFiltrados.slice(

            inicio,

            inicio
            +
            productosPorPagina

        );


    // -----------------------------------------------------
    // CREAR TARJETAS
    // -----------------------------------------------------

    productosPagina.forEach(

        function (producto) {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "catalog-product";


            // =================================================
            // IMAGEN
            // =================================================

            let imagenHTML;


            if (
                producto.imagenes
                &&
                producto.imagenes.length > 0
            ) {

                imagenHTML = `

                    <img
                        class="catalog-real-image"
                        src="${rutaImagenPagina(
                            producto.imagenes[0]
                        )}"
                        alt="${producto.nombre}"
                    >

                `;

            } else {

                imagenHTML = `

                    <div class="product-image">

                        Imagen pendiente

                    </div>

                `;

            }


            // =================================================
            // PRECIO EMPRENDEDOR
            // =================================================

            const precioEmp =
                precioEmprendedor(
                    producto
                );


            let emprendedorHTML =
                "";


            if (
                precioEmp !== null
            ) {

                emprendedorHTML = `

                    <div class="entrepreneur-price">

                        <span>

                            Precio emprendedor

                            <strong>
                                -30%
                            </strong>

                        </span>

                        <p>

                            ${formatearPrecio(
                                precioEmp
                            )}

                        </p>

                    </div>

                `;

            }


            // =================================================
            // VARIANTES
            // =================================================

            let variantesHTML =
                "";


            if (
                producto.variantes
                &&
                producto.variantes.length > 0
            ) {

                variantesHTML = `

                    <p class="product-variants-preview">

                        ${producto.variantes
                            .slice(
                                0,
                                3
                            )
                            .join(
                                " · "
                            )}

                    </p>

                `;

            }


            // =================================================
            // TARJETA
            // =================================================

            card.innerHTML = `

                ${imagenHTML}

                <p class="card-subcategory">

                    ${producto.subcategoria}

                </p>

                <h3>

                    ${producto.nombre}

                </h3>

                <p class="presentation">

                    ${producto.presentacion}

                </p>

                ${variantesHTML}

                <p class="price">

                    ${textoPrecio(
                        producto
                    )}

                </p>

                ${emprendedorHTML}

                <button
                    type="button"
                    class="product-button"
                >

                    Ver producto

                </button>

            `;


            // -------------------------------------------------
            // ABRIR PRODUCTO
            // -------------------------------------------------

            card
                .querySelector(
                    ".product-button"
                )
                .addEventListener(

                    "click",

                    function () {

                        window.location.href =

                            "producto.html?id="
                            +
                            producto.id;

                    }

                );


            productsContainer.appendChild(
                card
            );

        }

    );


    crearPaginacion();

}


// =========================================================
// CREAR PAGINACIÓN
// =========================================================

function crearPaginacion() {

    pagination.innerHTML =
        "";


    const total =
        Math.ceil(

            productosFiltrados.length
            /
            productosPorPagina

        );


    for (
        let i = 1;
        i <= total;
        i++
    ) {

        const boton =
            document.createElement(
                "button"
            );


        boton.textContent =
            i;


        if (
            i === paginaActual
        ) {

            boton.classList.add(
                "active"
            );

        }


        boton.addEventListener(

            "click",

            function () {

                paginaActual =
                    i;


                mostrarProductos();


                window.scrollTo({

                    top: 0,

                    behavior:
                        "smooth"

                });

            }

        );


        pagination.appendChild(
            boton
        );

    }

}


// =========================================================
// ABRIR FILTRO
// =========================================================

filterButton.addEventListener(

    "click",

    function () {

        filterPanel.classList.add(
            "open"
        );


        filterOverlay.classList.add(
            "show"
        );

    }

);


// =========================================================
// CERRAR FILTRO
// =========================================================

function cerrarFiltro() {

    filterPanel.classList.remove(
        "open"
    );


    filterOverlay.classList.remove(
        "show"
    );

}


closeFilter.addEventListener(
    "click",
    cerrarFiltro
);


filterOverlay.addEventListener(
    "click",
    cerrarFiltro
);


// =========================================================
// APLICAR FILTROS
// =========================================================

applyFilters.addEventListener(

    "click",

    function () {

        const seleccionados =
            Array.from(

                filterOptions
                    .querySelectorAll(
                        "input:checked"
                    )

            )
                .map(

                    function (input) {

                        return input.value;

                    }

                );


        if (
            seleccionados.length === 0
        ) {

            productosFiltrados =
                ordenarBelleza(
                    productosCategoria
                );

        } else {

            productosFiltrados =
                productosCategoria.filter(

                    function (producto) {

                        return seleccionados
                            .includes(
                                producto.subcategoria
                            );

                    }

                );

        }


        paginaActual =
            1;


        mostrarProductos();


        cerrarFiltro();

    }

);


// =========================================================
// LIMPIAR FILTROS
// =========================================================

clearFilters.addEventListener(

    "click",

    function () {

        filterOptions
            .querySelectorAll(
                "input"
            )
            .forEach(

                function (input) {

                    input.checked =
                        false;

                }

            );


        productosFiltrados =
            ordenarBelleza(
                productosCategoria
            );


        paginaActual =
            1;


        sortProducts.value =
            "default";


        if (
            categoriaActual === "belleza"
            &&
            beautySubcategorySelect
        ) {

            beautySubcategorySelect.value =
                "all";

        }


        mostrarProductos();

    }

);


// =========================================================
// ORDENAR PRODUCTOS
// =========================================================

sortProducts.addEventListener(

    "change",

    function () {

        const tipo =
            sortProducts.value;


        // -------------------------------------------------
        // ORDEN ORIGINAL
        // -------------------------------------------------

        if (
            tipo === "default"
        ) {

            productosFiltrados =
                ordenarBelleza(
                    productosFiltrados
                );

        }


        // -------------------------------------------------
        // NOMBRE
        // -------------------------------------------------

        if (
            tipo === "name"
        ) {

            productosFiltrados.sort(

                function (a, b) {

                    return a.nombre
                        .localeCompare(
                            b.nombre,
                            "es"
                        );

                }

            );

        }


        // -------------------------------------------------
        // MENOR PRECIO
        // -------------------------------------------------

        if (
            tipo === "low"
        ) {

            productosFiltrados.sort(

                function (a, b) {

                    if (
                        a.precioDetal === null
                        ||
                        a.precioDetal === undefined
                    ) {

                        return 1;

                    }


                    if (
                        b.precioDetal === null
                        ||
                        b.precioDetal === undefined
                    ) {

                        return -1;

                    }


                    return a.precioDetal
                        -
                        b.precioDetal;

                }

            );

        }


        // -------------------------------------------------
        // MAYOR PRECIO
        // -------------------------------------------------

        if (
            tipo === "high"
        ) {

            productosFiltrados.sort(

                function (a, b) {

                    if (
                        a.precioDetal === null
                        ||
                        a.precioDetal === undefined
                    ) {

                        return 1;

                    }


                    if (
                        b.precioDetal === null
                        ||
                        b.precioDetal === undefined
                    ) {

                        return -1;

                    }


                    return b.precioDetal
                        -
                        a.precioDetal;

                }

            );

        }


        paginaActual =
            1;


        mostrarProductos();

    }

);


// =========================================================
// MENÚ
// =========================================================

const menuButton =
    document.getElementById(
        "menuButton"
    );


const sideMenu =
    document.getElementById(
        "sideMenu"
    );


const closeMenu =
    document.getElementById(
        "closeMenu"
    );


const overlay =
    document.getElementById(
        "overlay"
    );


menuButton.addEventListener(

    "click",

    function () {

        sideMenu.classList.add(
            "open"
        );


        overlay.classList.add(
            "show"
        );

    }

);


function cerrarMenu() {

    sideMenu.classList.remove(
        "open"
    );


    overlay.classList.remove(
        "show"
    );

}


closeMenu.addEventListener(
    "click",
    cerrarMenu
);


overlay.addEventListener(
    "click",
    cerrarMenu
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


// =========================================================
// BUSCAR
// =========================================================

function buscarProducto() {

    const texto =
        searchInput.value
            .trim()
            .toLowerCase();


    if (
        texto === ""
    ) {

        productosFiltrados =
            ordenarBelleza(
                productosCategoria
            );

    } else {

        productosFiltrados =
            productosCategoria.filter(

                function (producto) {

                    return (

                        producto.nombre
                            .toLowerCase()
                            .includes(
                                texto
                            )

                        ||

                        producto.subcategoria
                            .toLowerCase()
                            .includes(
                                texto
                            )

                    );

                }

            );

    }


    paginaActual =
        1;


    mostrarProductos();

}


// =========================================================
// BOTÓN BUSCAR
// =========================================================

searchSubmit.addEventListener(

    "click",

    buscarProducto

);


// =========================================================
// ENTER PARA BUSCAR
// =========================================================

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


// =========================================================
// MI LISTA
// =========================================================

function cantidadLista() {

    const lista =
        JSON.parse(

            localStorage.getItem(
                "listaZamana"
            )

            ||

            "[]"

        );


    return lista.reduce(

        function (
            total,
            item
        ) {

            return total
                +
                (
                    typeof item === "string"

                        ?

                        1

                        :

                        item.cantidad || 1
                );

        },

        0

    );

}


const floatingList =
    document.getElementById(
        "floatingListLink"
    );


const cantidadActual =
    cantidadLista();


floatingList.textContent =

    cantidadActual > 0

        ?

        `Mi lista (${cantidadActual})`

        :

        "Mi lista";


// =========================================================
// INICIAR CATÁLOGO
// =========================================================

mostrarProductos();