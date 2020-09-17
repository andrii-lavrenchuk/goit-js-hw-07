const inputEl = document.querySelector('#validation-input');

const getOutOfFocus = event => {
  if (event.target.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else if (event.target.value.length === 0) {
    inputEl.classList.remove('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
};

inputEl.addEventListener('blur', getOutOfFocus);
