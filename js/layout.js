function headerTemplate() {
  return `
  <header class="border-bottom bg-light">
    <nav class="container py-3 d-flex align-items-center justify-content-between">
      <a href="index.html" class="fw-bold text-decoration-none text-dark">OnlineStore</a>

      <div class="d-none d-md-flex gap-3">
        <a href="categories.html" class="text-decoration-none text-dark">Категории</a>
        <a href="info.html" class="text-decoration-none text-dark">Инфо</a>
        <a href="profile.html" class="text-decoration-none text-dark">Кабинет</a>
      </div>

      <div class="d-flex align-items-center gap-3">
        <a href="favorites.html" class="text-decoration-none text-dark">
          ❤️ <span id="favCount">0</span>
        </a>
        <a href="cart.html" class="text-decoration-none text-dark">
          🛒 <span id="cartCount">0</span>
        </a>
        <button id="themeBtn" class="btn btn-outline-secondary btn-sm" type="button">
          🌙
        </button>
      </div>
    </nav>
  </header>
  `;
}

function footerTemplate() {
  const year = new Date().getFullYear();
  return `
  <footer class="border-top mt-5 bg-light">
    <div class="container py-4 text-center text-muted">
      <div class="mb-2">© ${year} OnlineStore</div>
      <div class="d-flex justify-content-center gap-3 flex-wrap">
        <a href="info.html#about" class="text-decoration-none">О нас</a>
        <a href="info.html#contacts" class="text-decoration-none">Контакты</a>
        <a href="info.html#delivery" class="text-decoration-none">Доставка</a>
        <a href="info.html#offer" class="text-decoration-none">Оферта</a>
      </div>
    </div>
  </footer>
  `;
}

function updateHeaderCounts() {
  const cartEl = document.getElementById("cartCount");
  const favEl = document.getElementById("favCount");

  if (cartEl && typeof getCartCount === "function") cartEl.textContent = String(getCartCount());
  if (favEl && typeof getFavCount === "function") favEl.textContent = String(getFavCount());
}

updateHeaderCounts();

