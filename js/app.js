// =========================================================
// INICIO - ZAMANA Y PAPELERÍA
// =========================================================

const productosInicio =
    window.productos || [];


// =========================================================
// PRECIO
// =========================================================

function formatearPrecioInicio(precio) {

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
            .toLocaleString("es-CO");

}


function textoPrecioInicio(producto) {

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
            formatearPrecioInicio(
                producto.precioDetal
            );

    }


    return formatearPrecioInicio(
        producto.precioDetal
    );

}


function precioEmprendedorInicio(producto) {

    if (
        producto.aplicaDescuentoEmprendedor === false
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
        producto.precioDetal * 0.70
    );

}


// =========================================================
// DESTACADOS
// =========================================================

const featuredTrack =
    document.getElementById(
        "featuredTrack"
    );


const destacadosIds = [

    "pestanas-caja-60-puntos",

    "tablon-200-puntos",

    "libros-pestanas",

    "kit-mini-pestanas",

    "kit-grande-pestanas",

    "caja-emprendedora",

    "caja-regalo",

    "pegante-salon-pro"

];


function tarjetaDestacada(producto) {

    let imagenHTML;


    if (
        producto.imagenes
        &&
        producto.imagenes.length > 0
    ) {

        imagenHTML = `

            <div class="featured-image">

                <img
                    src="${producto.imagenes[0]}"
                    alt="${producto.nombre}"
                >

            </div>

        `;

    } else {

        imagenHTML = `

            <div class="featured-image featured-placeholder">

                Imagen pendiente

            </div>

        `;

    }


    const precioEmp =
        precioEmprendedorInicio(
            producto
        );


    let emprendedorHTML =
        "";


    if (
        precioEmp !== null
    ) {

        emprendedorHTML = `

            <div class="featured-business-price">

                <span>
                    Emprendedor
                </span>

                <strong>
                    ${formatearPrecioInicio(
                        precioEmp
                    )}
                </strong>

            </div>

        `;

    }


    return `

        <article class="featured-card">

            ${imagenHTML}


            <div class="featured-content">

                <span class="featured-category">

                    ${producto.subcategoria}

                </span>


                <h3>

                    ${producto.nombre}

                </h3>


                <p class="featured-price">

                    ${textoPrecioInicio(
                        producto
                    )}

                </p>


                ${emprendedorHTML}


                <a
                    href="pages/producto.html?id=${producto.id}"
                    class="btn btn-primary featured-button"
                >

                    Ver producto

                </a>

            </div>

        </article>

    `;

}


function cargarDestacados() {

    if (
        !featuredTrack
    ) {

        return;

    }


    const productosDestacados =
        destacadosIds
            .map(

                function (id) {

                    return productosInicio.find(

                        function (producto) {

                            return producto.id === id;

                        }

                    );

                }

            )
            .filter(Boolean);


    const tarjetas =
        productosDestacados
            .map(tarjetaDestacada)
            .join("");


    // Dos veces para que el movimiento sea continuo.
    featuredTrack.innerHTML =
        tarjetas + tarjetas;

}


cargarDestacados();


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


function abrirMenu() {

    sideMenu.classList.add(
        "open"
    );

    overlay.classList.add(
        "show"
    );

}


function cerrarMenu() {

    sideMenu.classList.remove(
        "open"
    );

    overlay.classList.remove(
        "show"
    );

}


if (
    menuButton
    &&
    sideMenu
    &&
    overlay
) {

    menuButton.addEventListener(
        "click",
        abrirMenu
    );

}


if (
    closeMenu
) {

    closeMenu.addEventListener(
        "click",
        cerrarMenu
    );

}


if (
    overlay
) {

    overlay.addEventListener(
        "click",
        cerrarMenu
    );

}


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


if (
    searchButton
    &&
    searchBox
) {

    searchButton.addEventListener(

        "click",

        function () {

            searchBox.classList.toggle(
                "hidden"
            );


            if (
                !searchBox.classList.contains(
                    "hidden"
                )
            ) {

                searchInput.focus();

            }

        }

    );

}


function buscarInicio() {

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
        productosInicio.find(

            function (producto) {

                return (

                    producto.nombre
                        .toLowerCase()
                        .includes(texto)

                    ||

                    producto.subcategoria
                        .toLowerCase()
                        .includes(texto)

                );

            }

        );


    if (
        encontrado
    ) {

        window.location.href =

            "pages/producto.html?id="
            +
            encontrado.id;

    } else {

        alert(
            "No encontramos ese producto."
        );

    }

}


if (
    searchSubmit
) {

    searchSubmit.addEventListener(
        "click",
        buscarInicio
    );

}


if (
    searchInput
) {

    searchInput.addEventListener(

        "keydown",

        function (event) {

            if (
                event.key === "Enter"
            ) {

                buscarInicio();

            }

        }

    );

}


// =========================================================
// MI LISTA
// =========================================================

function cantidadListaInicio() {

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


const floatingListLink =
    document.getElementById(
        "floatingListLink"
    );


if (
    floatingListLink
) {

    const cantidad =
        cantidadListaInicio();


    floatingListLink.textContent =

        cantidad > 0

            ?

            `Mi lista (${cantidad})`

            :

            "Mi lista";

}