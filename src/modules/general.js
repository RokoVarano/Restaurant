import map from '../assets/pictures/map.png';

export const d = document;

const contactInfo = (name, text) => {
  const item = d.createElement('li');
  item.id = `${name}`;
  item.textContent = text;
  return item;
};

export function divider() {
  const divider = d.createElement('div');
  divider.classList.add('divider');
  return divider;
}

export function header(title, subtitle) {
  const header = d.createElement('section');
  header.id = 'header';
  header.classList.add('flex-mid-col');

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

  return header;
}

export function footer() {
  const footer = d.createElement('footer');
  footer.id = 'footer';
  footer.classList.add('flex-mid-col');

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

  contact.appendChild(contactInfo('phone', 'Phone: +1 7893 8765'));

  contact.appendChild(contactInfo('email', 'Email: aracne@jokemail.com'));

  return footer;
}
