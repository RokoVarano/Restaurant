import dinnerpic from './assets/pictures/restaurant-dinner.jpg';
import bugs from './assets/pictures/bugs.jpg';
import map from './assets/pictures/map.png';
import jungle from './assets/pictures/jungle.jpg';
import './style.scss';

const d = document;

const divider = (parent) => {
  const divider = d.createElement('div');
  divider.classList.add('divider');
  parent.appendChild(divider);
};
const body = d.querySelector('body');
body.style.backgroundImage = `url(${jungle})`;
body.classList.add('flex-mid-col');

const main = d.createElement('div');
main.id = 'main';
body.appendChild(main);

const header = d.createElement('section');
header.id = 'header';
header.classList.add('flex-mid-col');
main.appendChild(header);

const headerH1 = d.createElement('h1');
headerH1.id = 'header_h1';
headerH1.classList.add('flex-mid-col');
headerH1.textContent = 'Aracne';
header.appendChild(headerH1);

const headerH3 = d.createElement('h3');
headerH3.id = 'header_h3';
headerH3.classList.add('flex-mid-col');
headerH3.textContent = 'Exotic arthropod cuisine';
header.appendChild(headerH3);

divider(main);

const services = d.createElement('section');
services.id = 'services';
main.appendChild(services);
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

divider(services);

const footer = d.createElement('footer');
footer.id = 'footer';
footer.classList.add('flex-mid-col');
body.appendChild(footer);

const address = d.createElement('figure');
address.id = 'address';
address.classList.add('flex-mid-col');
footer.appendChild(address);

const addMap = d.createElement('img');
addMap.id = 'add_map';
addMap.src = map;
address.appendChild(addMap);

const addCaption = d.createElement('figcaption');
addCaption.id = 'add_caption';
addCaption.textContent = 'Imaginary Street 123, NoWhere City';
address.appendChild(addCaption);

const contact = d.createElement('ul');
contact.id = 'contact';
footer.appendChild(contact);

const phone = d.createElement('li');
phone.id = 'phone';
phone.textContent = 'Phone: +1 7893 8765';
contact.appendChild(phone);

const email = d.createElement('li');
email.id = 'email';
email.textContent = 'Email: aracne@jokemail.com';
contact.appendChild(email);
