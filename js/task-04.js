// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и 
// уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

//   Создай переменную counterValue в которой будет храниться текущее значение счетчика и 
// инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.



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
