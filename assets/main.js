const finding = document.getElementById('container_recomendation');
const categorie = document.querySelector('.container_categories');
const mostPopular = document.getElementById('container_most_popular');
const btnCall = document.querySelectorAll('btn_card');
const tituloMostpopular = document.getElementById('title_most')
const cantProductos = document.querySelector('.counter_cart')
const btnBuy = document.querySelector('.btn_buy')
const precioTotal = document.getElementById('precio_total')
const subTotal = document.getElementById('sub_cart')
const sellCart = document.getElementById('sell_cart')

/* Carrito de compras */
const overlay = document.querySelector('.overlay');
const cartMenu = document.querySelector('.cart');
const btnClose = document.querySelector('.btn_close')
const cartBtn = document.querySelector('.cart_container');

const saveCarrito = (carrito) => {
    localStorage.setItem('compras', JSON.stringify(carrito))
}

const rendersection = menu => {
    return `
        <div class = "card card_recomendation" >
            <img  class = "img" src = "${menu.img}" >
            <div class = "text_card" >
                <span class = "tittle_card" > ${menu.name} </span> 
                <p class = "subtitle_card" >${menu.data}</p> 
                <span class="price_card">$ ${menu.precio} </span> 
            </div> 
            <button class="btn btn_card" id= "btn_add" data-id = ${menu.id} >Agregar</button>
        </div> `
};

const selectCategories = (e) => {
    tag = e.target.getAttribute('data-id')
    menuPorCategoria = menu.filter(categoria => categoria.cat === tag);
    if (menuPorCategoria.length > 0) {

        tituloMostpopular.textContent = tag
        mostPopular.innerHTML = menuPorCategoria.map(prod => renderPopular(prod)).join('')
    } else {
        tituloMostpopular.textContent = ""
        mostPopular.innerHTML = renderError()

    }
}

const renderError = () => {
    return `
    <div class = "product_not_found" >
        <i class="icon_not_found fas fa-exclamation-triangle"></i>
        <h2 class="text_not_found">Disculpe, no contamos con este producto momentaneamente</h2>
    </div>
   
    `
}

const renderCategories = cat => {
    categorie.addEventListener('click', selectCategories)
    return `<div class="card card_categories" data-id = "${cat.name}">
                <!-- Template para JS Categorias -->
                <div class="icon_img_card">
                        <img class="img_icon icon_categories" data-id = "${cat.name}" src=${cat.img} alt="">
                </div>
                <img class="img_icon icon_blur" src=${cat.img} alt="">
                <p class="subtitle_card subtitle_categories" data-id = "${cat.name}">${cat.name}</p>
                <span class="line_categories"></span>
            </div>
    `
};

const renderPopular = (prod) => {

    return `
    <div class = "card card_most_popular" >
    <img class = "img_popular" src="${prod.img}" alt="">
    <div class="container_text_popular">
    <div class="text_card">
    <span class="tittle_card">${prod.name} </span>
            <p class="subtitle_card"> ${prod.data}</p>
            <span class="price_card">$ ${prod.precio}</span>
        </div>
        <button class="btn btn_card" id= "btn_add" data-id = ${prod.id} >Agregar</button>
    </div>
    </div>
     `
}
const cantTotalproductos = () => {
    let totalProductos = 0
    carrito.forEach(prod =>
        totalProductos = totalProductos + prod.cant)
    return totalProductos
}
const setPrecio = (carrito) => {
    pTotal = 0
    carrito.forEach(prod => pTotal += (prod.precio * prod.cant))
    console.log(pTotal)
    return pTotal
}

const addCarrito = (e) => {

    if (e.target.nodeName === "BUTTON") {
        tag = e.target.getAttribute('data-id')
        tag2 = e.target.getAttribute('data-resta')
        const producto = menu.find(item => item.id === Number(tag))
        let existente = carrito.find(prod => prod.id === producto.id)
        console.log(carrito)
        if (!existente & tag2 != 'resta') {
            producto.cant = 1
            carrito = [...carrito, producto]
            saveCarrito(carrito)
            renderCarrito(carrito)
            precioTotal.textContent = setPrecio(carrito)
            subTotal.textContent = setPrecio(carrito)
        } else {
            if (tag2 === 'resta') {
                if (existente.cant > 1) {
                    existente.cant = existente.cant - 1
                    saveCarrito(carrito)
                    renderCarrito(carrito)
                    const index = carrito.findIndex((element) => element.id === existente.id);
                    carrito[index] = existente
                    precioTotal.textContent = setPrecio(carrito)
                    subTotal.textContent = setPrecio(carrito)
                } else {

                    const index = carrito.findIndex((element) => element.id === existente.id);
                    carrito = carrito.filter(prod => prod.id != existente.id)
                    precioTotal.textContent = setPrecio(carrito)
                    subTotal.textContent = setPrecio(carrito)
                    saveCarrito(carrito)
                    renderCarrito(carrito)
                    checkCarrito(carrito);

                }
            } else {
                existente.cant = existente.cant + 1
                const index = carrito.findIndex((element) => element.id === existente.id);
                carrito[index] = existente
                saveCarrito(carrito)
                subTotal.textContent = setPrecio(carrito)
                precioTotal.textContent = setPrecio(carrito)
                renderCarrito(carrito)
            }
        }
        cantProductos.textContent = cantTotalproductos()
    } else {
        return
    }
}

const renderPage = () => {
    renderCarrito(carrito)
    mostPopular.addEventListener('click', addCarrito)
    finding.addEventListener('click', addCarrito)
    populars = menu.filter(prod => prod.popular === true);
    recomendada = menu.filter(prod => prod.recomendada === true);
    finding.innerHTML = populars.map(prod => rendersection(prod)).join('')
    categorie.innerHTML = categories.map(cat => renderCategories(cat)).join('')
    mostPopular.innerHTML = recomendada.map(prod => renderPopular(prod)).join('')

}
const renderCompra = (menu) => {

    return `<div class = "card buy_cart" >
             <img  class = "img" src = "${menu.img}" >
            <div class = "text_card" >
                <span class = "tittle_card" > ${menu.name} </span> 
                <p class = "subtitle_card" >${menu.data}</p> 
                <span class="price_card">$ ${menu.precio} </span> 
            </div> 
            <button class = "btn btn_card" data-id = ${menu.id} data-resta = "resta">-</button>
            <span id = "cant_item" data-id = ${menu.id}>${menu.cant}</span>
            <button class = "btn btn_card" data-id = ${menu.id} >+</button>
            </div> 
            `
}
const buyItems = (e) => {
        addCarrito(e)
    }
    /*CARRITO FUNCIONES*/
const toggleCart = () => {
    checkCarrito(carrito);
    cartMenu.classList.remove('hidden');
    cartMenu.classList.toggle('open_cart');
    overlay.classList.toggle('show_overlay');
    sellCart.addEventListener('click', buyItems)
    precioTotal.textContent = setPrecio(carrito)
    subTotal.textContent = setPrecio(carrito)

}
const renderCarrito = (carrito) => {
    sellCart.innerHTML = carrito.map(prod =>
        renderCompra(prod)).join('')
}

const compraFinal = () => {
    if (!carrito.length) return;
    if (window.confirm('Desea completar su compra?')) {
        carrito = [];
        saveCarrito(carrito)
        alert('Compra exitosa');
        precioTotal.textContent = setPrecio(carrito)
        subTotal.textContent = setPrecio(carrito)
        renderCarrito(carrito)
        cantProductos.textContent = cantTotalproductos()
    }
};
const checkCarrito = (carrito) => {
    console.log(carrito)
    if (carrito.length === 0) {
        btnBuy.classList.remove('enable_buy', 'btn_buy')
        btnBuy.classList.add('disable_buy')
        sellCart.innerHTML = `<h4 class = "cart_empty">No hay productos en el carrito</h4>`
    } else {
        btnBuy.classList.remove('disable_buy')
        btnBuy.classList.add('btn_buy')
    }
}

const closeCart = () => {
    cartMenu.classList.remove('open_cart');
    overlay.classList.remove('show_overlay');
    
};

const closeOnScroll = () => {
    if (!cartMenu.classList.contains('open_cart'))
        return;

    cartMenu.classList.remove('open_cart');
    overlay.classList.remove('show_overlay');
};

const init = () => {
    window.addEventListener('DOMContentLoaded', renderPage);
    cartBtn.addEventListener('click', toggleCart);
    btnClose.addEventListener('click', closeCart);
    window.addEventListener('scroll', closeOnScroll);
    cantProductos.textContent = cantTotalproductos()
    btnBuy.addEventListener('click', compraFinal)
}

init()