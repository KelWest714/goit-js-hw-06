const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsList = document.querySelector('#ingredients');

const makeElement = element => {
  const el = document.createElement(`li`);
  el.classList.add(`item`);
  el.textContent = element;

  return el;
};

const elementMarkUp = ingredients.map(makeElement);
ingredientsList.append(...elementMarkUp);
