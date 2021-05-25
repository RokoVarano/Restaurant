import map from '../assets/pictures/map.png';

export const d = document;

export function divider(parent) {
  const divider = d.createElement('div');
  divider.classList.add('divider');
  parent.appendChild(divider);
}

export function header(parent, title, subtitle) {
  const header = d.createElement('section');
  header.id = 'header';
  header.classList.add('flex-mid-col');
  parent.appendChild(header);

  const headerH1 = d.createElement('h1');
  headerH1.id = 'header_h1';
  headerH1.classList.add('flex-mid-col');
  headerH1.textContent = title;
  header.appendChild(headerH1);

  const headerH3 = d.createElement('h3');
  headerH3.id = 'header_h3';
  headerH3.classList.add('flex-mid-col');
  headerH3.textContent = subtitle;
  header.appendChild(headerH3);
}

export function footer(parent) {
  const footer = d.createElement('footer');
  footer.id = 'footer';
  footer.classList.add('flex-mid-col');
  parent.appendChild(footer);

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
}
