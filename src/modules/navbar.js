import { d } from './general';

const button = (text) => {
  const btn = d.createElement('button');
  btn.id = `btn_${text}`;
  btn.type = 'button';
  btn.textContent = `${text}`;
  return btn;
};

export default function navbar() {
  const navbar = d.createElement('nav');
  navbar.id = 'navbar';
  navbar.classList.add('flex-mid-col');

  navbar.appendChild(button('home'));

  const title = d.createElement('h1');
  title.textContent = 'Aracne';
  navbar.appendChild(title);

  navbar.appendChild(button('menu'));

  return navbar;
}
