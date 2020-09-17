const inputEl = document.querySelector('#name-input');

const nameOutputEl = document.querySelector('#name-output');

const changeName = () => {
  nameOutputEl.textContent =
    inputEl.value === '' ? 'незнакомец' : inputEl.value;
};

inputEl.addEventListener('input', changeName);
