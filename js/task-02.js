const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsRef = document.querySelector('#ingredients');

const ingredientsAll = ingredients.map((ingredient) => {
const ing = document.createElement("li");
ing.textContent = ingredient;
ing.classList.add('item');
return ing;
 });
 ingredientsAll.forEach((ingredientElement) => {
  ingredientsRef.append(ingredientElement);
});

