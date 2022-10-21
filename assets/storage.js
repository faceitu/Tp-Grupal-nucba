let carrito = JSON.parse(localStorage.getItem("compras")) || []


const categories = [{
        name: 'Pizza',
        img: './assets/img/Categories/icon_pizza.png'
    },
    {
        name: 'Hamburguesas',
        img: "./assets/img/Categories/icon_burger.png"
    },
    {
        name: 'Napapuki',
        img: './assets/img/Categories/fries2.png'
    },
    {
        name: 'Individuales',
        img: './assets/img/Categories/pizza.png'
    },
    {
        name: 'Wraps',
        img: './assets/img/Categories/buritto1.png'
    },
    {
        name: 'Mexican food',
        img: './assets/img/Categories/taco.png'
    },
    {
        name: 'Batidukis',
        img: './assets/img/Categories/helado.png'
    },

];

const menu =

    [{
            id: 1,
            name: 'La Mr. Pit',
            precio: 350,
            data: 'solo para expertos',
            img: './assets/img/menu0.png',
            cat: 'Pizza',
            popular: false,
            recomendada: false

        },
        {
            id: 2,
            name: '¡Q Jammone!',
            precio: 350,
            data: 'c / jamon crudo ',
            img: './assets/img/menu1.png',
            cat: 'Pizza',
            popular: false,
            recomendada: true
        },
        {
            id: 3,
            name: 'La Charly Garcia',
            precio: 380,
            data: '¡Basta!',
            img: './assets/img/menu2.png',
            cat: 'Pizza',
            popular: false,
            recomendada: false
        },
        {
            id: 4,
            name: 'La Maradona',
            precio: 450,
            data: '¡Eterna!',
            img: './assets/img/menu4.png',
            cat: 'Pizza',
            popular: false,
            recomendada: false
        },
        {
            id: 5,
            name: 'Picantovich',
            precio: 750,
            data: 'Pica 2 veces',
            img: './assets/img/picant.png',
            cat: 'Pizza',
            popular: false,
            recomendada: true
        },
        {
            id: 6,
            name: 'La Hasbulla',
            precio: 990,
            data: 'En honor al 1',
            img: './assets/img/menu6.png',
            cat: 'Pizza',
            popular: false,
            recomendada: false
        },
        {
            id: 7,
            name: 'Leo Messi',
            precio: 10,
            data: '¡De pie señores!',
            img: './assets/img/menu7.png',
            cat: 'Pizza',
            popular: false,
            recomendada: false
        },
        {
            id: 8,
            name: 'Nick Gi',
            precio: 0,
            data: 'La que desaparece',
            img: './assets/img/menu5.png',
            cat: 'Pizza',
            popular: false,
            recomendada: false
        },
        {
            id: 9,
            name: 'Bennazianna',
            precio: 3650,
            data: 'La mas completa',
            img: './assets/img/menu_reco1.jpg',
            cat: 'Pizza',
            popular: false,
            recomendada: true
        },
        {
            id: 10,
            name: 'Tronco-Pizza',
            precio: 870,
            data: 'Para todo el dia',
            img: './assets/img/menu_reco2.jpg',
            cat: 'Pizza',
            popular: true,
            recomendada: false
        },
        {
            id: 11,
            name: 'Papas / Provenzal',
            precio: 360,
            data: 'Van como piña',
            img: './assets/img/menu_reco3.jpg',
            cat: 'Napapuki',
            popular: true,
            recomendada: false
        },
        {
            id: 12,
            name: 'Rompe higados',
            precio: 2360,
            data: 'Va con hepatalgina',
            img: './assets/img/burguers/rompehigados.jpg',
            cat: 'Hamburguesas',
            popular: false,
            recomendada: true
        },
        {
            id: 13,
            name: 'Primavera',
            precio: 2110,
            data: 'Refrescante',
            img: './assets/img/burguers/primavera.jpg',
            cat: 'Hamburguesas',
            popular: false,
            recomendada: false
        },
        {
            id: 14,
            name: 'Cheddar * 3',
            precio: 2520,
            data: 'Delicia de la casa',
            img: './assets/img/burguers/triple-cheddar.jpeg',
            cat: 'Hamburguesas',
            popular: true,
            recomendada: false
        },
        {
            id: 15,
            name: 'p/verdeo+cheddar',
            precio: 920,
            data: 'Explocion galactica',
            img: './assets/img/papas/cheddar-verdeo.png',
            cat: 'Napapuki',
            popular: false,
            recomendada: false
        },
        {
            id: 16,
            name: 'p/ Barbacoa',
            precio: 1050,
            data: 'A otra dimencion',
            img: './assets/img/papas/papas-barbacoa.jpg',
            cat: 'Napapuki',
            popular: false,
            recomendada: true
        },
        {
            id: 17,
            name: 'p/ Beacon',
            precio: 1150,
            data: 'Tormenta nebular',
            img: './assets/img/papas/papas-beacon.jpg',
            cat: 'Napapuki',
            popular: false,
            recomendada: false
        },
        {
            id: 18,
            name: 'Wrpa/Vegetales',
            precio: 1310,
            data: 'Cadenas de andromeda',
            img: './assets/img/wraps/wrap-vegetales.jpg',
            cat: 'Wraps',
            popular: false,
            recomendada: true
        },
        {
            id: 19,
            name: 'Wrpa/italiano',
            precio: 1410,
            data: 'Polvo de diamante',
            img: './assets/img/wraps/wrap-italiano.jpg',
            cat: 'Wraps',
            popular: false,
            recomendada: false
        },
        {
            id: 20,
            name: 'Wrpa/Pollo',
            precio: 1190,
            data: 'Gran cuerno',
            img: './assets/img/wraps/wrap-pollo.jpg',
            cat: 'Wraps',
            popular: false,
            recomendada: true
        },
        {
            id: 21,
            name: 'Taco/Asado',
            precio: 1990,
            data: 'Espada escalubur',
            img: "./assets/img/Tacos/taco-asado.jpg",
            cat: 'Mexican food',
            popular: false,
            recomendada: true
        },
        {
            id: 22,
            name: 'Taco/Cerdo',
            precio: 1770,
            data: 'Ejecucion aurora',
            img: './assets/img/tacos/taco-cerdo.jpg',
            cat: 'Mexican food',
            popular: false,
            recomendada: false
        },
        {
            id: 23,
            name: 'Taco/Primavera',
            precio: 1770,
            data: 'Rosas pirañas',
            img: './assets/img/tacos/taco-primavera.jpg',
            cat: 'Mexican food',
            popular: false,
            recomendada: false
        },

    ]