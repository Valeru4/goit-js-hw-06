const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const navEl = document.getElementById('ingredients')

ingredients.forEach(ingredient => { 
  const itemEl = document.createElement('li')
  itemEl.textContent = ingredient;
  itemEl.classList.add('.item')
  navEl.appendChild(itemEl)

});


