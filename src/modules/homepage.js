import dinnerpic from '../assets/pictures/restaurant-dinner.jpg';
import bugs from '../assets/pictures/bugs.jpg';
import {
  d, divider,
} from './general';

const article = (text, pic) => {
  const dishes = d.createElement('article');
  dishes.id = 'dishes';
  dishes.classList.add('flex-mid-col');
  dishes.style.backgroundImage = `url(${pic})`;

  const dishesH3 = d.createElement('h3');
  dishesH3.id = 'dishes_h3';
  dishesH3.textContent = text;
  dishes.appendChild(dishesH3);
  return dishes;
};

export default function services() {
  const services = d.createElement('section');
  services.id = 'services';

  services.appendChild(divider());

  services.appendChild(article('"Ample, yet intimate dining rooms for couples and family groups."', dinnerpic));

  services.appendChild(divider());

  services.appendChild(article('"Exotic dishes featuring organicly grown insects and bugs, delicately served by international native chefs"', bugs));

  services.appendChild(divider());

  return services;
}
