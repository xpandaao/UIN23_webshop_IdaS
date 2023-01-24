let cart = []

function addToCart(title, price) {
    cart.push({productTitle: title, productPrice: price, productQuantity: 1})

    console.log(cart)
    renderCart()
    document.querySelector("#cart .label").innerHTML = cart.length
    document.querySelector("#cartview").classList.remove("hidden")

}

function renderCart() {
    let listHTML = ""
    cart.map(prod => listHTML += `<li>
    <span class="title">${prod.productTitle}</span>
    <span class="price">${prod.productPrice},-</span>
    <span class="quantity">x${prod.productQuantity}</span>
    <button class="delete">X</button>
    </li>`)
    document.querySelector("#cartview ul").innerHTML = listHTML
    let totalPrice = 0
    cart.map()

function toggleCart() {
    document.querySelector("#cartview").classList.toggle("hidden")
}
