let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  document.getElementById("cart-count").innerText = cart.length;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
  });
  document.getElementById("total").innerText = total;
}

function toggleCart() {
  document.getElementById("cart").classList.toggle("hidden");
}

function checkout() {
  alert("Checkout complete! (Demo)");
  cart = [];
  total = 0;
  updateCart();
  document.getElementById("cart-count").innerText = 0;
  toggleCart();
}

document.getElementById("cart-btn").addEventListener("click", toggleCart);
