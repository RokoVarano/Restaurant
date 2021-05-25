import jungle from './assets/pictures/jungle.jpg';
import './style.scss';
import {
  d, divider, header, footer,
} from './modules/general';
import services from './modules/homepage';

const body = d.querySelector('body');
body.style.backgroundImage = `url(${jungle})`;
body.classList.add('flex-mid-col');

const main = d.querySelector('#content');

header(main, 'Aracne', 'Exotic Arthropod Cuisine');

divider(main);

services(main);

divider(main);

footer(body);
