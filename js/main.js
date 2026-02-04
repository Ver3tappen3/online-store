function renderProducts() {
  const grid = document.getElementById("productsGrid");
  if (!grid || typeof products === "undefined") return;

  grid.innerHTML = products
    .map(
      (p) => `
      <div class="col-12 col-sm-6 col-md-4">
        <div class="card h-100">
          <img src="${p.image}" class="card-img-top" alt="${p.title}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${p.title}</h5>
            <p class="card-text">${p.description}</p>
            <div class="mt-auto">
              <div class="fw-bold mb-2">${p.price.toLocaleString()} ₸</div>
              <a href="product.html?id=${p.id}" class="btn btn-primary w-100">
                Подробнее
              </a>
            </div>
          </div>
        </div>
      </div>
    `
    )
    .join("");
}

renderProducts();
