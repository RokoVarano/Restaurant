import dinnerpic from '../assets/pictures/restaurant-dinner.jpg';
import bugs from '../assets/pictures/bugs.jpg';
import {
  d, divider,
} from './general';

const article = (text, pic, parent) => {
  const dishes = d.createElement('article');
  dishes.id = 'dishes';
  dishes.classList.add('flex-mid-col');
  dishes.style.backgroundImage = `url(${pic})`;
  parent.appendChild(dishes);

  const dishesH3 = d.createElement('h3');
  dishesH3.id = 'dishes_h3';
  dishesH3.textContent = text;
  dishes.appendChild(dishesH3);
};

export default function services(parent) {
  const services = d.createElement('section');
  services.id = 'services';
  parent.appendChild(services);

  divider(services);

  article('"Ample, yet intimate dining rooms for couples and family groups."', dinnerpic, services);

  divider(services);

  article('"Exotic dishes featuring organicly grown insects and bugs, delicately served by international native chefs"', bugs, services);

  divider(services);
}
