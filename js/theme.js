const THEME_KEY = "theme"; 

function applyTheme(theme) {
  const root = document.documentElement; 
  if (theme === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
}

function getSavedTheme() {
  return localStorage.getItem(THEME_KEY) || "light";
}

function toggleTheme() {
  const current = getSavedTheme();
  const next = current === "dark" ? "light" : "dark";
  localStorage.setItem(THEME_KEY, next);
  applyTheme(next);
}

applyTheme(getSavedTheme());
