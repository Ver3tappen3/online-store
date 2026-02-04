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

function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function renderProductPage() {
  const root = document.getElementById("productView");
  if (!root || typeof products === "undefined") return;

  const id = Number(getQueryParam("id"));
  const product = products.find((p) => p.id === id);

  if (!product) {
    root.innerHTML = `<div class="alert alert-danger">Товар не найден</div>`;
    return;
  }

  root.innerHTML = `
    <div class="row g-4">
      <div class="col-12 col-md-6">
        <img src="${product.image}" alt="${product.title}" class="img-fluid rounded border">
      </div>

      <div class="col-12 col-md-6">
        <h1 class="mb-2">${product.title}</h1>
        <p class="text-muted">${product.description}</p>
        <div class="fs-4 fw-bold mb-3">${product.price.toLocaleString()} ₸</div>

        <div class="d-flex gap-2">
          <button class="btn btn-success" id="addToCartBtn">В корзину</button>
          <button class="btn btn-outline-danger" id="addToFavBtn">В избранное</button>
        </div>
      </div>
    </div>
  `;
}

renderProductPage();
