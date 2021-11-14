import data from '../data/menu.json';
import createMenu from '../template/menu.hbs';
const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', createMenu(data));

console.log(createMenu(data));
