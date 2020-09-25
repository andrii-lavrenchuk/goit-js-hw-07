const inputEl = document.querySelector('#name-input');

const nameOutputEl = document.querySelector('#name-output');

const changeName = evt => {
  nameOutputEl.textContent =
    evt.currentTarget.value === '' ? 'незнакомец' : inputEl.value;
};

inputEl.addEventListener('input', changeName);
