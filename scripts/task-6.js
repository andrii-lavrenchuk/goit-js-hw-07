const inputEl = document.querySelector('#validation-input');
// console.log(inputEl.value === inputEl.dataset.length);

// const getOutOfFocus = event => {
//   if (event.target.value.length === Number(inputEl.dataset.length)) {
//     inputEl.classList.add('valid');
//     inputEl.classList.remove('invalid');
//   } else if (event.target.value.length !== Number(inputEl.dataset.length)) {
//     inputEl.classList.add('invalid');
//     inputEl.classList.remove('valid');
//   } else {
//     inputEl.classList.remove('valid');
//     inputEl.classList.remove('invalid');
//   }
// };

// inputEl.addEventListener('blur', getOutOfFocus);
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

// e
// if (event.target.value.length === Number(inputEl.dataset.length)) {
//   inputEl.classList.add('valid');
// } else if (event.target.value.length !== Number(inputEl.dataset.length)) {
//   inputEl.classList.remove('valid');
//   inputEl.classList.add('invalid');
// }
//
//   console.log('Скільки юзер ввів', event.target.value.length);
//   console.log('Скільки треба ввести символів ', inputEl.dataset.length);
//   console.log(
//     'Чи рівні значення ',
//     Number(inputEl.dataset.length) === event.target.value.length,
//   );
