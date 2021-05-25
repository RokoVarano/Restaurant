import jungle from './assets/pictures/jungle.jpg';
import './style.scss';
import {
  d, divider, header, footer,
} from './modules/general';
import services from './modules/homepage';
import navbar from './modules/navbar';

const body = d.querySelector('body');
body.style.backgroundImage = `url(${jungle})`;
body.classList.add('flex-mid-col');

const main = d.querySelector('#content');

main.appendChild(navbar());

main.appendChild(divider());

main.appendChild(header('Aracne', 'Exotic Arthropod Cuisine'));

main.appendChild(divider());

main.appendChild(services());

main.appendChild(divider());

body.appendChild(footer());
