const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const { LIGHT, DARK } = Theme;
const THEME = 'theme';

const checkboxRef = document.querySelector('.theme-switch__toggle');

function start() {
  const theme = localStorage.getItem(THEME) || LIGHT;
  updateBodyTheme(theme);
  checkboxRef.checked = theme === DARK;
}
start();
checkboxRef.addEventListener('change', updateTheme);

function updateTheme(evt) {
  const theme = evt.target.checked ? DARK : LIGHT;
  updateDataLocalStorage(theme);
  updateBodyTheme(theme);
}

function updateDataLocalStorage(value) {
  localStorage.setItem(THEME, value);
}

function updateBodyTheme(theme) {
  document.body.className = theme;
}
