const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const itemOfIngredients = document.createElement('li');
// itemOfIngredients.textContent = ingredients[0];
// itemOfIngredients.classList.add("item");

const createListOfIngredients = ingredients.map((el) => {
  const itemOfIngredients = document.createElement('li');
itemOfIngredients.textContent = el;
itemOfIngredients.classList.add("item");

return itemOfIngredients;
})

const containerOfIngredients = document.querySelector('#ingredients')

containerOfIngredients.append(...createListOfIngredients);
