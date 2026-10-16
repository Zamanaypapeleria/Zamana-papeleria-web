// =========================================================
// ZAMANA Y PAPELERÍA
// PRODUCTOS
// =========================================================


// =========================================================
// CATEGORÍAS
// =========================================================

const categoriasZamana = [

    {
        id: "belleza",
        nombre: "Belleza",
        imagen: "assets/images/belleza.jpeg"
    },

    {
        id: "papeleria",
        nombre: "Papelería",
        imagen: "assets/images/Papeleria.jpeg"
    },

    {
        id: "accesorios",
        nombre: "Accesorios",
        imagen: "assets/images/accesorios.jpeg"
    },

    {
        id: "cajas",
        nombre: "Cajas",
        imagen: "assets/images/cajas.jpeg"
    }

];


// =========================================================
// FUNCIÓN PARA CREAR PRODUCTOS
// =========================================================

function p(
    id,
    nombre,
    categoria,
    subcategoria,
    presentacion,
    precioDetal = null,
    opciones = {}
) {

    return {

        id,
        nombre,
        categoria,
        subcategoria,
        presentacion,
        precioDetal,

        precioDesde:
            opciones.precioDesde || false,

        aplicaDescuentoEmprendedor:
            opciones.aplicaDescuentoEmprendedor !== false,

        variantes:
            opciones.variantes || [],

        descripcion:
            opciones.descripcion || "",

        imagenes:
            opciones.imagenes || [],

        destacado:
            opciones.destacado || false

    };

}


// =========================================================
// PRODUCTOS
// =========================================================

const productos = [


// #########################################################
// ACCESORIOS
// #########################################################

p(
    "estrellas-clip",
    "Estrellas clip",
    "accesorios",
    "Cabello",
    "Par",
    1500,
    {
        imagenes: [
            "assets/images/accesorios/estrellaclip.jpeg"
        ]
    }
),

p(
    "mariposas-clip",
    "Mariposas clip",
    "accesorios",
    "Cabello",
    "Par",
    1500,
    {
        imagenes: [
            "assets/images/accesorios/mariposaclip.jpeg"
        ]
    }
),

p(
    "pinza-de-estrella",
    "Pinza de estrella",
    "accesorios",
    "Cabello",
    "Par",
    2000,
    {
        imagenes: [
            "assets/images/accesorios/pinzaestrella.jpeg"
        ]
    }
),

p(
    "pinza-estrella-doble",
    "Pinza estrella doble",
    "accesorios",
    "Cabello",
    "Par",
    2000,
    {
        imagenes: [
            "assets/images/accesorios/pinzaestrelladoble.jpeg"
        ]
    }
),

p(
    "caiman-hawaiano-8-cm",
    "Caimán hawaiano 8 cm",
    "accesorios",
    "Cabello",
    "Unidad",
    5000,
    {
        imagenes: [
            "assets/images/accesorios/caimanhawaiano8cm.jpeg"
        ]
    }
),

p(
    "caiman-hawaiana-3-cm",
    "Caimán hawaiana 3 cm",
    "accesorios",
    "Cabello",
    "Par",
    2500,
    {
        imagenes: [
            "assets/images/accesorios/caimanH3cm.jpeg"
        ]
    }
),

p(
    "caiman-hawaiana-2-5-cm",
    "Caimán hawaiana 2.5 cm",
    "accesorios",
    "Cabello",
    "Par",
    2500,
    {
        imagenes: [
            "assets/images/accesorios/CAIMANMINI.jpeg"
        ]
    }
),

p(
    "pinzas-hawaianas",
    "Pinzas hawaianas",
    "accesorios",
    "Cabello",
    "Par",
    4000,
    {
        variantes: [
            "Estilo 1",
            "Estilo 2",
            "Estilo 3",
            "Estilo 4"
        ],

        imagenes: [
            "assets/images/accesorios/pinzahawaina4estilos.jpeg"
        ]
    }
),

p(
    "flores-pinza-en-foami",
    "Flores pinza en foami",
    "accesorios",
    "Cabello",
    "Par",
    3000,
    {
        imagenes: [
            "assets/images/accesorios/florfoami.jpeg"
        ]
    }
),

p(
    "flores-en-pinzas",
    "Flores en pinzas",
    "accesorios",
    "Cabello",
    "Par",
    2000,
    {
        imagenes: [
            "assets/images/accesorios/pinzaflor.jpeg"
        ]
    }
),

p(
    "ganchos-hawaianos",
    "Ganchos hawaianos",
    "accesorios",
    "Cabello",
    "Unidad",
    5000,
    {
        imagenes: [
            "assets/images/accesorios/pinzahawaina4estilos.jpeg"
        ]
    }
),

p(
    "pinza-doble-flor",
    "Pinza doble flor",
    "accesorios",
    "Cabello",
    "Par",
    4000,
    {
        imagenes: [
            "assets/images/accesorios/pinzadobleflorycorazon.jpeg"
        ]
    }
),

p(
    "pinza-flor",
    "Pinza flor",
    "accesorios",
    "Cabello",
    "Unidad",
    3000,
    {
        imagenes: [
            "assets/images/accesorios/pinzaflor.jpeg"
        ]
    }
),

p(
    "mariposas-pinza",
    "Mariposas pinza",
    "accesorios",
    "Cabello",
    "Par",
    3000,
    {
        imagenes: [
            "assets/images/accesorios/MARIPOSAPINZA.jpeg",
            "assets/images/accesorios/pinzamariposa.jpeg"
        ]
    }
),

p(
    "pinza-corazon",
    "Pinza corazón",
    "accesorios",
    "Cabello",
    "Par",
    2500,
    {
        imagenes: [
            "assets/images/accesorios/pinzadobleflorycorazon.jpeg"
        ]
    }
),

p(
    "pinzas-estrella",
    "Pinzas estrella",
    "accesorios",
    "Cabello",
    "Par",
    2500,
    {
        imagenes: [
            "assets/images/accesorios/clipestrellametal.jpeg"
        ]
    }
),

p(
    "pinza-fresa",
    "Pinza fresa",
    "accesorios",
    "Cabello",
    "Par",
    3000,
    {
        imagenes: [
            "assets/images/accesorios/CLIPFRESA.jpeg"
        ]
    }
),

p(
    "pinza-hello-kitty",
    "Pinza Hello Kitty",
    "accesorios",
    "Cabello",
    "Par",
    2000,
    {
        imagenes: [
            "assets/images/accesorios/hellokittypinza.jpeg"
        ]
    }
),

p(
    "pinza-metal",
    "Pinza metal",
    "accesorios",
    "Cabello",
    "Par",
    3000,
    {
        imagenes: [
            "assets/images/accesorios/pinzametal.jpeg"
        ]
    }
),

p(
    "mono-satin",
    "Moño satín",
    "accesorios",
    "Cabello",
    "Unidad",
    3000,
    {
        imagenes: [
            "assets/images/accesorios/moñosatin.jpeg"
        ]
    }
),

p(
    "lazo-coquette-grande",
    "Lazo coquette grande",
    "accesorios",
    "Cabello",
    "Unidad",
    5000,
    {
        imagenes: [
            "assets/images/accesorios/lazocoquettegrande.jpeg",
            "assets/images/accesorios/lazocoquettegrande1.jpeg",
            "assets/images/accesorios/lazocoquettegrande2.jpeg"
        ]
    }
),

p(
    "lazo-coquette-pequeno",
    "Lazo coquette pequeño",
    "accesorios",
    "Cabello",
    "Par",
    3000,
    {
        imagenes: [
            "assets/images/accesorios/lazopequeño.jpeg",
            "assets/images/accesorios/lazopequeño1.jpeg"
        ]
    }
),

p(
    "lazo-coquette-mini",
    "Lazo coquette mini",
    "accesorios",
    "Cabello",
    "Par",
    5000,
    {
        imagenes: [
            "assets/images/accesorios/lazocoquete.jpeg"
        ]
    }
),

p(
    "lazo-mediano",
    "Lazo mediano",
    "accesorios",
    "Cabello",
    "Unidad",
    3000,
    {
        imagenes: [
            "assets/images/accesorios/lazomediano.jpeg"
        ]
    }
),

p(
    "lazo-tira-larga",
    "Lazo tira larga",
    "accesorios",
    "Cabello",
    "Par",
    3000,
    {
        imagenes: [
            "assets/images/accesorios/lazomedianoCOQUETE.jpeg"
        ]
    }
),

p(
    "lazo-en-pinza",
    "Lazo en pinza",
    "accesorios",
    "Cabello",
    "Par",
    3000,
    {
        imagenes: [
            "assets/images/accesorios/pinzaenlazo.jpeg"
        ]
    }
),


// #########################################################
// BELLEZA - MAQUILLAJE
// #########################################################

p(
    "base-foundation-bloomshell",
    "Base Foundation Bloomshell",
    "belleza",
    "Maquillaje",
    "Unidad",
    38000,
    {
        imagenes: [
            "assets/images/belleza/bASEbLOOM.jpeg",
            "assets/images/belleza/BaseBloomS.jpeg",
            "assets/images/belleza/BASEBLOOMSHELL.jpeg",
            "assets/images/belleza/BaseBloom.jpeg",
            "assets/images/belleza/BaseTONOS.jpeg"
        ]
    }
),

p(
    "base-fitmyi-foundation",
    "Base FITMYI Foundation",
    "belleza",
    "Maquillaje",
    "Unidad",
    7000,
    {
        imagenes: [
            "assets/images/belleza/baseFITMYI.jpeg"
        ]
    }
),

p(
    "corrector-bloomshell",
    "Corrector Bloomshell",
    "belleza",
    "Maquillaje",
    "10 ml",
    24000,
    {
        imagenes: [
            "assets/images/belleza/CorrectorBloom.jpeg",
            "assets/images/belleza/CorrectorBS.jpeg"
        ]
    }
),

p(
    "corrector-miss-betty",
    "Corrector Miss Betty",
    "belleza",
    "Maquillaje",
    "Unidad",
    8000,
    {
        imagenes: [
            "assets/images/belleza/CorrectorMissBetty.jpeg"
        ]
    }
),

p(
    "corrector-qoiderrose",
    "Corrector QOIDERROSE",
    "belleza",
    "Maquillaje",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/belleza/correctorQOIDERROSE.jpeg"
        ]
    }
),

p(
    "labial-lip-glow-oil",
    "Labial LIP Glow OIL",
    "belleza",
    "Maquillaje",
    "Unidad",
    8500,
    {
        imagenes: [
            "assets/images/belleza/LipGlowOil.jpeg"
        ]
    }
),

p(
    "gloss-oil",
    "Gloss Oil",
    "belleza",
    "Maquillaje",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/belleza/GlossOil.jpeg"
        ]
    }
),

p(
    "labial-matte",
    "Labial Matte",
    "belleza",
    "Maquillaje",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/belleza/labialmatte.jpeg"
        ]
    }
),

p(
    "Tinta-Paleta",
    "Tinta Paleta",
    "belleza",
    "Maquillaje",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/belleza/TintaPaleta.jpeg"
        ]
    }
),

p(
    "lip-gloss-jumbo",
    "Lip Gloss Jumbo",
    "belleza",
    "Maquillaje",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/belleza/LipGlossJUMBO.jpeg"
        ]
    }
),

// SHAQUINUO
p(
    "glossy-lip-shaqinuo",
    "Glossy LIP SHAQINUO",
    "belleza",
    "Maquillaje",
    "Unidad",
    7000,
    {
        imagenes: [
            "assets/images/belleza/glossyLIP.jpeg"
        ]
    }
),

// JUJU DREAM
p(
    "juju-dream-magic-lip-gloss",
    "JUJU DREAM Magic Lip Gloss",
    "belleza",
    "Maquillaje",
    "Unidad",
    2000,
    {
        imagenes: [
            "assets/images/belleza/JUJUDREAM.jpeg"
        ]
    }
),

p(
    "tinta-miss-betty-paleta",
    "Tinta Miss Betty Paleta",
    "belleza",
    "Maquillaje",
    "Unidad",
    7000,
    {
        imagenes: [
            "assets/images/belleza/TintaPaleta.jpeg"
        ]
    }
),

p(
    "tinta-hello-kitty",
    "Tinta Hello Kitty",
    "belleza",
    "Maquillaje",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/belleza/TintaHelloKitty.jpeg"
        ]
    }
),

p(
    "tinta-jumbo",
    "Tinta Jumbo",
    "belleza",
    "Maquillaje",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/belleza/TintaJUMBO.jpeg"
        ]
    }
),

p(
    "tinta-kitty",
    "Tinta Kitty",
    "belleza",
    "Maquillaje",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/belleza/TINTAkitty.jpeg"
        ]
    }
),

p(
    "tinta-kuromi",
    "Tinta Kuromi",
    "belleza",
    "Maquillaje",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/belleza/TINTAKUROMI.jpeg"
        ]
    }
),

p(
    "tinta-mini",
    "Tinta Mini",
    "belleza",
    "Maquillaje",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/belleza/TintaMini.jpeg"
        ]
    }
),

p(
    "paleta-1",
    "Paleta 1",
    "belleza",
    "Maquillaje",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/belleza/Paleta1.jpeg"
        ]
    }
),

p(
    "paleta-2",
    "Paleta 2",
    "belleza",
    "Maquillaje",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/belleza/Paleta2.jpeg"
        ]
    }
),

p(
    "paleta-mega",
    "Paleta Mega",
    "belleza",
    "Maquillaje",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/belleza/PaletaMEGA.jpeg",
            "assets/images/belleza/pALETAmega1.jpeg",
            "assets/images/belleza/PaletaMEGA2.jpeg"
        ]
    }
),

p(
    "pestanina-prosa",
    "Pestañina Prosa",
    "belleza",
    "Maquillaje",
    "Unidad",
    17000,
    {
        imagenes: [
            "assets/images/belleza/PROSA.jpeg",
            "assets/images/belleza/PROSA1.jpeg"
        ]
    }
),

p(
    "pestanina-shedoes",
    "Pestañina SHEDOES",
    "belleza",
    "Maquillaje",
    "Unidad",
    10000,
    {
        imagenes: [
            "assets/images/belleza/SHEDOES.jpeg"
        ]
    }
),

p(
    "pestanina-up",
    "Pestañina UP",
    "belleza",
    "Maquillaje",
    "Unidad",
    8000,
    {
        imagenes: [
            "assets/images/belleza/PESTAÑINAUP.jpeg",
            "assets/images/belleza/PESTAÑINAUP2.jpeg"
        ]
    }
),

p(
    "pestanina-miss-betty",
    "Pestañina Miss Betty",
    "belleza",
    "Maquillaje",
    "Unidad",
    7000,
    {
        imagenes: [
            "assets/images/belleza/MISSBETTY.jpeg"
        ]
    }
),

p(
    "pestanina",
    "Pestañina",
    "belleza",
    "Maquillaje",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/belleza/PESTAÑINA.jpeg"
        ]
    }
),


// #########################################################
// BELLEZA - PESTAÑAS
// #########################################################

p(
    "pestanas-caja-60-puntos",
    "Pestañas Caja 60 puntos",
    "belleza",
    "Pestañas",
    "Caja",
    10000,
    {
        variantes: [
            "10D",
            "30D",
            "40D",
            "50D",
            "60D",
            "80D",
            "100D"
        ],

        imagenes: [
            "assets/images/belleza/PESTAÑAS60P-1.jpeg",
            "assets/images/belleza/PESTAÑAS60P-2.jpeg",
            "assets/images/belleza/PESTAÑAS60P-3.jpeg",
            "assets/images/belleza/PESTAÑAS60P-4.jpeg",
            "assets/images/belleza/PESTAÑAS60P-5.jpeg",
            "assets/images/belleza/PESTAÑAS60P-6.jpeg",
            "assets/images/belleza/PESTAÑAS60P-7.jpeg",
            "assets/images/belleza/PESTAÑAS60P-8.jpeg",
            "assets/images/belleza/PESTAÑAS60P-9.jpeg",
            "assets/images/belleza/PESTAÑAS60P-10.jpeg",
            "assets/images/belleza/PESTAÑAS60P-11.jpeg",
            "assets/images/belleza/PESTAÑAS60P-12.jpeg",
            "assets/images/belleza/PESTAÑAS60P-13.jpeg",
            "assets/images/belleza/PESTAÑAS60P-14.jpeg",
            "assets/images/belleza/PESTAÑAS60P-15.jpeg",
            "assets/images/belleza/PESTAÑAS60P-16.jpeg",
            "assets/images/belleza/PESTAÑAS60P-17.jpeg"
        ],

        destacado: true
    }
),

p(
    "tablon-200-puntos",
    "Tablón de 200 puntos",
    "belleza",
    "Pestañas",
    "Tablón",
    25000,
    {
        variantes: [
            "30D",
            "40D",
            "60D",
            "80D"
        ],

        imagenes: [
            "assets/images/belleza/TABLON200P.jpeg",
            "assets/images/belleza/TABLON200P-30D.jpeg",
            "assets/images/belleza/TABLON200P-60D.jpeg",
            "assets/images/belleza/TABLON200P-80D.jpeg"
        ],

        destacado: true
    }
),

p(
    "libros-pestanas-clasico",
    "Libros de Pestañas efecto clasico",
    "belleza",
    "Pestañas",
    "Libro",
    40000,
    {
        variantes: [
            "30D",
            "40D",
            "50D",

        ],

        imagenes: [
            "assets/images/belleza/LIBRO1.jpeg",
            "assets/images/belleza/LIBRO2.jpeg",
            "assets/images/belleza/LIBRO3.jpeg"
        ],

        destacado: true
    }
),
p(
    "libros-pestanas-ruso",
    "Libros de Pestañas efecto volumen Ruso",
    "belleza",
    "Pestañas",
    "Libro",
    40000,
    {
        variantes: [
            "60D",
            "80D",
            "100D",
        ],

        imagenes: [
            "assets/images/belleza/LIBRO4.jpeg",
            "assets/images/belleza/LIBRO5.jpeg",
            "assets/images/belleza/LIBRO6.jpeg",
            "assets/images/belleza/LIBRO8.jpeg",
            "assets/images/belleza/LIBRO9.jpeg",
            "assets/images/belleza/LIBRO10.jpeg",
            "assets/images/belleza/LIBRO12.jpeg"

        ],

        destacado: true
    }
),

p(
    "libros-pestanas-anime",
    "Libros de Pestañas efecto ANIME",
    "belleza",
    "Pestañas",
    "Libro",
    35000,
    {
        variantes: [
            "ANIME"
        ],

        imagenes: [
            "assets/images/belleza/LIBROANIME.jpeg",
            "assets/images/belleza/LIBROWISPY.jpeg",
            "assets/images/belleza/LIBROWISPY2.jpeg"
        ],

        destacado: true
    }
),

p(
    "pegante-salon-pro",
    "Pegante Salon Pro",
    "belleza",
    "Pestañas",
    "Unidad",
    10000,
    {
        imagenes: [
            "assets/images/belleza/PeganteSalonPRO.jpeg"
        ]
    }
),

p(
    "pega-y-sello",
    "Pega y Sello",
    "belleza",
    "Pestañas",
    "Unidad",
    12000,
    {
        imagenes: [
            "assets/images/belleza/duopegante.jpeg"
        ]
    }
),

p(
    "kit-mini-pestanas",
    "Kit Mini Pestañas",
    "belleza",
    "Pestañas",
    "Kit",
    8000,
    {
        imagenes: [
            "assets/images/belleza/KITMINI1.jpeg",
            "assets/images/belleza/KITMINI2.jpeg",
            "assets/images/belleza/KITMINI3.jpeg",
            "assets/images/belleza/KITMINI4.jpeg",
            "assets/images/belleza/KITMINI5.jpeg",
            "assets/images/belleza/KITMINI6.jpeg",
            "assets/images/belleza/KITMINI7.jpeg",
            "assets/images/belleza/KITMINI8.jpeg",
            "assets/images/belleza/KITMINI9.jpeg",
            "assets/images/belleza/KITMINI10.jpeg",
            "assets/images/belleza/KITMINI11.jpeg",
            "assets/images/belleza/KITMINI12.jpeg",
            "assets/images/belleza/KITMINI13.jpeg",
            "assets/images/belleza/KITMINI14.jpeg",
            "assets/images/belleza/KITMINI15.jpeg",
            "assets/images/belleza/KITMINI16.jpeg"
        ],

        destacado: true
    }
),

p(
    "kit-grande-pestanas",
    "Kit Grande Pestañas",
    "belleza",
    "Pestañas",
    "Kit",
    25000,
    {
        imagenes: [
            "assets/images/belleza/KIT1.jpeg",
            "assets/images/belleza/KIT2.jpeg",
            "assets/images/belleza/KIT3.jpeg",
            "assets/images/belleza/KIT4.jpeg",
            "assets/images/belleza/KIT5.jpeg",
            "assets/images/belleza/KIT6.jpeg",
            "assets/images/belleza/KIT7.jpeg",
            "assets/images/belleza/KIT8.jpeg",
            "assets/images/belleza/KIT9.jpeg",
            "assets/images/belleza/KIT10.jpeg",
            "assets/images/belleza/KIT11.jpeg",
            "assets/images/belleza/KIT13.jpeg",
            "assets/images/belleza/KIT14.jpeg",
            "assets/images/belleza/KIT15.jpeg",
            "assets/images/belleza/KIT16.jpeg",
            "assets/images/belleza/KIT17.jpeg",
            "assets/images/belleza/KIT18.jpeg",
            "assets/images/belleza/KIT19.jpeg",
            "assets/images/belleza/KIT20.jpeg",
            "assets/images/belleza/KIT21.jpeg",
            "assets/images/belleza/KIT22.jpeg"
        ],

        destacado: true
    }
),

p(
    "cepillo-pestanas",
    "Cepillo para Pestañas",
    "belleza",
    "Pestañas",
    "Unidad",
    1500,
    {
        imagenes: [
            "assets/images/belleza/CEPILLOPESTAÑAS.jpeg"
        ]
    }
),

p(
    "anillo-pegante",
    "Anillo para Pegante",
    "belleza",
    "Pestañas",
    "Unidad",
    500,
    {
        imagenes: [
            "assets/images/belleza/ANILLOPESTAÑAS.jpeg"
        ]
    }
),


// #########################################################
// BELLEZA - UÑAS
// #########################################################

p(
    "unas-press-on-mano",
    "Uñas Press On Manos",
    "belleza",
    "Uñas",
    "Set",
    12000,
    {
        imagenes: [
            "assets/images/belleza/uñasmanos.jpeg",
            "assets/images/belleza/uñasmanos1.jpeg",
            "assets/images/belleza/uñasmanos2.jpeg",
            "assets/images/belleza/uñasmanos3.jpeg",
            "assets/images/belleza/uñasmanos4.jpeg",
            "assets/images/belleza/uñasmanos6.jpeg",
            "assets/images/belleza/uñasmanos7.jpeg"
        ]
    }
),

p(
    "unas-press-on-pies",
    "Uñas Press On Pies",
    "belleza",
    "Uñas",
    "Set",
    10000,
    {
        imagenes: [
            "assets/images/belleza/uñaspies.jpeg",
            "assets/images/belleza/uñaspies1.jpeg",
            "assets/images/belleza/uñaspies2.jpeg"
        ]
    }
),

p(
    "tip-gel-unas-manos",
    "Tip Gel Uñas Manos",
    "belleza",
    "Uñas",
    "Set",
    null,
    {
        imagenes: [
            "assets/images/belleza/uñasgelmanos.jpeg"
        ]
    }
),

p(
    "tip-gel-unas-pies",
    "Tip Gel Uñas Pies",
    "belleza",
    "Uñas",
    "Set",
    null,
    {
        imagenes: [
            "assets/images/belleza/uñasgelpies.jpeg"
        ]
    }
),


// #########################################################
// PAPELERÍA - OFICINA
// #########################################################

p(
    "hoja-de-vida",
    "Hoja de Vida",
    "papeleria",
    "Oficina",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/hojadevida.jpeg",
            "assets/images/papeleria/hojadevida.png"
        ]
    }
),

p(
    "sobre-manila",
    "Sobre Manila",
    "papeleria",
    "Oficina",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/sobremanila.jpeg"
        ]
    }
),

p(
    "carpeta-azul",
    "Carpeta Azul",
    "papeleria",
    "Oficina",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/carpetaazul.jpeg"
        ]
    }
),

p(
    "carpeta-bisel",
    "Carpeta Bisel",
    "papeleria",
    "Oficina",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/carpetabisel.jpeg"
        ]
    }
),

p(
    "grapadora",
    "Grapadora",
    "papeleria",
    "Oficina",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/GRapadora.png"
        ]
    }
),

p(
    "grapadora-offiesco-grande",
    "Grapadora Offiesco Grande",
    "papeleria",
    "Oficina",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/grapadoraoffiescogrande.png"
        ]
    }
),

p(
    "grapadora-pequena",
    "Grapadora Pequeña",
    "papeleria",
    "Oficina",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/grapadorapeq.png"
        ]
    }
),

p(
    "corrector-offiesco",
    "Corrector Offiesco",
    "papeleria",
    "Oficina",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/correctoroffiesco.png"
        ]
    }
),

p(
    "huellero",
    "Huellero",
    "papeleria",
    "Oficina",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/huellero.png"
        ]
    }
),

p(
    "resma-carta",
    "Resma Carta",
    "papeleria",
    "Oficina",
    "Resma",
    null,
    {
        imagenes: [
            "assets/images/papeleria/resmaCarta.png"
        ]
    }
),

p(
    "resma-oficio",
    "Resma Oficio",
    "papeleria",
    "Oficina",
    "Resma",
    null,
    {
        imagenes: [
            "assets/images/papeleria/resmaoficio.png"
        ]
    }
),


// #########################################################
// PAPELERÍA - CUADERNOS
// #########################################################

p(
    "block-rayas",
    "Block Rayas",
    "papeleria",
    "Cuadernos",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/blockrayas.png"
        ]
    }
),

p(
    "cuaderno",
    "Cuaderno",
    "papeleria",
    "Cuadernos",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/cuaderno.png"
        ]
    }
),

p(
    "cuaderno-qnota",
    "Cuaderno QNOTA",
    "papeleria",
    "Cuadernos",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/cuadernoQNOTA.png"
        ]
    }
),

p(
    "cuaderno-zeppelin",
    "Cuaderno Zeppelin",
    "papeleria",
    "Cuadernos",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/CUADERNOZEPELLIN.png"
        ]
    }
),


// #########################################################
// PAPELERÍA - ESCRITURA
// #########################################################

p(
    "lapicero-eterna",
    "Lapicero Eterna",
    "papeleria",
    "Escritura",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/LAPICEROETERNA.png"
        ]
    }
),

p(
    "lapicero-offiesco",
    "Lapicero Offiesco",
    "papeleria",
    "Escritura",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/lapicerooffiesco.png",
            "assets/images/papeleria/LAPICEROOFIESCO.png"
        ]
    }
),

p(
    "lapicero-retractil-eterna",
    "Lapicero Retráctil Eterna",
    "papeleria",
    "Escritura",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/LAPICERORETRACTILETENERA.png"
        ]
    }
),

p(
    "lapicero-retractil-offiesco",
    "Lapicero Retráctil Offiesco",
    "papeleria",
    "Escritura",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/LAPICERORETRACTILOFFIESCO.png"
        ]
    }
),

p(
    "lapiz-azul",
    "Lápiz Azul",
    "papeleria",
    "Escritura",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/lapizazul.png"
        ]
    }
),

p(
    "lapiz-rojo",
    "Lápiz Rojo",
    "papeleria",
    "Escritura",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/lapizrojo.png"
        ]
    }
),

p(
    "lapiz-paper-mate",
    "Lápiz Paper Mate",
    "papeleria",
    "Escritura",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/lapizpappermatte.png"
        ]
    }
),

p(
    "lapices-colores",
    "Lápices de Colores",
    "papeleria",
    "Escritura",
    "Caja",
    null,
    {
        imagenes: [
            "assets/images/papeleria/lapiz-colores.png",
            "assets/images/papeleria/colores.png"
        ]
    }
),

p(
    "colores-eterna-pequenos",
    "Colores Eterna Pequeños",
    "papeleria",
    "Escritura",
    "Caja",
    null,
    {
        imagenes: [
            "assets/images/papeleria/coloreseternapequeños.png"
        ]
    }
),

p(
    "colores-offiesco",
    "Colores Offiesco",
    "papeleria",
    "Escritura",
    "Caja",
    null,
    {
        imagenes: [
            "assets/images/papeleria/coloresoffiesco.png"
        ]
    }
),

p(
    "colores-paper-mate",
    "Colores Paper Mate",
    "papeleria",
    "Escritura",
    "Caja",
    null,
    {
        imagenes: [
            "assets/images/papeleria/colorespapermatte.png"
        ]
    }
),

p(
    "colores-eterna",
    "Colores Eterna",
    "papeleria",
    "Escritura",
    "Caja",
    null,
    {
        imagenes: [
            "assets/images/papeleria/coloreterna.png"
        ]
    }
),

p(
    "colores-graficolor",
    "Colores Graficolor",
    "papeleria",
    "Escritura",
    "Caja",
    null,
    {
        imagenes: [
            "assets/images/papeleria/colorgraficolor.png"
        ]
    }
),

p(
    "colores-new-elite",
    "Colores New Elite",
    "papeleria",
    "Escritura",
    "Caja",
    null,
    {
        imagenes: [
            "assets/images/papeleria/colornewelite.png"
        ]
    }
),

p(
    "colores-norma",
    "Colores Norma",
    "papeleria",
    "Escritura",
    "Caja",
    null,
    {
        imagenes: [
            "assets/images/papeleria/colornorma.png"
        ]
    }
),


// #########################################################
// PAPELERÍA - MARCADORES
// #########################################################

p(
    "marcador-doricolor",
    "Marcador Doricolor",
    "papeleria",
    "Marcadores",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/marcadordoricolor.png"
        ]
    }
),

p(
    "marcador-doricolor-pequeno",
    "Marcador Doricolor Pequeño",
    "papeleria",
    "Marcadores",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/marcadorpeqdoricolor.png"
        ]
    }
),

p(
    "marcador-eterna",
    "Marcador Eterna",
    "papeleria",
    "Marcadores",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/marcadoreterna.png"
        ]
    }
),

p(
    "marcador-marfil",
    "Marcador Marfil",
    "papeleria",
    "Marcadores",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/marcadormarfil.png"
        ]
    }
),

p(
    "marcador-permanente-eterna",
    "Marcador Permanente Eterna",
    "papeleria",
    "Marcadores",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/marcadorpermaeterna.png"
        ]
    }
),

p(
    "marcador-pizarra-eterna",
    "Marcador para Pizarra Eterna",
    "papeleria",
    "Marcadores",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/marcadorpizarraeterna.png"
        ]
    }
),

p(
    "resaltador-eterna",
    "Resaltador Eterna",
    "papeleria",
    "Marcadores",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/resaltadoreterna.png"
        ]
    }
),

p(
    "resaltador-offiesco",
    "Resaltador Offiesco",
    "papeleria",
    "Marcadores",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/resaltadoroffiesco.png"
        ]
    }
),


// #########################################################
// PAPELERÍA - ARTE Y MANUALIDADES
// #########################################################

p(
    "bisturi-grande",
    "Bisturí Grande",
    "papeleria",
    "Arte y manualidades",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/bisturigranbde.jpeg"
        ]
    }
),

p(
    "tijera-escolar",
    "Tijera Escolar",
    "papeleria",
    "Arte y manualidades",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/tijeraescolar.jpeg"
        ]
    }
),

p(
    "foami",
    "Foami",
    "papeleria",
    "Arte y manualidades",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/foami.jpeg"
        ]
    }
),

p(
    "foami-mirellado",
    "Foami Mirellado",
    "papeleria",
    "Arte y manualidades",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/foamimirellado.png"
        ]
    }
),

p(
    "plastilina-marfil",
    "Plastilina Marfil",
    "papeleria",
    "Arte y manualidades",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/plastilinamarfil.png"
        ]
    }
),

p(
    "plastilina",
    "Plastilina",
    "papeleria",
    "Arte y manualidades",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/Plastilinap.png"
        ]
    }
),

p(
    "plastilina-parchesitos-pequena",
    "Plastilina Parchesitos Pequeña",
    "papeleria",
    "Arte y manualidades",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/plastilinapequeñaparchesitos.png"
        ]
    }
),

p(
    "temperas-marfil",
    "Témperas Marfil",
    "papeleria",
    "Arte y manualidades",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/temperasmarfil.jpeg"
        ]
    }
),

p(
    "temperas-parchesitos",
    "Témperas Parchesitos",
    "papeleria",
    "Arte y manualidades",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/temperasparchesitos.jpeg"
        ]
    }
),

p(
    "vinilo-marfil",
    "Vinilo Marfil",
    "papeleria",
    "Arte y manualidades",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/vinilomarfil.jpeg"
        ]
    }
),

p(
    "vinilo-marfil-pequeno",
    "Vinilo Marfil Pequeño",
    "papeleria",
    "Arte y manualidades",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/vinilopeqmarfil.jpeg"
        ]
    }
),

p(
    "vinilo-parchesitos",
    "Vinilo Parchesitos",
    "papeleria",
    "Arte y manualidades",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/viniloparchesitos.jpeg"
        ]
    }
),

p(
    "vinilo-parchesitos-pequeno",
    "Vinilo Parchesitos Pequeño",
    "papeleria",
    "Arte y manualidades",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/vinilopequeñoparchesitos.jpeg"
        ]
    }
),


// #########################################################
// PAPELERÍA - REGLAS
// #########################################################

p(
    "regla-elastica",
    "Regla Elástica",
    "papeleria",
    "Reglas",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/reglaelastica.png"
        ]
    }
),

p(
    "regla-metalica",
    "Regla Metálica",
    "papeleria",
    "Reglas",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/reglametalica.png"
        ]
    }
),


// #########################################################
// PAPELERÍA - CINTAS Y PEGANTES
// #########################################################

p(
    "cinta-aislante",
    "Cinta Aislante",
    "papeleria",
    "Cintas y pegantes",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/cintaaislante.png"
        ]
    }
),

p(
    "cinta-pequena",
    "Cinta Pequeña",
    "papeleria",
    "Cintas y pegantes",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/cintapequeña.png"
        ]
    }
),

p(
    "cinta-grande",
    "Cinta Grande",
    "papeleria",
    "Cintas y pegantes",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/citagande.png"
        ]
    }
),

p(
    "colbon-marfil",
    "Colbón Marfil",
    "papeleria",
    "Cintas y pegantes",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/colbonmarfil.png"
        ]
    }
),

p(
    "colbon-sipega",
    "Colbón Sipega",
    "papeleria",
    "Cintas y pegantes",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/colbonsipega.png"
        ]
    }
),

p(
    "pega-loca",
    "Pega Loca",
    "papeleria",
    "Cintas y pegantes",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/pegaloca.jpeg"
        ]
    }
),

p(
    "silicona-eterna",
    "Silicona Eterna",
    "papeleria",
    "Cintas y pegantes",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/siliconaeterna.png"
        ]
    }
),

p(
    "silicona-marfil",
    "Silicona Marfil",
    "papeleria",
    "Cintas y pegantes",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/siliconamarfil.png"
        ]
    }
),

p(
    "silicona-en-barra",
    "Silicona en Barra",
    "papeleria",
    "Cintas y pegantes",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/siliconaenbarra.png"
        ]
    }
),


// #########################################################
// PAPELERÍA - PAPELES
// #########################################################

p(
    "carton-paja",
    "Cartón Paja",
    "papeleria",
    "Papeles",
    "Unidad",
    null,
    {
        variantes: [
            "Octavo",
            "Cuarto"
        ],

        imagenes: [
            "assets/images/papeleria/cartonpaja.jpeg",
            "assets/images/papeleria/cartonpaja1.jpeg"
        ]
    }
),

p(
    "cartulina",
    "Cartulina",
    "papeleria",
    "Papeles",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/cartulina.png"
        ]
    }
),

p(
    "cartulina-blanca",
    "Cartulina Blanca",
    "papeleria",
    "Papeles",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/cartulinablanca.png"
        ]
    }
),

p(
    "papel-cometa",
    "Papel Cometa",
    "papeleria",
    "Papeles",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/papelcometa.png"
        ]
    }
),

p(
    "papel-periodico",
    "Papel Periódico",
    "papeleria",
    "Papeles",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/papelperiodico.png"
        ]
    }
),

p(
    "papel-regalo",
    "Papel de Regalo",
    "papeleria",
    "Papeles",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/papelregalo.png"
        ]
    }
),


// #########################################################
// PAPELERÍA - OTROS
// #########################################################

p(
    "algodon",
    "Algodón",
    "papeleria",
    "Otros",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/algodon.png"
        ]
    }
),

p(
    "copitos",
    "Copitos",
    "papeleria",
    "Otros",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/copitos.png"
        ]
    }
),

p(
    "esponja-platos",
    "Esponja para Platos",
    "papeleria",
    "Otros",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/espojaplatos.png"
        ]
    }
),

p(
    "esponja-alambre",
    "Esponja de Alambre",
    "papeleria",
    "Otros",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/esponjaalambre.png"
        ]
    }
),

p(
    "tapabocas",
    "Tapabocas",
    "papeleria",
    "Otros",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/tapabocas.png"
        ]
    }
),

p(
    "nata-612",
    "Nata 612",
    "papeleria",
    "Otros",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/nata612.png"
        ]
    }
),

p(
    "nata-624",
    "Nata 624",
    "papeleria",
    "Otros",
    "Unidad",
    null,
    {
        imagenes: [
            "assets/images/papeleria/nata624.png"
        ]
    }
),


// #########################################################
// CAJAS
// #########################################################

p(
    "caja-emprendedora",
    "Caja Emprendedora",
    "cajas",
    "Emprendedoras",
    "Caja personalizada",
    35000,
    {
        precioDesde: true,

        aplicaDescuentoEmprendedor: false,

        imagenes: [
            "assets/images/cajas/CajaEmprendedora1.jpeg",
            "assets/images/cajas/CajaEmprendedora2.jpeg",
            "assets/images/cajas/CajaEmprendedora3.jpeg",
            "assets/images/cajas/CajaEmprendedora4.jpeg",
            "assets/images/cajas/CajaEmprendedora5.jpeg",
            "assets/images/cajas/CajaEmprendedora6.jpeg",
            "assets/images/cajas/CajaEmprendedora7.jpeg"
        ],

        destacado: true,

        descripcion:
            "Caja para emprendedores armada de acuerdo con tu presupuesto y disponibilidad de productos. Disponible desde $35.000."
    }
),

p(
    "caja-regalo",
    "Caja de Regalo",
    "cajas",
    "Regalos",
    "Caja personalizada",
    null,
    {
        aplicaDescuentoEmprendedor: false,

        imagenes: [
            "assets/images/cajas/Caja1.jpeg",
            "assets/images/cajas/Caja2.jpeg"
        ],

        destacado: true,

        descripcion:
            "Caja de regalo personalizada. El precio depende de los productos, presentación y detalles seleccionados."
    }
)

];


// =========================================================
// HACER DATOS DISPONIBLES A LOS DEMÁS ARCHIVOS
// =========================================================

window.productos = productos;
window.categoriasZamana = categoriasZamana;