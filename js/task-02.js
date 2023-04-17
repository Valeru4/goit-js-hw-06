// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>

// В JavaScript есть массив строк.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.



const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// ingredients.forEach(ingredient => { 
//   const itemEl = document.createElement('li')
//   itemEl.textContent = ingredient;
//   itemEl.classList.add('.item')
//   navEl.appendChild(itemEl)
// });


const navEl = document.getElementById('ingredients')


const ingredientNewArr = ingredients.map(ingredient => {
  const itemEl = document.createElement('li')
  itemEl.textContent = ingredient;
  itemEl.classList.add('.item');
  return itemEl
})
navEl.append(...ingredientNewArr)



