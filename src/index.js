import jungle from './assets/pictures/jungle.jpg';
import tarantula from './assets/pictures/tarantula.jpg';
import larvaDish from './assets/pictures/larvaDish.jpg';
import choccricket from './assets/pictures/choccricket.jpg';
import './style.scss';
import {
  d, divider, header, footer,
} from './modules/general';
import services from './modules/homepage';
import navbar from './modules/navbar';
import menuContainer from './modules/menu';

const menuList = [
  {
    title: 'Example 1',
    text: 'this is an example',
    picture: tarantula,
    price: 15,
  },
  {
    title: 'Larva Soup',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    picture: larvaDish,
    price: 20,
  },
  {
    title: 'Chocolate Dipped Crickets',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    picture: choccricket,
    price: 10,
  },
];

const body = d.querySelector('body');
body.style.backgroundImage = `url(${jungle})`;
body.classList.add('flex-mid-col');

const main = d.querySelector('#content');
main.classList.add('flex-mid-col');

const home = () => {
  main.innerHTML = '';

  main.appendChild(divider());

  main.appendChild(header('Aracne', 'Exotic Arthropod Cuisine'));

  main.appendChild(divider());

  main.appendChild(services());

  main.appendChild(divider());
};

const menu = () => {
  main.innerHTML = '';

  let i;
  for (i = 0; i < menuList.length; i += 1) {
    main.appendChild(menuContainer(menuList[i]));
  }
};

body.insertBefore(navbar(home, menu), main);

home();

body.appendChild(footer());