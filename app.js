const products = [
  {id:1, name:"Rohu Fish", price:300, img:"assets/fish1.png"},
  {id:2, name:"Katla Fish", price:350, img:"assets/fish2.png"},
  {id:3, name:"Prawn", price:500, img:"assets/fish3.png"}
];

let cart = [];

function loadProducts() {
  const productList = document.getElementById('product-list');
  products.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>₹${p.price} / kg</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  document.getElementById('cart-count').innerText = cart.length;
}

function viewCart() {
  document.getElementById('cart-section').classList.remove('hidden');
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
  });
}

function checkout() {
  alert("Checkout successful! (Demo only)");
  cart = [];
  document.getElementById('cart-count').innerText = 0;
  document.getElementById('cart-section').classList.add('hidden');
}

window.onload = loadProducts;