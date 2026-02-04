const CART_KEY = "cart";
const FAV_KEY = "favorites";

function readJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getCart() {
  return readJSON(CART_KEY, []); 
}

function setCart(cart) {
  writeJSON(CART_KEY, cart);
}

function getCartCount() {
  return getCart().reduce((sum, item) => sum + (item.qty || 0), 0);
}

function getFavorites() {
  return readJSON(FAV_KEY, []); 
}

function setFavorites(favs) {
  writeJSON(FAV_KEY, favs);
}

function getFavCount() {
  return getFavorites().length;
}
