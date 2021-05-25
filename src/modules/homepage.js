import dinnerpic from '../assets/pictures/restaurant-dinner.jpg';
import bugs from '../assets/pictures/bugs.jpg';
import {
  d, divider,
} from './general';

export default function services(parent) {
  const services = d.createElement('section');
  services.id = 'services';
  parent.appendChild(services);
  divider(services);

  const venues = d.createElement('article');
  venues.id = 'venues';
  venues.classList.add('flex-mid-col');
  venues.style.backgroundImage = `url(${dinnerpic})`;
  services.appendChild(venues);

  const venuesH3 = d.createElement('h3');
  venuesH3.id = 'venues_h3';
  venuesH3.textContent = '"Ample, yet intimate dining rooms for couples and family groups."';
  venues.appendChild(venuesH3);

  divider(services);

  const dishes = d.createElement('article');
  dishes.id = 'dishes';
  dishes.classList.add('flex-mid-col');
  dishes.style.backgroundImage = `url(${bugs})`;
  services.appendChild(dishes);

  const dishesH3 = d.createElement('h3');
  dishesH3.id = 'dishes_h3';
  dishesH3.textContent = '"Exotic dishes featuring organicly grown insects and bugs, delicately served by international native chefs"';
  dishes.appendChild(dishesH3);
}
