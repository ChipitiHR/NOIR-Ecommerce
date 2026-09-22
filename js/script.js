document.addEventListener("DOMContentLoaded", () => {
  const products = document.querySelectorAll(".product-card");
  const categories = document.querySelectorAll(".category");
  const searchInput = document.getElementById("searchInput");
  const sortProducts = document.getElementById("sortProducts");
  const productGrid = document.getElementById("productGrid");

  categories.forEach(button => {
    button.addEventListener("click", function () {
      categories.forEach(b => b.classList.remove("active"));
      this.classList.add("active");
      const selected = this.dataset.category;
      products.forEach(product => {
        product.style.display = (selected === "all" || product.dataset.category === selected) ? "" : "none";
      });
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const search = this.value.toLowerCase().trim();
      products.forEach(product => {
        product.style.display = product.textContent.toLowerCase().includes(search) ? "" : "none";
      });
    });
  }

  if (sortProducts && productGrid) {
    const originalOrder = Array.from(products);
    sortProducts.addEventListener("change", function () {
      const arr = Array.from(products);
      if (this.value === "low") arr.sort((a,b) => Number(a.dataset.price) - Number(b.dataset.price));
      else if (this.value === "high") arr.sort((a,b) => Number(b.dataset.price) - Number(a.dataset.price));
      else arr.sort((a,b) => originalOrder.indexOf(a) - originalOrder.indexOf(b));
      arr.forEach(product => productGrid.appendChild(product));
    });
  }

  document.querySelectorAll(".clickable-product").forEach(product => {
    product.style.cursor = "pointer";
    product.addEventListener("click", function () {
      const selectedProduct = {
        brand: this.dataset.brand,
        name: this.dataset.name,
        price: this.dataset.price,
        image: this.dataset.image,
        category: this.dataset.category
      };
      localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
      window.location.href = "./producto.html";
    });
  });
});
