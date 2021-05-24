import cuadro1_jpeg from './assets/pictures/cuadro1.jpeg';
import "./style.scss";

const d = document

const divider = parent => {
  const divider = d.createElement('div');
  divider.classList.add('divider');
  parent.appendChild(divider);
}
const body = d.querySelector('body');
body.classList.add('flex-mid-col');

const main = d.createElement('div');
main.id = 'main';
body.appendChild(main);

const header = d.createElement('section');
header.id = 'header';
header.classList.add('flex-mid-col');
main.appendChild(header);

const header_h1 = d.createElement('h1');
header_h1.id = 'header_h1';
header_h1.classList.add('flex-mid-col');
header_h1.textContent = 'Aracne';
header.appendChild(header_h1);

const header_h3 = d.createElement('h3');
header_h3.id = 'header_h3';
header_h3.classList.add('flex-mid-col');
header_h3.textContent = 'Exotic arthropod cuisine';
header.appendChild(header_h3);

divider(main);

const services = d.createElement('section');
services.id = 'services';
main.appendChild(services);

divider(services);

const venues = d.createElement('article');
venues.id = 'venues'
venues.classList.add('flex-mid-col');
services.appendChild(venues);

const venues_h3 = d.createElement('h3')
venues_h3.id = 'venues_h3';
venues_h3.textContent = '"Ample, yet intimate dining rooms for couples and family groups."'
venues.appendChild(venues_h3);

const venues_pic = d.createElement('div');
venues_pic.id = 'venues_pic';
venues.appendChild(venues_pic);

divider(services);

const dishes = d.createElement('article');
dishes.id = 'dishes'
dishes.classList.add('flex-mid-col');
services.appendChild(dishes);

const dishes_h3 = d.createElement('h3')
dishes_h3.id = 'dishes_h3';
dishes_h3.textContent = '"Exotic dishes featuring organicly grown insects and bugs, delicately served by international native chefs"';
dishes.appendChild(dishes_h3);

const dishes_pic = d.createElement('div');
dishes_pic.id = 'dishes_pic';
dishes.appendChild(dishes_pic);

divider(services);

const footer = d.createElement('footer');
footer.id = 'footer';
footer.classList.add('flex-mid-col');
body.appendChild(footer);

const address = d.createElement('figure');
address.id = 'address';
footer.appendChild(address);

const add_map = d.createElement('img');
add_map.id = 'add_map';
// img.src = 
address.appendChild(add_map);

const add_caption = d.createElement('figcaption');
add_caption.id = 'add_caption';
add_caption.textContent = 'Imaginary Street 123, NoWhere City'
address.appendChild(add_caption);

const contact = d.createElement('ul');
contact.id = 'contact';
footer.appendChild(contact);

const phone = d.createElement('li');
phone.id = 'phone';
phone.textContent = 'Phone: +1 7893 8765'
contact.appendChild(phone);

const email = d.createElement('li');
email.id = 'email';
email.textContent = 'Email: aracne@jokemail.com'
contact.appendChild(email);



