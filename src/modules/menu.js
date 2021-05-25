import { d } from './general';

export default function menuContainer(item) {
  const menuContainer = d.createElement('div');
  menuContainer.classList.add('menu_container');

  const figure = d.createElement('figure');
  menuContainer.appendChild(figure);

  const img = d.createElement('img');
  img.src = item.picture;
  figure.appendChild(img);

  const caption = d.createElement('figcaption');
  figure.appendChild(caption);

  const dishName = d.createElement('h3');
  dishName.textContent = `$${item.price}: ${item.title}`;
  caption.appendChild(dishName);

  const description = d.createElement('p');
  description.textContent = item.text;
  caption.appendChild(description);

  return menuContainer;
}
