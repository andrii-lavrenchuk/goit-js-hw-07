const countEl = document.querySelector('#value');
const incrementBtnEl = document.querySelector('[data-action="increment"]');
const decrementBtnEl = document.querySelector('[data-action="decrement"]');
let counterValue = 0;

const increment = () => {
  counterValue += 1;
  countEl.textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  countEl.textContent = counterValue;
};

incrementBtnEl.addEventListener('click', increment);
decrementBtnEl.addEventListener('click', decrement);
