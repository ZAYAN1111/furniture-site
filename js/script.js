const cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  alert(`${name} added to cart!`);
  localStorage.setItem("cart", JSON.stringify(cart));
}

window.onload = function() {
  if (document.getElementById("cart-items")) {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;
    let list = "";
    items.forEach(item => {
      total += item.price;
      list += `<li>${item.name} - $${item.price}</li>`;
    });
    document.getElementById("cart-items").innerHTML = list;
    document.getElementById("total").innerText = `Total: $${total}`;
  }
}
function filterProducts() {
  const selectedCategory = document.getElementById("categoryFilter").value;
  const products = document.querySelectorAll(".product");

  products.forEach(product => {
    const category = product.getAttribute("data-category");
    if (selectedCategory === "all" || category === selectedCategory) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}
