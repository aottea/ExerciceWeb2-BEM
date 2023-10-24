import './src/css/app.scss';

let menuButton = document.getElementById('menu-button');
menuButton.addEventListener('click', function () {
  let imgClosed = document.getElementById('closed');
  let imgOpened = document.getElementById('opened');
  let menu = document.getElementById('menu');
  imgClosed.classList.toggle('hidden');
  imgOpened.classList.toggle('hidden');
  menu.classList.toggle('hidden');
});
