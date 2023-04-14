const navEl = document.getElementById('categories')
const itemArrayEl = navEl.children
console.log(`Number of categories: ${itemArrayEl.length}`)




const categoriesList = document.getElementById("categories");
const itemEl = navEl.querySelectorAll(".item");


itemEl.forEach(item => {
  const itemName = item.firstElementChild;
  const totalItemEl = item.querySelectorAll('li');

    console.log(`Category: ${itemName.textContent}
Elements: ${totalItemEl.length}`);
});

