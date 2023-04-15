

const counterEL = document.getElementById('value');
const decremenEl = document.querySelector('[data-action = "decrement"]');
const incrementEL = document.querySelector('[data-action = "increment"]');

let counterValue = 0;

decremenEl.addEventListener('click', () => {
  counterValue -= 1;
  counterEL.textContent = counterValue;
});

incrementEL.addEventListener('click', () => {
  counterValue += 1;
  counterEL.textContent = counterValue;
});
