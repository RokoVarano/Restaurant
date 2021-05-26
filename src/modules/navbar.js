import { d } from './general';

const button = (text, fx) => {
  const btn = d.createElement('button');
  btn.id = `btn_${text}`;
  btn.type = 'button';
  btn.textContent = `${text}`;
  btn.onclick = (fx);
  return btn;
};

export default function navbar(fx, fy) {
  const navbar = d.createElement('nav');
  navbar.id = 'navbar';
  navbar.classList.add('flex-mid-col');

  navbar.appendChild(button('home', fx));

  const title = d.createElement('h1');
  title.textContent = 'Aracne';
  navbar.appendChild(title);

  navbar.appendChild(button('menu', fy));

  return navbar;
}
